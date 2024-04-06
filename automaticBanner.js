/// Margins

let astronautaSection = document.getElementById("astronauta")
astronautaSection.style.marginTop = `${document.getElementById('phisWarning').clientHeight+document.querySelector('.navbar').clientHeight}px`

/// Slider

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


/*******************************Canvas video astronaut */

let videos = document.getElementsByClassName('video-bunny-astro');
const canvas = document.getElementById('canvas-hero');
let context = canvas.getContext('2d');

canvas.width = 1080;
canvas.height = 1080;

const fps = 1;
const width = 1000;
const height = 1080;
let canvasInterval = null;


Array.from(videos).forEach((video)=>{

    video.style.visibility = "hidden";
    video.autoplay="true";
    video.muted="true";
    video.setAttribute("preload","auto");
    video.setAttribute("playsinline","true");
    video.setAttribute("webkit-playsinline","true");
    video.loop = true;
    video.play();

})

let draw = function () {
    context.reset();
    Array.from(videos).forEach(video => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    });
    requestAnimationFrame(draw);
};

draw();



