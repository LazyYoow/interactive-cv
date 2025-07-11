<template>
  <section id="proyek" class="py-20 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 animate-gradient"></div>
    
    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="float in floatingElements" :key="float.id" 
           class="absolute opacity-10 animate-float"
           :style="{ 
             left: float.x + '%', 
             top: float.y + '%', 
             animationDelay: float.delay + 's',
             fontSize: float.size + 'px'
           }">
        {{ float.icon }}
      </div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" ref="titleRef">
        <h2 class="text-4xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Proyek Unggulan
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transform scale-x-0 transition-transform duration-1000" 
             :class="{ 'scale-x-100': isVisible }"></div>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto opacity-0 transform translate-y-4 transition-all duration-1000 delay-300"
           :class="{ 'opacity-100 translate-y-0': isVisible }">
          Showcase proyek-proyek terbaik yang telah saya kembangkan dengan teknologi modern
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="(project, index) in projects" 
             :key="project.title"
             class="project-card group transform translate-y-8 opacity-0 transition-all duration-700"
             :class="{ 'translate-y-0 opacity-100': isVisible }"
             :style="{ transitionDelay: (index * 200) + 'ms' }"
             @mouseenter="playHoverEffect(index)"
             @mouseleave="stopHoverEffect(index)">
          
          <!-- Glassmorphism Card -->
          <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden
                      hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-4 transition-all duration-500
                      before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 
                      before:opacity-0 before:transition-opacity before:duration-300
                      group-hover:before:opacity-100">
            
            <!-- Project Status Badge -->
            <div class="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                 :class="getStatusColor(project.status)">
              {{ project.status }}
            </div>
            
            <!-- Image Container with Overlay -->
            <div class="relative h-64 overflow-hidden">
              <img :src="project.image" 
                   :alt="project.title" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Tech Stack Floating Pills -->
              <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span v-for="tech in project.tech.slice(0, 3)" 
                      :key="tech" 
                      class="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full border border-white/20">
                  {{ tech }}
                </span>
                <span v-if="project.tech.length > 3" 
                      class="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full border border-white/20">
                  +{{ project.tech.length - 3 }}
                </span>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-8">
              <!-- Project Title -->
              <h3 class="text-2xl font-bold text-gray-800 mb-3 font-montserrat group-hover:text-blue-600 transition-colors duration-300">
                {{ project.title }}
              </h3>
              
              <!-- Description -->
              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ project.description }}
              </p>
              
              <!-- Technologies Used -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Tech Stack</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.tech" 
                        :key="tech" 
                        class="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200/50 hover:from-blue-200 hover:to-purple-200 transition-all duration-200">
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- Project Stats -->
              <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50/50 rounded-2xl">
                <div class="text-center">
                  <div class="text-lg font-bold text-blue-600">{{ project.stats.duration }}</div>
                  <div class="text-xs text-gray-500">Duration</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-bold text-purple-600">{{ project.stats.team }}</div>
                  <div class="text-xs text-gray-500">Team Size</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-bold text-indigo-600">{{ project.stats.completion }}%</div>
                  <div class="text-xs text-gray-500">Complete</div>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex gap-3">
                <a :href="project.demo" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    Live Demo
                  </span>
                </a>
                <a :href="project.github" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </span>
                </a>
              </div>
            </div>
            
            <!-- Hover Glow Effect -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <!-- View More Projects Button -->
      <div class="text-center mt-16">
        <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
          <span class="relative z-10">Lihat Semua Proyek</span>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted,  } from 'vue'

export default {
  name: 'ModernProjectsSection',
  setup() {
    const isVisible = ref(false)
    const titleRef = ref(null)
    const floatingElements = ref([])
    
    const projects = [
      {
        title: 'Final Project Pemrograman Web',
        image: new URL('@/assets/images/pweb.png', import.meta.url).href,
        description: 'ITQOM adalah platform edukasi berbasis web yang dirancang untuk mendukung pelajar, mahasiswa, dan profesional dalam mengasah keterampilan IT melalui kursus online berbasis video, e-book, dan sertifikasi yang diakui. ITQOM bertujuan untuk menjadi solusi bagi pengembangan keahlian di bidang pemrograman dan teknologi..',
        tech: ['Vue.js', 'Node.js', 'Tailwind CSS', 'React.js', 'PHP', 'Python', 'MySQL', 'Midtrans', 'Git', 'Docker', 'Figma', 'Postman', 'REST API'],
        status: 'Completed',
        stats: {
          duration: '6 Bulan',
          team: '7 Orang',
          completion: 100
        },
        demo: '#',
        github: 'https://github.com/KingEery/FP_PemrogWeb'
      },
      {
        title: 'Final Project Amikom Computer Club (AMCC)',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        description: 'Platform learning management system untuk komunitas mahasiswa IT. Fitur mencakup forum diskusi, sharing resources, event management, dan sistem poin gamifikasi.',
        tech: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Redux', 'Material-UI', 'PWA'],
        status: 'In Progress',
        stats: {
          duration: '6 Bulan',
          team: '5 Orang',
          completion: 85
        },
        demo: '#',
        github: '#'
      }
    ]
    
    // Generate floating elements
    const generateFloatingElements = () => {
      const icons = ['💻', '🚀', '⚡', '🎯', '💡', '🔥', '⭐', '🌟']
      for (let i = 0; i < 12; i++) {
        floatingElements.value.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          size: Math.random() * 20 + 20,
          icon: icons[Math.floor(Math.random() * icons.length)]
        })
      }
    }
    
    // Intersection Observer for animations
    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true
            }
          })
        },
        { threshold: 0.2 }
      )
      
      if (titleRef.value) {
        observer.observe(titleRef.value)
      }
      
      return observer
    }
    
    // Utility functions
    const getStatusColor = (status) => {
      const colors = {
        'Completed': 'bg-gradient-to-r from-green-500 to-emerald-600',
        'In Progress': 'bg-gradient-to-r from-blue-500 to-indigo-600',
        'Planning': 'bg-gradient-to-r from-yellow-500 to-orange-600'
      }
      return colors[status] || 'bg-gray-500'
    }
    
    const playHoverEffect = (index) => {
      // Optional: Add sound effect or additional animations
      console.log(`Hovering project ${index}`)
    }
    
    const stopHoverEffect = (index) => {
      // Optional: Stop sound effect or reset animations
      console.log(`Stop hovering project ${index}`)
    }
    
    onMounted(() => {
      generateFloatingElements()
      const observer = setupIntersectionObserver()
      
      return () => {
        observer.disconnect()
      }
    })
    
    return {
      isVisible,
      titleRef,
      floatingElements,
      projects,
      getStatusColor,
      playHoverEffect,
      stopHoverEffect
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
  25% { transform: translateY(-10px) rotate(5deg); }
  50% { transform: translateY(0px) rotate(10deg); }
  75% { transform: translateY(-5px) rotate(-5deg); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.5); }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.project-card:hover {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Enhanced glassmorphism effect */
.project-card > div {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
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
  .project-card {
    transform: translateY(4px);
  }
  
  .project-card:hover {
    transform: translateY(-2px);
  }
}

/* Loading animation for images */
.project-card img {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button hover effects */
button:hover {
  transform: translateY(-2px);
}

/* Tech stack pills animation */
.project-card:hover .tech-pill {
  transform: scale(1.05);
}
</style>