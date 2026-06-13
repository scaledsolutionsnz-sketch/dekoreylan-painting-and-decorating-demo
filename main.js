// Year in footer
var yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Rolling hero: lazy-load slides after the first, crossfade on interval.
// Paused entirely under prefers-reduced-motion (first image shows static).
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;

  // Load deferred background images for slides 2+
  slides.forEach(function (el, i) {
    if (i === 0) return;
    var bg = el.getAttribute('data-bg');
    if (bg) {
      var img = new Image();
      img.onload = function () { el.style.backgroundImage = "url('" + bg + "')"; };
      img.src = bg;
    }
  });

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var current = 0;
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
})();
