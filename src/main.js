/* main.js - DFS Redesign Codebase Entry Point */

/* Load Global Design Tokens and resets */
import './styles/tokens.css';
import './styles/global.css';

/* Load Reusable BEM Component Library */
import './components/button.css';
import './components/card.css';
import './components/grid.css';
import './components/header.css';
import './components/nav.css';
import './components/footer.css';
import './components/forms.css';
import './components/tabs.css';
import './components/accordion.css';
import './components/hero.css';
import './components/patronage.css';
import './components/speakers.css';
import './components/agenda.css';
import './components/sponsors.css';

/* Load Phase 5 Creative Polish overrides layer */
import './styles/phase5.css';

console.log('DFS 2026 Component Library and Creative Polish Loaded.');

/* ----------------------------------------------------
   Interactive Behaviors & Scroll Tracking
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Dynamic Header transparent-to-scrolled background transition
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.remove('dfs-header--transparent');
        header.classList.add('dfs-header--scrolled');
      } else {
        // Only make transparent if we are on the Home Page hero view
        if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
          header.classList.add('dfs-header--transparent');
        }
        header.classList.remove('dfs-header--scrolled');
      }
    });

    // Initialize transparent state only on Home page
    if (window.location.pathname !== '/' && !window.location.pathname.endsWith('index.html')) {
      header.classList.remove('dfs-header--transparent');
      header.classList.add('dfs-header--scrolled');
    }
  }

  // Navigation Mobile Hamburger button toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open');
    });
  }

  // Tabs component (Agenda Day Toggle)
  const tabButtons = document.querySelectorAll('.dfs-tabs__btn');
  const tabPanels = document.querySelectorAll('.dfs-tabs__panel');
  if (tabButtons.length > 0) {
    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('dfs-tabs__btn--active'));
        tabPanels.forEach(p => p.classList.remove('dfs-tabs__panel--active'));
        
        btn.classList.add('dfs-tabs__btn--active');
        if (tabPanels[index]) {
          tabPanels[index].classList.add('dfs-tabs__panel--active');
        }
      });
    });
  }

  // Accordion component (FAQ folding animation details)
  const accordionTriggers = document.querySelectorAll('.dfs-accordion__trigger');
  if (accordionTriggers.length > 0) {
    accordionTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', !isExpanded);
        
        const panel = trigger.nextElementSibling;
        if (panel && panel.classList.contains('dfs-accordion__panel')) {
          if (!isExpanded) {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } else {
            panel.style.maxHeight = null;
          }
        }
      });
    });
  }

  // Hero Video Fade-In transition on autoplay start (prevents blank black flashes)
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    if (heroVideo.readyState >= 3) {
      heroVideo.classList.add('dfs-hero__video--playing');
    } else {
      heroVideo.addEventListener('playing', () => {
        heroVideo.classList.add('dfs-hero__video--playing');
      });
    }
  }

  // Agenda Day Tabs Switcher
  const agendaTabs = document.querySelectorAll('.dfs-agenda-tabs__btn');
  const agendaPanels = document.querySelectorAll('.dfs-agenda-tabs__panel');
  if (agendaTabs.length > 0) {
    agendaTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const day = btn.getAttribute('data-day');
        agendaTabs.forEach(b => b.classList.remove('dfs-agenda-tabs__btn--active'));
        agendaPanels.forEach(p => p.classList.remove('dfs-agenda-tabs__panel--active'));
        
        btn.classList.add('dfs-agenda-tabs__btn--active');
        const targetPanel = document.getElementById(`${day}-panel`);
        if (targetPanel) {
          targetPanel.classList.add('dfs-agenda-tabs__panel--active');
        }
      });
    });
  }

  // Speakers Category Filter
  const filterBtns = document.querySelectorAll('.dfs-filter-btn');
  const speakerCards = document.querySelectorAll('.dfs-speaker-card');
  const speakersGrid = document.getElementById('speakers-grid');
  
  if (filterBtns.length > 0 && speakerCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-filter');
        
        // Update active button state
        filterBtns.forEach(b => b.classList.remove('dfs-filter-btn--active'));
        btn.classList.add('dfs-filter-btn--active');
        
        // Temporarily fade out grid for smooth animation transition
        if (speakersGrid) {
          speakersGrid.style.opacity = '0';
        }
        
        setTimeout(() => {
          speakerCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterVal === 'all' || category === filterVal) {
              card.classList.remove('dfs-speaker-card--hidden');
            } else {
              card.classList.add('dfs-speaker-card--hidden');
            }
          });
          
          // Fade back in
          if (speakersGrid) {
            speakersGrid.style.opacity = '1';
          }
        }, 150);
      });
    });
  }
});
