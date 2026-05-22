document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
  // mobile submenu tap-open
  document.querySelectorAll('nav.primary li.has-sub > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });
});
