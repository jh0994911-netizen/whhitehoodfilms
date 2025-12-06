// reveal.js
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main > section');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // animate once, then stop observing
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18 // section needs ~18% visible to trigger
    }
  );

  sections.forEach(section => observer.observe(section));
});
