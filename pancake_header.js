// GLIDER
const config = {
    startAt: 0,
    type:'carousel',
    perView: 6,
    breakpoints: {
        600: {
            perView: 2,
        },
        800: {
            perView: 3,
        },
        1000: {
            perView: 4,
        },
    }
  };
  const sliders = document.querySelectorAll('.glide');
  
  for (var i = 0; i < sliders.length; i++) {
  new Glide(sliders[i],config).mount()
  }
 
//PHISING BAR CLOSE BUTTON
    let close=localStorage.getItem("close");
    const phisWarning= document.getElementById('phisWarning');
    const phisButton = document.getElementById('phisButton');
if(close === "true"){
closePhis();
}
phisButton.addEventListener("click", closePhis)
function closePhis(){
    phisWarning.style.display='none';
    localStorage.setItem("close", "true")
    astronautaSection.style.marginTop = `${document.querySelector('.navbar').clientHeight}px`
}
//SETTINGS BUTTONS
const optButton= document.getElementById('navGear');
const setButton= document.getElementById('setButton');
const settings= document.getElementById('settings');
const setBack= document.getElementById('setBack');
optButton.addEventListener("click", openSet);
setButton.addEventListener("click", closeSet);
setBack.addEventListener("click", closeSet);
function openSet(){
    setBack.style.display='flex';
    settings.style.display='block';
    settings.style.height='65vh';
    settings.style.border='1px solid rgb(56,50,65)';  
}
function closeSet(){
    setBack.style.display='none';
    settings.style.height='0px';
    settings.style.border='0px';
}
//LANGUAGES
const langButton= document.getElementById('arrowbox');
const languages= document.getElementById('dropdownlang');
langButton.addEventListener('click',openLang);
function openLang(){
    languages.style.height='580px';
}


  