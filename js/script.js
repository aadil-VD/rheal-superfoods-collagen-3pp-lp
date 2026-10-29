// Show the mobile buy bar once the product has been revealed (section 03 scrolled past)
(function () {
  var bar = document.querySelector('.buy-bar');
  var trigger = document.querySelector('[data-buy-bar-trigger]');
  if (!bar || !trigger) return;
  var ticking = false;

  function update() {
    ticking = false;
    bar.classList.toggle('is-visible', trigger.getBoundingClientRect().top < window.innerHeight);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
