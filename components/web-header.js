class WebHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header class="fixed w-full top-0 bg-white z-50 shadow-sm">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex items-center justify-between h-24">
                        <!-- Logo -->
                        <a href="/" class="flex items-center">
                            <img src="assets/images/logo.png" alt="Weblumin" class="h-16 w-auto">
                        </a>

                        <!-- Desktop Navigation -->
                        <nav class="hidden md:flex items-center space-x-8">
                            <a href="/" class="flex items-center gap-2 text-gray-700 hover:text-weblumin-primary transition duration-300">
                                <i class="fas fa-home"></i>
                                <span>Home</span>
                            </a>
                            
                            <!-- Services Dropdown -->
                            <div class="relative group">
                                <button class="flex items-center gap-2 text-gray-700 hover:text-weblumin-primary transition duration-300">
                                    <i class="fas fa-th"></i>
                                    <span>Services</span>
                                    <i class="fas fa-chevron-down text-sm transition-transform duration-300 group-hover:rotate-180"></i>
                                </button>
                                <div class="absolute top-full left-0 w-64 bg-gradient-to-br from-weblumin-primary to-weblumin-secondary 
                                            rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                            transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                                    <a href="/services/web-development.html" 
                                       class="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/10">
                                        <i class="fas fa-code w-5"></i>
                                        <span>Web Development</span>
                                    </a>
                                    <a href="/services/mobile-apps.html" 
                                       class="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/10">
                                        <i class="fas fa-mobile-alt w-5"></i>
                                        <span>Mobile Apps</span>
                                    </a>
                                    <a href="/services/cloud-solutions.html" 
                                       class="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/10">
                                        <i class="fas fa-cloud w-5"></i>
                                        <span>Cloud Solutions</span>
                                    </a>
                                    <a href="/services/consulting.html" 
                                       class="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/10">
                                        <i class="fas fa-lightbulb w-5"></i>
                                        <span>Consulting</span>
                                    </a>
                                </div>
                            </div>

                            <a href="/portfolio.html" class="flex items-center gap-2 text-gray-700 hover:text-weblumin-primary transition duration-300">
                                <i class="fas fa-briefcase"></i>
                                <span>Portfolio</span>
                            </a>
                            <a href="/about.html" class="flex items-center gap-2 text-gray-700 hover:text-weblumin-primary transition duration-300">
                                <i class="fas fa-info-circle"></i>
                                <span>About</span>
                            </a>
                            <a href="/contact.html" class="flex items-center gap-2 text-gray-700 hover:text-weblumin-primary transition duration-300">
                                <i class="fas fa-envelope"></i>
                                <span>Contact</span>
                            </a>
                        </nav>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-button" class="md:hidden text-gray-700 hover:text-weblumin-primary transition duration-300">
                            <i class="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu Panel -->
                <div id="mobile-menu" class="fixed top-0 right-0 w-64 h-full bg-gradient-to-br from-weblumin-primary to-weblumin-secondary 
                                          transform translate-x-full transition-transform duration-300 ease-in-out md:hidden">
                    <div class="p-6">
                        <button id="mobile-menu-close" class="text-white/80 hover:text-white absolute top-4 right-4">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                        
                        <nav class="mt-8 space-y-4">
                            <a href="/" class="flex items-center gap-2 text-white/90 hover:text-white py-2">
                                <i class="fas fa-home w-5"></i>
                                <span>Home</span>
                            </a>
                            
                            <!-- Mobile Services Dropdown -->
                            <div class="space-y-2">
                                <button id="mobile-services-trigger" 
                                        class="flex items-center justify-between w-full text-white/90 hover:text-white py-2">
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-th w-5"></i>
                                        <span>Services</span>
                                    </div>
                                    <i class="fas fa-chevron-down text-sm transition-transform duration-300"></i>
                                </button>
                                <div id="mobile-services-dropdown" class="hidden pl-4 space-y-2">
                                    <a href="/services/web-development.html" class="flex items-center gap-2 text-white/80 hover:text-white py-2">
                                        <i class="fas fa-code w-5"></i>
                                        <span>Web Development</span>
                                    </a>
                                    <a href="/services/mobile-apps.html" class="flex items-center gap-2 text-white/80 hover:text-white py-2">
                                        <i class="fas fa-mobile-alt w-5"></i>
                                        <span>Mobile Apps</span>
                                    </a>
                                    <a href="/services/cloud-solutions.html" class="flex items-center gap-2 text-white/80 hover:text-white py-2">
                                        <i class="fas fa-cloud w-5"></i>
                                        <span>Cloud Solutions</span>
                                    </a>
                                    <a href="/services/consulting.html" class="flex items-center gap-2 text-white/80 hover:text-white py-2">
                                        <i class="fas fa-lightbulb w-5"></i>
                                        <span>Consulting</span>
                                    </a>
                                </div>
                            </div>

                            <a href="/portfolio.html" class="flex items-center gap-2 text-white/90 hover:text-white py-2">
                                <i class="fas fa-briefcase w-5"></i>
                                <span>Portfolio</span>
                            </a>
                            <a href="/about.html" class="flex items-center gap-2 text-white/90 hover:text-white py-2">
                                <i class="fas fa-info-circle w-5"></i>
                                <span>About</span>
                            </a>
                            <a href="/contact.html" class="flex items-center gap-2 text-white/90 hover:text-white py-2">
                                <i class="fas fa-envelope w-5"></i>
                                <span>Contact</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        `;

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const mobileMenuButton = this.querySelector('#mobile-menu-button');
        const mobileMenu = this.querySelector('#mobile-menu');
        const mobileMenuClose = this.querySelector('#mobile-menu-close');
        const servicesTrigger = this.querySelector('#mobile-services-trigger');
        const servicesDropdown = this.querySelector('#mobile-services-dropdown');

        // Mobile menu toggle
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
        });

        // Close mobile menu
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });

        // Services dropdown toggle
        servicesTrigger.addEventListener('click', () => {
            servicesDropdown.classList.toggle('hidden');
            const chevron = servicesTrigger.querySelector('.fa-chevron-down');
            chevron.style.transform = servicesDropdown.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    }
}

customElements.define('web-header', WebHeader);
