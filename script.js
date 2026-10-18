
const elements = document.querySelectorAll(".split-section, .skills-section, .projects-section, .contact-section");
elements.forEach(el => el.classList.add("reveal"));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
