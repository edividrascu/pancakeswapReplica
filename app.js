let tweeter = document.getElementsByClassName('card2-tweeter');
let latest = document.getElementsByClassName('card2-latest');
let paginationRight = document.querySelector('.swiper-pagination-right');
let paginationLeftLatest = document.querySelector('.swiper-pagination-left-latest');

let currentIndex = 0;
let intervalId;

function toggleClasses() {
  Array.from(tweeter).forEach(element => element.classList.remove("display-card2"));
  Array.from(latest).forEach(element => element.classList.remove("display-card2"));

  if (currentIndex === 0) {
    Array.from(tweeter).forEach(element => element.classList.add("display-card2"));
  } else {
    Array.from(latest).forEach(element => element.classList.add("display-card2"));
  }

  currentIndex = (currentIndex + 1) % 2;
}

function startAutoToggle() {
  intervalId = setInterval(toggleClasses, 4000);
}

// Llama a la función inicialmente
toggleClasses();
startAutoToggle();

paginationLeftLatest.addEventListener('click', function() {
  clearInterval(intervalId);
  currentIndex = 1;
  toggleClasses();
  startAutoToggle(); 
});

paginationRight.addEventListener('click', function() {
  clearInterval(intervalId);
  currentIndex = 0;
  toggleClasses();
  startAutoToggle(); 
});
