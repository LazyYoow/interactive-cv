<template>
  <section id="skill" class="py-20 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 animate-gradient"></div>
    
    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="particle in particles" :key="particle.id" 
           class="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
           :style="{ left: particle.x + '%', top: particle.y + '%', animationDelay: particle.delay + 's' }"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" ref="titleRef">
        <h2 class="text-4xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Keahlian & Teknologi
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transform scale-x-0 transition-transform duration-1000" 
             :class="{ 'scale-x-100': isVisible }"></div>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto opacity-0 transform translate-y-4 transition-all duration-1000 delay-300"
           :class="{ 'opacity-100 translate-y-0': isVisible }">
          Teknologi dan tools yang saya kuasai dalam pengembangan web modern
        </p>
      </div>
      
      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(skill, index) in skills" 
             :key="skill.name"
             class="skill-card group relative transform translate-y-8 opacity-0 transition-all duration-700"
             :class="{ 'translate-y-0 opacity-100': isVisible }"
             :style="{ transitionDelay: (index * 100) + 'ms' }"
             @mouseenter="playHoverSound"
             @click="selectSkill(skill)">
          
          <!-- Glassmorphism Card -->
          <div class="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 h-full
                      hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500
                      before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 
                      before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300
                      group-hover:before:opacity-100">
            
            <!-- Skill Level Indicator -->
            <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                 :class="getLevelColor(skill.level)">
              {{ getLevelIcon(skill.level) }}
            </div>
            
            <!-- Skill Icon/Avatar -->
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              {{ getSkillIcon(skill.name) }}
            </div>
            
            <!-- Skill Name -->
            <h3 class="text-xl font-bold text-gray-800 text-center mb-2 font-montserrat group-hover:text-blue-600 transition-colors duration-300">
              {{ skill.name }}
            </h3>
            
            <!-- Skill Level -->
            <p class="text-gray-500 text-center text-sm mb-4 font-medium">
              {{ skill.level }}
            </p>
            
            <!-- Progress Bar -->
            <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"
                   :class="{ 'scale-x-100': isVisible }"
                   :style="{ width: getSkillPercentage(skill.level) + '%', transitionDelay: (index * 100 + 500) + 'ms' }"></div>
            </div>
            
            <!-- Hover Glow Effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <!-- Selected Skill Detail (Modal-like) -->
      <div v-if="selectedSkill" 
           class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
           @click="selectedSkill = null">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full transform scale-95 opacity-0 transition-all duration-300"
             :class="{ 'scale-100 opacity-100': selectedSkill }"
             @click.stop>
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              {{ getSkillIcon(selectedSkill.name) }}
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ selectedSkill.name }}</h3>
            <p class="text-gray-600 mb-4">Level: {{ selectedSkill.level }}</p>
            <p class="text-gray-700 text-sm">{{ getSkillDescription(selectedSkill.name) }}</p>
            <button @click="selectedSkill = null" 
                    class="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'ModernSkillsSection',
  setup() {
    const isVisible = ref(false)
    const titleRef = ref(null)
    const selectedSkill = ref(null)
    const particles = ref([])
    const skills = ref([]) // sekarang kosong dulu, diisi dari API

    const generateParticles = () => {
      for (let i = 0; i < 20; i++) {
        particles.value.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5
        })
      }
    }

    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true
            }
          })
        },
        { threshold: 0.3 }
      )

      if (titleRef.value) {
        observer.observe(titleRef.value)
      }

      return observer
    }

    // ===> TARIK DATA DARI BACKEND DEPLOY KAMU
    const fetchSkills = async () => {
      try {
        const res = await axios.get('https://interactive-cv-be.vercel.app/api/skills')
        skills.value = res.data
      } catch (err) {
        console.error('Gagal mengambil data skills:', err)
      }
    }

    const getSkillIcon = (skillName) => {
      const icons = {
        'Vue.js': 'V',
        'JavaScript': 'JS',
        'Tailwind CSS': 'T',
        'Node.js': 'N',
        'Express.js': 'E',
        'PostgreSQL': 'P',
        'Git & GitHub': 'G',
        'HTML5 & CSS3': 'H'
      }
      return icons[skillName] || '?'
    }

    const getLevelColor = (level) => {
      const colors = {
        'Mahir': 'bg-gradient-to-r from-green-500 to-emerald-600',
        'Menengah': 'bg-gradient-to-r from-yellow-500 to-orange-600',
        'Pemula': 'bg-gradient-to-r from-blue-500 to-indigo-600'
      }
      return colors[level] || 'bg-gray-500'
    }

    const getLevelIcon = (level) => {
      const icons = {
        'Mahir': '★',
        'Menengah': '◆',
        'Pemula': '○'
      }
      return icons[level] || '?'
    }

    const getSkillPercentage = (level) => {
      const percentages = {
        'Mahir': 90,
        'Menengah': 70,
        'Pemula': 50
      }
      return percentages[level] || 0
    }

    const getSkillDescription = (skillName) => {
      const descriptions = {
        'Vue.js': 'Framework JavaScript progresif untuk membangun antarmuka pengguna yang interaktif dan dinamis.',
        'JavaScript': 'Bahasa pemrograman yang powerful untuk pengembangan web modern, baik frontend maupun backend.',
        'Tailwind CSS': 'Framework CSS utility-first yang memungkinkan styling yang cepat dan konsisten.',
        'Node.js': 'Runtime JavaScript yang memungkinkan pengembangan aplikasi server-side yang scalable.',
        'Express.js': 'Framework web minimalis dan fleksibel untuk Node.js yang cepat dan ringan.',
        'PostgreSQL': 'Sistem basis data relasional open-source yang powerful dan reliable.',
        'Git & GitHub': 'Version control system dan platform kolaborasi untuk manajemen kode yang efektif.',
        'HTML5 & CSS3': 'Markup language dan styling language fundamental untuk pengembangan web modern.'
      }
      return descriptions[skillName] || 'Teknologi yang saya kuasai dalam pengembangan web.'
    }

    const selectSkill = (skill) => {
      selectedSkill.value = skill
    }

    const playHoverSound = () => {
      // optional
    }

    onMounted(() => {
      generateParticles()
      const observer = setupIntersectionObserver()
      fetchSkills() // TARIK DATA SAAT MOUNTED
      return () => observer.disconnect()
    })

    return {
      isVisible,
      titleRef,
      selectedSkill,
      particles,
      skills,
      getSkillIcon,
      getLevelColor,
      getLevelIcon,
      getSkillPercentage,
      getSkillDescription,
      selectSkill,
      playHoverSound
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Fira+Code:wght@300;400;500;600;700&display=swap');

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.font-fira-code {
  font-family: 'Fira Code', monospace;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(5deg); }
  66% { transform: translateY(5px) rotate(-5deg); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
  50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.7); }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.skill-card:hover {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Custom scrollbar for modal */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #3b82f6, #9333ea);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #2563eb, #7c3aed);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skill-card {
    transform: translateY(4px);
  }
  
  .skill-card:hover {
    transform: translateY(-2px);
  }
}

/* Enhanced glassmorphism effect */
.skill-card > div {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Loading animation for skill icons */
.skill-card .w-16 {
  background: linear-gradient(45deg, #3b82f6, #9333ea, #06b6d4);
  background-size: 300% 300%;
  animation: gradient 3s ease infinite;
}
</style>