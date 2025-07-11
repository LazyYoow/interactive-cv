<template>
  <section id="pendidikan" class="py-20 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    
    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-particle particle-1"></div>
      <div class="floating-particle particle-2"></div>
      <div class="floating-particle particle-3"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="Riwayat Pendidikan" />
      
      <!-- Timeline Container -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Central Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full timeline-line"></div>
        
        <!-- Timeline Items -->
        <div class="space-y-12">
          <div 
            v-for="(edu, index) in educationHistory" 
            :key="edu.id"
            class="relative timeline-item"
            :class="{ 'timeline-left': index % 2 === 0, 'timeline-right': index % 2 !== 0 }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <!-- Timeline Node -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white shadow-lg timeline-node z-20">
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse opacity-50"></div>
            </div>
            
            <!-- Content Card -->
            <div 
              class="education-card"
              :class="index % 2 === 0 ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8 text-left'"
            >
              <div class="glass-card p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80">
                <!-- Period Badge -->
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm mb-4 shadow-lg">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ edu.period }}
                </div>
                
                <!-- Institution -->
                <h3 class="text-2xl font-bold text-gray-800 mb-2 font-montserrat">
                  {{ edu.institution }}
                </h3>
                
                <!-- Major -->
                <p v-if="edu.major" class="text-gray-600 font-medium">
                  {{ edu.major }}
                </p>
                
                <!-- Decorative Element -->
                <div class="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full opacity-20 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SectionTitle from './MySectionTitle.vue';

// Data ini akan kita pindah ke backend nanti
const educationHistory = [
  { 
    id: 1, 
    period: '2023 - Sekarang', 
    institution: 'Universitas Amikom Yogyakarta', 
    major: 'S1 - Teknik Informatika' 
  },
  { 
    id: 2, 
    period: '2020 - 2023', 
    institution: 'SMK Yadika Tanjungsari', 
    major: 'Teknik Komputer dan Jaringan' 
  },
  { 
    id: 3, 
    period: '2017 - 2020', 
    institution: 'SMP Muhammadiyah 3 Yogyakarta', 
    major: '' 
  },
  { 
    id: 4, 
    period: '2011 - 2017', 
    institution: 'SDIT Insan Sejahtera Sumedang', 
    major: '' 
  }
];

const isVisible = ref(false);

onMounted(() => {
  // Intersection Observer untuk animasi scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });

  // Animate timeline line
  const timelineLine = document.querySelector('.timeline-line');
  if (timelineLine) {
    observer.observe(timelineLine);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Fira+Code:wght@400;500&display=swap');

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

/* Background Grid Pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Floating Particles */
.floating-particle {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.particle-1 {
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #3B82F6, #8B5CF6);
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.particle-2 {
  width: 12px;
  height: 12px;
  background: linear-gradient(45deg, #F59E0B, #EF4444);
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.particle-3 {
  width: 6px;
  height: 6px;
  background: linear-gradient(45deg, #8B5CF6, #3B82F6);
  bottom: 30%;
  left: 80%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(-10px) rotate(240deg); }
}

/* Timeline Animations */
.timeline-item {
  opacity: 0;
  transform: translateY(50px);
  animation: slideUp 0.8s ease-out forwards;
}

.timeline-left {
  animation-name: slideInLeft;
}

.timeline-right {
  animation-name: slideInRight;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px) translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px) translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}

/* Timeline Line Animation */
.timeline-line {
  height: 0;
  animation: growLine 2s ease-out 0.5s forwards;
}

@keyframes growLine {
  to {
    height: 100%;
  }
}

/* Timeline Node Animation */
.timeline-node {
  animation: nodeAppear 0.6s ease-out forwards;
}

@keyframes nodeAppear {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

/* Glass Card Effect */
.glass-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease-in-out;
}

.glass-card:hover::before {
  left: 100%;
}

/* Education Card Sizing */
.education-card {
  width: calc(50% - 2rem);
  max-width: 400px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .education-card {
    width: 100%;
    max-width: none;
    margin: 0 !important;
    padding: 0 !important;
    text-align: center !important;
  }
  
  .timeline-line {
    left: 2rem;
  }
  
  .timeline-node {
    left: 2rem;
    transform: translateX(-50%);
  }
  
  .glass-card {
    margin-left: 4rem;
  }
  
  .timeline-item {
    padding-left: 0;
  }
}

/* Hover Effects */
.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Pulse Animation for Current Education */
.education-card:first-child .glass-card {
  animation: currentPulse 2s ease-in-out infinite;
}

@keyframes currentPulse {
  0%, 100% {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  50% {
    box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 10px 10px -5px rgba(59, 130, 246, 0.04);
  }
}
</style>