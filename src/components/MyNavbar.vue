<template>
  <header class="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 animate-fade-in border-b border-gray-200/50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo/Brand -->
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-glow">
          <span class="text-white font-bold text-xl">S</span>
        </div>
        <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 cursor-pointer font-montserrat">
          {{ brandName }}
        </div>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-8">
        <li v-for="(item, index) in navItems" :key="index">
          <a 
            :href="item.href" 
            class="group relative text-gray-700 hover:text-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
            :class="{ 'text-blue-600 bg-blue-50': activeSection === item.href.slice(1) }"
            @click="setActiveSection(item.href.slice(1))"
          >
            <span class="flex items-center space-x-2">
              <span class="text-lg">{{ item.icon }}</span>
              <span>{{ item.text }}</span>
            </span>
            <!-- Animated underline -->
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu"
        class="md:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-transform duration-300"
      >
        <span 
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': mobileMenuOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'opacity-0': mobileMenuOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': mobileMenuOpen }"
        ></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div 
      class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
        <ul class="py-4 space-y-2">
          <li v-for="(item, index) in navItems" :key="index">
            <a 
              :href="item.href"
              class="group flex items-center space-x-3 px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600"
              :class="{ 'text-blue-600 bg-blue-50 border-blue-600': activeSection === item.href.slice(1) }"
              @click="handleMobileClick(item.href.slice(1))"
            >
              <span class="text-xl">{{ item.icon }}</span>
              <span class="font-medium">{{ item.text }}</span>
              <span class="ml-auto transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Background overlay for mobile menu -->
    <div 
      v-if="mobileMenuOpen"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      brandName: 'MyPortfolio',
      activeSection: 'profil',
      mobileMenuOpen: false,
      navItems: [
        { text: 'Profil', href: '#profil', icon: '👤' },
        { text: 'Pendidikan', href: '#pendidikan', icon: '🎓' },
        { text: 'Skill', href: '#skill', icon: '⚡' },
        { text: 'Proyek', href: '#proyek', icon: '🚀' },
        { text: 'Kontak', href: '#kontak', icon: '📧' }
      ]
    }
  },
  mounted() {
    this.initializeScrollSpy();
    this.addSmoothScrolling();
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    handleMobileClick(section) {
      this.setActiveSection(section);
      this.closeMobileMenu();
    },
    setActiveSection(section) {
      this.activeSection = section;
    },
    initializeScrollSpy() {
      const sections = this.navItems.map(item => item.href.slice(1));
      const observerOptions = {
        root: null,
        rootMargin: '-50px 0px -50px 0px',
        threshold: 0.3
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, observerOptions);

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          observer.observe(element);
        }
      });
    },
    addSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  }
}
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-pulse-glow {
  animation: pulseGlow 2s infinite;
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}

/* Custom font families */
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

/* Glassmorphism effect */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
}

/* Hover effects */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom scrollbar for mobile menu */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .brand-text {
    font-size: 1.5rem;
  }
}

/* Active link indicator */
.nav-link-active {
  position: relative;
}

.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  border-radius: 1px;
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.3s ease;
}

/* Focus states for accessibility */
a:focus,
button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Loading shimmer effect */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}
</style>

<style>
/* Global styles for smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Prevent horizontal scroll on mobile */
body {
  overflow-x: hidden;
}
</style>