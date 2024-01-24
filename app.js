document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.querySelector('.input-dark');
    var solIcon = document.querySelector('.sol-dark');
    var lunaIcon = document.querySelector('.luna-dark');
  
    darkModeToggle.addEventListener('change', function () {
      if (darkModeToggle.checked) {
        // Modifica el color del sol cuando está seleccionado
        solIcon.style.fill = '';
        // Modifica el color de la luna cuando está seleccionada
        lunaIcon.style.fill = '#a881fc';
      } else {
        // Restaura el color del sol a su estado original
        solIcon.style.fill = '#ffb237';
        // Restaura el color de la luna a su estado original
        lunaIcon.style.fill = '';
      }
    });
  });
  
  
  