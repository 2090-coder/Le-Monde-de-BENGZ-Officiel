// ==========================================
// Script global pour animations et interactions
// ==========================================

// Apparition des sections au scroll
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  cards.forEach(card => observer.observe(card));
});

// Classe CSS à ajouter dans styles.css pour fade-in
/*
.card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
}

.card.visible {
  opacity: 1;
  transform: translateY(0);
}
*/

// Formulaire Contact : simple alerte (tu peux remplacer par un back-end réel)
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
    contactForm.reset();
  });
}

// Dark mode facultatif (cliquer sur sidebar header pour activer)
const body = document.body;
const sidebarHeader = document.querySelector('.sidebar-header');
if(sidebarHeader){
  sidebarHeader.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
}

/* Dans styles.css tu peux ajouter :
.dark-mode {
  background-color: #000;
  color: #fff;
}

.dark-mode .sidebar {
  background-color: #111;
}

.dark-mode .card {
  background-color: #222;
}
*/