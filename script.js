// Animate the E path for ~7s then hide intro
(function(){
  const path = document.getElementById('E-path');
  const intro = document.getElementById('intro');
  const len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  path.getBoundingClientRect();
  const duration = 7000; // 7 seconds
  const start = performance.now();
  function step(now){
    const t = Math.min((now - start)/duration,1);
    const eased = t<.5 ? 2*t*t : -1 + (4-2*t)*t; // ease in-out
    path.style.strokeDashoffset = Math.round(len * (1 - eased));
    if(t<1) requestAnimationFrame(step);
    else{
      intro.classList.add('hidden');
      setTimeout(()=>intro.style.display='none',600);
    }
  }
  requestAnimationFrame(step);
})();

// Smooth scroll for header links
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});