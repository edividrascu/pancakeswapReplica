document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var scrollToTopButton = document.querySelector('.container-boton-top');

    // Muestra u oculta el botón dependiendo de la posición de scroll
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  const scrollToTopButton = document.querySelector('.buton-to-top');

  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
