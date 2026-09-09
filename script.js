// Navegación suave y pequeña animación de entrada.
const items = document.querySelectorAll(".project-card, .workshop-item, .about-content");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(item);
});
