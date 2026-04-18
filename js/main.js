
document.addEventListener('DOMContentLoaded',()=>{
  // Progress
  const bar=document.getElementById('sk-progress-bar');
  if(bar) window.addEventListener('scroll',()=>{
    const el=document.documentElement;
    bar.style.width=(el.scrollTop/(el.scrollHeight-el.clientHeight)*100)+'%';
  });
  // Reveal on scroll
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  // Staggered
  document.querySelectorAll('.reveal-stagger').forEach(parent=>{
    Array.from(parent.children).forEach((child,i)=>{
      child.style.transitionDelay=i*0.1+'s';
      obs.observe(child);
    });
  });
});
