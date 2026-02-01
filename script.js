const roles = [
  "Java Developer",
  "SQL Enthusiast",
  "Building clean & maintainable code"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");

function typeEffect() {
  const current = roles[roleIndex];

  if (!isDeleting) {
    typedText.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      setTimeout(() => isDeleting = true, 1500);
    }
  } else {
    typedText.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* Tech Stack Scroll Animation */
const techCards = document.querySelectorAll(".tech-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
); 
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

techCards.forEach(card => observer.observe(card));

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => observer.observe(card));


/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(
    ".blog-card, .tech-card, .project-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  cards.forEach(card => observer.observe(card));
});


 document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".contact-card");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          observer.unobserve(entry.target); // animate only once
        }
      });
    }, { threshold: 0.3 }); // trigger when 30% visible

    cards.forEach(card => observer.observe(card));
  });
