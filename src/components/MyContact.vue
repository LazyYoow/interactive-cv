<template>
  <footer id="kontak" class="relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-gradient"></div>
    
    <!-- Floating Stars -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="star in stars" :key="star.id" 
           class="absolute text-white opacity-30 animate-twinkle"
           :style="{ 
             left: star.x + '%', 
             top: star.y + '%', 
             fontSize: star.size + 'px',
             animationDelay: star.delay + 's' 
           }">
        ✦
      </div>
    </div>
    
    <!-- Particle Network -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <svg class="w-full h-full opacity-20">
        <defs>
          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#9333EA;stop-opacity:1" />
          </linearGradient>
        </defs>
        <g v-for="line in particleLines" :key="line.id">
          <line :x1="line.x1 + '%'" :y1="line.y1 + '%'" 
                :x2="line.x2 + '%'" :y2="line.y2 + '%'" 
                stroke="url(#particleGradient)" 
                stroke-width="1" 
                opacity="0.3"
                class="animate-pulse" 
                :style="{ animationDelay: line.delay + 's' }"/>
        </g>
      </svg>
    </div>
    
    <div class="relative z-10 py-20">
      <div class="container mx-auto px-6 text-center">
        <!-- Section Title -->
        <div class="mb-16" ref="titleRef">
          <h2 class="text-4xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent opacity-0 transform translate-y-1 transition-all duration-1000"
              :class="{ 'opacity-100 translate-y-0': isVisible }">
            Mari Berkolaborasi
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full transform scale-x-0 transition-transform duration-1000 delay-300" 
               :class="{ 'scale-x-100': isVisible }"></div>
          <p class="text-xl text-gray-300 mt-6 max-w-2xl mx-auto opacity-0 transform translate-y-4 transition-all duration-1000 delay-500"
             :class="{ 'opacity-100 translate-y-0': isVisible }">
            Saya selalu terbuka untuk proyek baru, diskusi teknologi, atau sekadar berbagi ide. Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!
          </p>
        </div>
        
        <!-- Contact Methods -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- Email -->
          <div class="contact-card group opacity-0 transform translate-y-8 transition-all duration-1000 delay-700"
               :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2 font-montserrat">Email</h3>
              <p class="text-gray-300 text-sm mb-4">Kirim pesan langsung</p>
              <a href="mailto:satrioraja@students.amikom.ac.id" 
                 class="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium">
                satrioraja@students.amikom.ac.id
              </a>
            </div>
          </div>
          
          <!-- WhatsApp -->
          <div class="contact-card group opacity-0 transform translate-y-8 transition-all duration-1000 delay-800"
               :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2 font-montserrat">WhatsApp</h3>
              <p class="text-gray-300 text-sm mb-4">Chat langsung</p>
              <a href="https://wa.me/6281367002004" 
                 target="_blank"
                 class="text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium">
                +62 813 6700 2004
              </a>
            </div>
          </div>
          
          <!-- Location -->
          <div class="contact-card group opacity-0 transform translate-y-8 transition-all duration-1000 delay-900"
               :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2 font-montserrat">Lokasi</h3>
              <p class="text-gray-300 text-sm mb-4">Universitas Amikom</p>
              <a href="https://maps.app.goo.gl/DVq6Mwp6vRDTHPQE7" 
                 target="_blank"
                 class="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium">
                Lihat di Google Maps
                </a>

            </div>
          </div>
        </div>
        
        <!-- CTA Button -->
        <div class="mb-16 opacity-0 transform translate-y-8 transition-all duration-1000 delay-1000"
             :class="{ 'opacity-100 translate-y-0': isVisible }">
          <a href="mailto:satriorajanabil@gmail.com" 
             class="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span>Mari Berkolaborasi</span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
        </div>
        
        <!-- Social Media Links -->
        <div class="flex justify-center items-center gap-6 mb-12 opacity-0 transform translate-y-8 transition-all duration-1000 delay-1100"
             :class="{ 'opacity-100 translate-y-0': isVisible }">
          <a v-for="social in socialLinks" 
             :key="social.name"
             :href="social.url" 
             target="_blank" 
             rel="noopener noreferrer"
             class="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20 hover:border-white/30">
            <component :is="social.icon" class="w-5 h-5" />
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>
        </div>
        
        <!-- Footer Text -->
        <div class="border-t border-white/20 pt-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-1200"
             :class="{ 'opacity-100 translate-y-0': isVisible }">
          <p class="text-gray-400 text-sm">
            &copy; {{ currentYear }} Satrio Raja Nabil Rizky. 
            <span class="text-gray-300">Dibuat dengan </span>
            <span class="text-red-400 animate-pulse">❤️</span>
            <span class="text-gray-300"> menggunakan Vue.js & Tailwind CSS</span>
          </p>
          <p class="text-gray-500 text-xs mt-2">
            Fullstack Web Developer Junior & Informatics Student at Universitas Amikom Yogyakarta
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'ModernContactFooter',
  setup() {
    const isVisible = ref(false)
    const titleRef = ref(null)
    const stars = ref([])
    const particleLines = ref([])
    
    const currentYear = computed(() => new Date().getFullYear())
    
    const socialLinks = [
      {
        name: 'GitHub',
        url: 'https://github.com/LazyYoow',
        icon: 'GitHubIcon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
        
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/satrior/',
        icon: 'LinkedInIcon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/satrio.rnr/',
        logo : 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
        icon: 'InstagramIcon'

      },
    ]
    
    // Generate random stars
    const generateStars = () => {
      for (let i = 0; i < 50; i++) {
        stars.value.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 5
        })
      }
    }
    
    // Generate particle connection lines
    const generateParticleLines = () => {
      for (let i = 0; i < 15; i++) {
        particleLines.value.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          delay: Math.random() * 3
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
    
    onMounted(() => {
      generateStars()
      generateParticleLines()
      const observer = setupIntersectionObserver()
      
      return () => {
        observer.disconnect()
      }
    })
    
    return {
      isVisible,
      titleRef,
      stars,
      particleLines,
      currentYear,
      socialLinks
    }
  },
  components: {
    GitHubIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      `
    },
    LinkedInIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      `
    },
    InstagramIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      `
    },
    TwitterIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      `
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

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 20s ease infinite;
}

.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Enhanced glassmorphism effect */
.contact-card > div {
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
  background: rgba(255, 255, 255, 0.1);
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
  .contact-card {
    transform: translateY(4px);
  }
  
  .contact-card:hover {
    transform: translateY(-2px);
  }
}

/* Particle animation */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Social media hover effects */
.social-link {
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.social-link:hover::before {
  transform: translateX(100%);
}
</style>