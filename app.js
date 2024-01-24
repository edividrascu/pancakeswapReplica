
document.addEventListener('DOMContentLoaded', function () {
  let darkModeToggle = document.querySelector('.input-dark');
  let solIcon = document.querySelector('.sol-dark');
  let lunaIcon = document.querySelector('.luna-dark');

  // Verifica si hay un estado almacenado en localStorage
  let isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Aplica el estado almacenado (oscuro o claro)
  darkModeToggle.checked = isDarkMode;
  updateIcons(isDarkMode);

  darkModeToggle.addEventListener('change', function () {
    let isChecked = darkModeToggle.checked;

    // Almacena el estado actual en localStorage
    localStorage.setItem('darkMode', isChecked);

    // Actualiza los iconos según el estado del modo oscuro
    updateIcons(isChecked);
  });

  function updateIcons(isDarkMode) {
    if (isDarkMode) {
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
  }
});

function showDropdown() {
  document.getElementById('dropdownOptions').style.display = 'block';
}

function hideDropdown() {
  document.getElementById('dropdownOptions').style.display = 'none';
}

function selectLanguage(languageCode) {
  document.getElementById('selectedOption').innerText = languageCode;
  hideDropdown(); // Oculta la lista después de seleccionar una opción
}

