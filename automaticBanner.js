let banner = document.getElementsByClassName('automatic-banner')[0];
let slides = banner.getElementsByClassName('automatic-banner-slide');
let progressBar = document.getElementsByClassName('automatic-banner-progress')[0];
let bullets = progressBar.getElementsByClassName('banner-progress-bullet');

const slideTime = 5000;

function setSlide(element,index){
    for(i=0;i<slides.length;i++){
        if(i!=index){
            slides[i].style.animation= '500ms linear 4.2s bannerOpacity';
            slides[i].style.display = 'none';  
            bullets[i].classList.remove("banner-progress-bullet-active");
        }
    }
    element.style.display = 'flex';
    element.style.animation= '500ms linear 0s reverse bannerOpacity';
    bullets[index].classList.add("banner-progress-bullet-active");
}

function automaticBanner(){
    Array.from(slides).forEach((slide,index) => {
        setTimeout(()=>{
            setSlide(slide,index)
        },index*slideTime)
   
    }) 
}

automaticBanner();

setInterval(()=>{
    automaticBanner();
},slides.length*slideTime);

Array.from(bullets).forEach((bullet,index) => {
    bullet.addEventListener("click",function(){
        setSlide(slides[index],index)

    })
}) 