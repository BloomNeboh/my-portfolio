document.addEventListener('DOMContentLoaded', () => {

  // Intro E-writing animation
  const intro = document.getElementById('intro');
  const path = document.getElementById('E-path');
  path.style.strokeDasharray = path.getTotalLength();
  path.style.strokeDashoffset = path.getTotalLength();

  setTimeout(() => {
    path.style.transition = "stroke-dashoffset 7s linear";
    path.style.strokeDashoffset = 0;
  }, 100);

  setTimeout(() => {
    intro.classList.add('hidden');
  }, 7500);

  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    section.classList.add('section-animate');
    observer.observe(section);
  });

  // Animate contact logos when contact section is visible
  const contactSection = document.getElementById('contact');
  const logos = document.querySelectorAll('.contact-logos a');

  const logoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        logos.forEach((logo, index) => {
          setTimeout(() => {
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
          }, index * 200); // staggered animation
        });
        logoObserver.unobserve(contactSection);
      }
    });
  }, { threshold: 0.25 });

  logoObserver.observe(contactSection);

});
