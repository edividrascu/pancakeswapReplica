const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const container = document.querySelector('.container');
const containerEcosystem = document.querySelector('.container-ecosystem');
// Verifica si hay una preferencia almacenada en localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  container.classList.add('container-dark');
  containerEcosystem.classList.add('ecosystem-dark');
}

toggleBtn.addEventListener('click', () => {
  // Alternar clases y guardar preferencia en localStorage
  body.classList.toggle('dark-mode');
  container.classList.toggle('container-dark');
  containerEcosystem.classList.toggle('ecosystem-dark');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});
