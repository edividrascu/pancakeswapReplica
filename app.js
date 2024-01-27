
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

document.addEventListener("DOMContentLoaded", function () {
  let darkModeToggle = document.querySelector(".input-dark");
  let solIcon = document.querySelector(".sol-dark");
  let lunaIcon = document.querySelector(".luna-dark");
  let isDarkMode = localStorage.getItem("darkMode") === "true";

  darkModeToggle.checked = isDarkMode;
  updateIcons(isDarkMode);

  darkModeToggle.addEventListener("change", function () {
    let isChecked = darkModeToggle.checked;

    localStorage.setItem("darkMode", isChecked);

    updateIcons(isChecked);
  });

  function updateIcons(isDarkMode) {
    if (isDarkMode) {
      solIcon.style.fill = "";

      lunaIcon.style.fill = "#a881fc";
    } else {
      solIcon.style.fill = "#ffb237";

      lunaIcon.style.fill = "";
    }
  }
});


// drop DOWN11111111111111111
function showDropdown() {
  document.getElementById("dropdownOptions").style.display = "block";
  
}
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'ES-ES';
document.getElementById('selectedOption').innerText = selectedLanguage;

function hideDropdown() {
  document.getElementById('dropdownOptions').style.display = 'none';
  

}
function selectLanguage(languageCode) {
  // Guardar la elección del usuario en localStorage
  localStorage.setItem('selectedLanguage', languageCode);

  // Configurar el elemento seleccionado con la nueva elección
  document.getElementById('selectedOption').innerText = languageCode;
  
  // Ocultar el dropdown después de seleccionar una opción
  hideDropdown();
}


// drop DOWN 22222222222222222222222

function showDropdown2() {
  document.getElementById("dropdownOptions.second").style.display = "block";

  
}
let selectedLanguage2 = localStorage.getItem('selectedLanguage') || 'ES-ES';
document.getElementById('selectedLanguage.second').innerText = selectedLanguage2;

function hideDropdown2() {
  document.getElementById('dropdownOptions.second').style.display = 'none';
  

}
function selectLanguage(languageCode) {
  // Guardar la elección del usuario en localStorage
  localStorage.setItem('selectedLanguage', languageCode);

  // Configurar el elemento seleccionado con la nueva elección
  document.getElementById('selectedLanguage.second').innerText = languageCode;
  
  // Ocultar el dropdown después de seleccionar una opción
  hideDropdown2();
}



document.addEventListener("DOMContentLoaded", function () {
  let darkModeToggle2 = document.querySelector("#inputDarkSecond");
  let solIcon2 = document.querySelector("#solDarkSecond");
  let lunaIcon2 = document.querySelector("#lunaDarkSecond");

  if (darkModeToggle2) {
    let isDarkMode = localStorage.getItem("darkmode2") === "true";

    darkModeToggle2.checked = isDarkMode;
    updateIcons(isDarkMode);

    darkModeToggle2.addEventListener("change", function () {
      let isChecked = darkModeToggle2.checked;

      localStorage.setItem("darkmode2", isChecked);

      updateIcons(isChecked);
    });
  } else {
    console.error("Elemento darkModeToggle2 no encontrado.");
  }

  function updateIcons(isDarkMode) {
    if (isDarkMode) {
      solIcon2.style.fill = "";
      lunaIcon2.style.fill = "#a881fc";
    } else {
      solIcon2.style.fill = "#ffb237";
      lunaIcon2.style.fill = "";
    }
  }
});





