function toggleMenu(){
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
}

// highlight active link if we are inside /apps/*
(() => {
  const href = location.pathname.toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    if (href.startsWith(a.getAttribute('href').toLowerCase())) {
      a.style.color = '#ffffff';
      a.style.fontWeight = '600';
    }
  });
})();
