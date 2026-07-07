/**
 * SCAC — Main site utilities
 */

function applyBrandStyling(root = document.body) {
    if (!root || !root.querySelector) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (node.parentElement && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName)) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const textNodes = [];
    let currentNode = walker.nextNode();
    while (currentNode) {
        textNodes.push(currentNode);
        currentNode = walker.nextNode();
    }

    textNodes.forEach((node) => {
        const value = node.textContent || '';
        let updatedValue = value;
        updatedValue = updatedValue.replace(/Second Chance Adjustment Capital/gi, '<span class="brand-name"><span class="brand-sc">Second Chance</span> <span class="brand-ac">Adjustment Capital</span></span>');
        updatedValue = updatedValue.replace(/\bSCAC\b/gi, '<span class="brand-name"><span class="brand-sc">SC</span><span class="brand-ac">AC</span></span>');

        if (updatedValue !== value) {
            const wrapper = document.createElement('span');
            wrapper.innerHTML = updatedValue;
            node.replaceWith(...wrapper.childNodes);
        }
    });
}

function closeMobileMenu() {
    const existing = document.getElementById('mobile-nav-overlay');
    if (!existing) return;

    existing.remove();
    document.body.style.overflow = '';

    document.querySelectorAll('.nav-mobile-toggle').forEach(button => {
        button.setAttribute('aria-expanded', 'false');
    });
}

function toggleMobileMenu() {
    const existing = document.getElementById('mobile-nav-overlay');
    if (existing) {
        closeMobileMenu();
        return;
    }

    const nav = document.createElement('div');
    nav.id = 'mobile-nav-overlay';
    nav.className = 'fixed inset-0 bg-black/90 z-[200] flex flex-col p-6 sm:p-8 text-white text-xl sm:text-2xl overflow-y-auto';
    nav.setAttribute('role', 'dialog');
    nav.setAttribute('aria-label', 'Mobile navigation');
    nav.innerHTML = `
        <div class="flex justify-end">
            <button type="button" class="text-4xl" aria-label="Close menu" onclick="toggleMobileMenu()">×</button>
        </div>
        <nav class="mt-8 flex flex-col gap-y-6 sm:gap-y-8 font-semibold" aria-label="Mobile">
            <a href="index.html" class="hover:text-amber-400" onclick="toggleMobileMenu()">Home</a>
            <a href="index.html#services" class="hover:text-amber-400" onclick="toggleMobileMenu()">Services</a>
            <a href="about.html" class="hover:text-amber-400">About Us</a>
            <a href="underwriting.html" class="hover:text-amber-400">Underwriting</a>
            <a href="free-credit-repair.html" class="hover:text-amber-400">Free Credit Repair</a>
            <a href="privacy-policy.html" class="hover:text-amber-400">Privacy Policy</a>
            <a href="terms-of-service.html" class="hover:text-amber-400">Terms of Service</a>
            <a href="index.html#apply" class="hover:text-amber-400" onclick="toggleMobileMenu()">Apply Now</a>
            <div class="pt-6 border-t border-white/20">
                <a href="tel:8558886423" class="flex items-center gap-3 text-emerald-400">
                    <i class="fas fa-phone" aria-hidden="true"></i> 855-888-6423
                </a>
            </div>
        </nav>
    `;
    document.body.appendChild(nav);
    document.body.style.overflow = 'hidden';

    document.querySelectorAll('.nav-mobile-toggle').forEach(button => {
        button.setAttribute('aria-expanded', 'true');
    });

    nav.querySelector('button').focus();
}

function toggleSecondaryNav() {
    const links = document.querySelector('.secondary-nav-links');
    if (links) links.classList.toggle('is-open');
}

function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
}

function initializeWebsite() {
    applyBrandStyling();
    if (typeof initCalculator === 'function') initCalculator();
    if (typeof initForm === 'function') initForm();
    initScrollReveal();

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeMobileMenu();
        }
    });
}

window.toggleMobileMenu = toggleMobileMenu;
window.toggleSecondaryNav = toggleSecondaryNav;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}
