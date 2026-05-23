document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
  document.querySelectorAll('nav.primary li.has-sub > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });

  var form = document.getElementById('contact-form');
  if (form) {
    var errBox = document.getElementById('form-error');
    form.addEventListener('submit', function (e) {
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      if (!email && !phone) {
        e.preventDefault();
        errBox.hidden = false;
        errBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        errBox.hidden = true;
      }
    });
  }
});
