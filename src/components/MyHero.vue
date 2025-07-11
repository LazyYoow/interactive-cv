<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center min-h-screen">
    <!-- Left Content -->
    <div class="md:w-1/2 mb-10 md:mb-0 relative">
      <!-- Decorative elements -->
      <div class="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
      <div class="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-float-delayed"></div>
      
      <!-- Main heading with code syntax -->
      <div class="glass-effect p-6 rounded-2xl mb-6 animate-slide-in-left" style="animation-delay: 200ms;">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 font-fira">
          <span class="inline-block transform hover:scale-110 transition-transform duration-300 text-yellow-400">👋</span>
          <div class="mt-2">
            <span class="text-blue-300">console</span><span class="text-gray-500">.</span><span class="text-green-300">log</span><span class="text-gray-500">(</span>
          </div>
          <div class="ml-4 mt-2">
            <span class="text-orange-300">"Hello World, I'm "</span><span class="text-yellow-400">+</span>
          </div>
          <div class="ml-4 mt-2">
            <span class="text-pink-300 font-montserrat">"Stredows"</span>
          </div>
          <div class="mt-2">
            <span class="text-gray-500">);</span>
          </div>
        </h1>
      </div>
      
      <!-- Comment line -->
      <p class="text-lg text-gray-300 italic mb-4 animate-slide-in-left font-fira animate-pulse-custom" style="animation-delay: 400ms;">
        <span class="text-gray-800">// Also known as</span>
      </p>
      
      <!-- Typewriter name -->
      <div class="mb-8 animate-slide-in-left" style="animation-delay: 600ms;">
        <div class="typewriter text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 font-montserrat">
          Satrio Raja Nabil Rizky
        </div>
      </div>
      
      <!-- Role tags -->
      <div class="mb-8 animate-slide-in-left" style="animation-delay: 800ms;">
        <div class="flex flex-wrap gap-3 mb-4">
          <span class="px-4 py-2 bg-red-500 text-white font-semibold rounded-full text-sm hover-glow transition-all duration-300 hover:scale-105">
            🚀 Fullstack Web Developer Junior
          </span>
          <span class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full text-sm hover-glow transition-all duration-300 hover:scale-105">
            🎓 Informatics Student
          </span>
        </div>
      </div>
      
      <!-- Description -->
      <div class="glass-effect p-6 rounded-2xl mb-8 animate-slide-in-left" style="animation-delay: 1000ms;">
        <p class="text-lg text-gray-100 leading-relaxed">
          <span class="text-gray-700 italic">
            I am an active student at 
            <span class="font-semibold text-blue-300 hover:text-blue-800 transition-colors duration-300">
              Universitas Amikom Yogyakarta
            </span>, 
            pursuing a Bachelor's degree in Informatics Engineering with a strong passion for innovation in technology.
          </span>
        </p>
        <p class="text-blue-700 font-semibold mt-4 text-base">
          💡 Experienced in organization, teamwork collaboration, and always enthusiastic to learn the latest trends in IT.
        </p>
      </div>
      
      <!-- CTA Button -->
      <div class="animate-slide-in-left" style="animation-delay: 1200ms;">
        <a href="#kontak" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <span class="relative z-10 flex items-center">
            <span class="mr-2">📞</span>
            Hubungi Saya
            <span class="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </div>
    
    <!-- Right Content - Profile Image -->
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <div class="relative">
        <!-- Decorative rings -->
        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-20 animate-ping"></div>
        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 animate-pulse-ring"></div>
        
        <!-- Profile image -->
        <div class="relative w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl hover:scale-105 transition-transform duration-500 hover-rotate">
          <div class="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
            <img 
              src="@/assets/images/profile.jpg" 
              alt="Foto Profil Satrio Raja Nabil Rizky" 
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <!-- Fallback if image fails to load -->
            <div v-if="imageError" class="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center">
              <span class="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
        
        <!-- Floating elements -->
        <div class="absolute -top-8 -right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-float shadow-lg">
          <span class="text-2xl">⚡</span>
        </div>
        <div class="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center animate-float-delayed shadow-lg">
          <span class="text-2xl">🎯</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfileSection',
  data() {
    return {
      imageError: false
    }
  },
  mounted() {
    this.initializeAnimations();
    
  },
  methods: {
    handleImageError() {
      this.imageError = true;
    },
    initializeAnimations() {
      // Add smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Add intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, observerOptions);
      
      document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
    },
    addParticleEffect() {
      // Add particle effect on hover
      document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
          this.createParticle(e.clientX, e.clientY);
        }
      });
    },
    createParticle(x, y) {
      const particle = document.createElement('div');
      particle.className = 'fixed w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-50';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.animation = 'fadeOut 1s ease-out forwards';
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  }
}
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Fira+Code:wght@400;500&display=swap');

/* Custom animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blinkCaret {
  from, to { border-color: transparent }
  50% { border-color: #f59e0b; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes fadeOut {
  0% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-50px); }
}

/* Animation classes */
.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 3s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-pulse-custom {
  animation: pulse 2s ease-in-out infinite;
}

.animate-pulse-ring {
  animation: pulse 2s ease-in-out infinite;
  animation-delay: 0.5s;
}

/* Typewriter effect */
.typewriter {
  overflow: hidden;
  border-right: .15em solid #f59e0b;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    typing 3.5s steps(40, end),
    blinkCaret .75s step-end infinite;
  font-family: 'Fira Code', monospace;
}

/* Glassmorphism effect */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Custom font families */
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.font-fira {
  font-family: 'Fira Code', monospace;
}

/* Hover effects */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  transform: translateY(-2px);
}

.hover-rotate:hover {
  transform: rotate(5deg) scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .typewriter {
    font-size: 1.5rem;
    animation: 
      typing 4s steps(30, end),
      blinkCaret .75s step-end infinite;
  }
}
</style>

<style>
/* Global styles for background */
body {
  background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>