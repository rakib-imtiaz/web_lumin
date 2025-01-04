class WebHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Create mobile menu in light DOM (outside shadow DOM)
        this.mobileMenu = document.createElement('div');
        this.mobileMenu.id = 'mobile-menu';
        this.mobileMenu.className = 'web-header__mobile-menu';
        this.mobileMenu.innerHTML = `
            <div class="web-header__mobile-panel">
                <button id="mobile-menu-close" aria-label="Close menu">
                    <i class="fas fa-times"></i>
                </button>
                
                <nav>
                    <a href="../index.html" class="web-header__mobile-link">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                    
                    <!-- Mobile Services Dropdown Trigger -->
                    <div class="web-header__mobile-link" id="mobile-services-trigger">
                        <div class="flex items-center gap-5">
                            <i class="fas fa-cogs"></i>
                            <span>Services</span>
                        </div>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    
                    <!-- Mobile Services Dropdown Content -->
                    <div class="web-header__mobile-dropdown" id="mobile-services-dropdown">
                        <a href="../services/web-development.html">
                            <i class="fas fa-code"></i>
                            <span>Web Development</span>
                        </a>
                        <a href="../services/mobile-apps.html">
                            <i class="fas fa-mobile-alt"></i>
                            <span>Mobile Apps</span>
                        </a>
                        <a href="../services/cloud-solutions.html">
                            <i class="fas fa-cloud"></i>
                            <span>Cloud Solutions</span>
                        </a>
                        <a href="../services/consulting.html">
                            <i class="fas fa-comments"></i>
                            <span>Consulting</span>
                        </a>
                    </div>

                    <a href="../about.html" class="web-header__mobile-link">
                        <i class="fas fa-info-circle"></i>
                        <span>About</span>
                    </a>
                    <a href="../portfolio.html" class="web-header__mobile-link">
                        <i class="fas fa-briefcase"></i>
                        <span>Portfolio</span>
                    </a>
                    <a href="../contact.html" class="web-header__mobile-link">
                        <i class="fas fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </nav>
            </div>
        `;
        document.body.appendChild(this.mobileMenu);

        // Add mobile menu styles to document head
        const mobileMenuStyles = document.createElement('style');
        mobileMenuStyles.textContent = `
            /* Existing mobile menu styles */
            .web-header__mobile-menu {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.7);
                opacity: 0;
                visibility: hidden;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 99999;
                backdrop-filter: blur(4px);
            }

            .web-header__mobile-panel {
                position: fixed;
                right: -100%;
                top: 0;
                height: 100%;
                width: 85%;
                max-width: 400px;
                background: linear-gradient(135deg, #00B5B5, #008080);
                box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
                padding: 4rem 2rem 2rem;
                overflow-y: auto;
                transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 100000;
            }

            .web-header__mobile-menu.active {
                opacity: 1;
                visibility: visible;
            }

            .web-header__mobile-menu.active .web-header__mobile-panel {
                right: 0;
            }

            .web-header__mobile-link {
                display: flex;
                align-items: center;
                gap: 1.25rem;
                padding: 1.25rem 0;
                color: white;
                text-decoration: none;
                font-size: 1.1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
            }

            .web-header__mobile-link:hover {
                padding-left: 0.5rem;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
            }

            .web-header__mobile-link i {
                width: 24px;
                text-align: center;
                font-size: 1.2rem;
                opacity: 0.9;
            }

            #mobile-menu-close {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.25rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            #mobile-menu-close:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(90deg);
            }

            .mobile-menu-header {
                padding-bottom: 2rem;
                margin-bottom: 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .mobile-menu-logo {
                width: 120px;
                height: auto;
                display: block;
            }

            .mobile-menu-contact {
                margin-top: 2rem;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
            }

            .mobile-menu-contact a {
                color: white;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem;
                font-size: 0.9rem;
                transition: all 0.3s ease;
            }

            .mobile-menu-contact a:hover {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
            }

            /* Mobile Services Dropdown Styles */
            .web-header__mobile-link {
                display: flex;
                align-items: center;
                gap: 1.25rem;
                padding: 1.25rem 0;
                color: white;
                text-decoration: none;
                font-size: 1.1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
            }

            /* Services trigger specific styles */
            #mobile-services-trigger {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-right: 1rem;
            }

            #mobile-services-trigger .fa-chevron-down {
                transition: transform 0.3s ease;
            }

            /* Mobile dropdown container */
            .web-header__mobile-dropdown {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                margin: 0.5rem 0 0.5rem 3rem;
            }

            .web-header__mobile-dropdown.active {
                max-height: 300px;
            }

            /* Dropdown items */
            .web-header__mobile-dropdown a {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem 1.25rem;
                color: white;
                text-decoration: none;
                font-size: 1rem;
                transition: all 0.2s ease;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }

            .web-header__mobile-dropdown a:last-child {
                border-bottom: none;
            }

            .web-header__mobile-dropdown a i {
                width: 20px;
                text-align: center;
                font-size: 1rem;
                opacity: 0.9;
            }

            .web-header__mobile-dropdown a:hover {
                background: rgba(255, 255, 255, 0.1);
                padding-left: 1.5rem;
            }

            /* Active state for services trigger */
            #mobile-services-trigger.active {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
            }
        `;
        document.head.appendChild(mobileMenuStyles);

        // Main header content in shadow DOM
        this.shadowRoot.innerHTML = `
            <!-- Include Font Awesome CSS inside shadow DOM -->
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />

            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                /* Base styles */
                .web-header {
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 9000;
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .web-header__container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    position: relative;
                    z-index: 9001;
                }

                .web-header__nav-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 3.5rem;
                }

                .web-header__logo {
                    width: 7rem;
                }

                .web-header__logo img {
                    width: 100%;
                    height: auto;
                }

                /* Desktop menu */
                .web-header__menu {
                    display: none;
                    gap: 2.5rem;
                }

                .web-header__link {
                    color: #008080;
                    text-decoration: none;
                    padding: 0.5rem 0;
                    font-weight: 500;
                    position: relative;
                }

                .web-header__link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #00B5B5;
                    transition: width 0.3s ease;
                }

                .web-header__link:hover::after {
                    width: 100%;
                }

                .web-header__contact-btn {
                    background-color: #008080;
                    color: white;
                    padding: 0.5rem 1.25rem;
                    border-radius: 0.5rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                }

                .web-header__contact-btn:hover {
                    background-color: #00B5B5;
                }

                /* Tablet and desktop styles */
                @media (min-width: 768px) {
                    .web-header__nav-inner {
                        height: 4rem;
                    }

                    .web-header__logo {
                        width: 9rem;
                    }
                }

                @media (min-width: 1280px) {
                    .web-header__menu {
                        display: flex;
                    }

                    .web-header__logo {
                        width: 11rem;
                    }

                    #mobile-menu-button {
                        display: none;
                    }
                }

                /* Enhanced Mobile Menu Button */
                #mobile-menu-button {
                    background: none;
                    border: 2px solid transparent;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                    z-index: 9002;
                    border-radius: 12px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    margin-left: 8px;
                }

                #mobile-menu-button:hover {
                    background: rgba(0, 0, 0, 0.05);
                    border-color: rgba(0, 0, 0, 0.1);
                    transform: translateY(-1px);
                }

                #mobile-menu-button:active {
                    transform: translateY(1px);
                }

                /* Explicitly set icon styles */
                #mobile-menu-button i.fa-bars {
                    font-size: 22px;
                    color: #1a1a1a;
                    display: inline-block !important;
                    font-style: normal !important;
                    font-variant: normal !important;
                    text-rendering: auto !important;
                    -webkit-font-smoothing: antialiased !important;
                    transition: transform 0.3s ease;
                }

                /* Hover animation for icon */
                #mobile-menu-button:hover i.fa-bars {
                    transform: scale(1.1);
                }

                /* Active state */
                #mobile-menu-button.active {
                    background: rgba(0, 0, 0, 0.1);
                    border-color: rgba(0, 0, 0, 0.15);
                }

                #mobile-menu-button.active i.fa-bars {
                    transform: rotate(90deg);
                }

                /* Focus state */
                #mobile-menu-button:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
                }

                /* Touch device optimization */
                @media (hover: none) {
                    #mobile-menu-button:active {
                        background: rgba(0, 0, 0, 0.05);
                    }
                }

                @media (min-width: 1280px) {
                    #mobile-menu-button {
                        display: none;
                    }
                }
            </style>

            <header class="web-header">
                <div class="web-header__container">
                    <nav class="web-header__nav-inner">
                        <a href="../index.html" class="web-header__logo">
                            <img src="../assets/images/logo.png" alt="Weblumin Logo">
                        </a>

                        <div class="web-header__menu">
                            <a href="../index.html" class="web-header__link">Home</a>
                            <a href="../about.html" class="web-header__link">About</a>
                            <a href="../portfolio.html" class="web-header__link">Portfolio</a>
                            <a href="../contact.html" class="web-header__contact-btn">Contact</a>
                        </div>

                        <button id="mobile-menu-button" aria-label="Toggle menu">
                            <i class="fa-solid fa-bars" aria-hidden="true"></i>
                        </button>
                    </nav>
                </div>
            </header>
        `;

        this.initializeMobileMenu();
    }

    initializeMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const openButton = this.shadowRoot.getElementById('mobile-menu-button');
        const closeButton = document.getElementById('mobile-menu-close');

        const toggleMenu = () => {
            menu.classList.toggle('active');
            openButton.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        };

        openButton.addEventListener('click', toggleMenu);
        closeButton.addEventListener('click', toggleMenu);

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Initialize mobile services dropdown
        const servicesTrigger = document.getElementById('mobile-services-trigger');
        const servicesDropdown = document.getElementById('mobile-services-dropdown');
        const chevronIcon = servicesTrigger.querySelector('.fa-chevron-down');

        servicesTrigger.addEventListener('click', () => {
            servicesTrigger.classList.toggle('active');
            servicesDropdown.classList.toggle('active');
            chevronIcon.style.transform = servicesDropdown.classList.contains('active')
                ? 'rotate(180deg)'
                : 'rotate(0)';
        });
    }

    disconnectedCallback() {
        // Clean up mobile menu when component is removed
        if (this.mobileMenu && this.mobileMenu.parentNode) {
            this.mobileMenu.parentNode.removeChild(this.mobileMenu);
        }
    }
}

customElements.define('web-header', WebHeader);
