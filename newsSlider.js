'use-strict' 
let sliderContainer = document.getElementsByClassName("news-slider-content")[0];
let slidesGlider = sliderContainer.getElementsByClassName("news-slide");
let prevButton = document.getElementsByClassName("news-slider-prev")[0];
let nextButton = document.getElementsByClassName("news-slider-next")[0];

let totalSlides = slidesGlider.length;
let countSlides = totalSlides;
let slideStyle = window.getComputedStyle(slidesGlider[0]);
let slideWidth = slidesGlider[0].offsetWidth + parseFloat(slideStyle.marginRight);


function countClicks() {
    let screenWidth = window.innerWidth;
    let sliderWidth = sliderContainer.offsetWidth;
    if(screenWidth>sliderWidth){
        screenWidth = sliderWidth
    }else{}

    let maxSlides = Math.floor(screenWidth/slideWidth);
    //console.log(countSlides)
    //console.log(maxSlides)
    let maxClicks = countSlides-maxSlides;
    return maxClicks
}

nextButton.addEventListener("click",function() {
    let remainingClicks = countClicks()
    // console.log(remainingClicks)
    // console.log(countSlides)
    if(remainingClicks>=1 && (remainingClicks+countSlides)>2){
        countSlides -= 1
        for(i=0;i<totalSlides;i++){
            slidesGlider[i].style.transform = `translate(${-(slideWidth*(totalSlides-countSlides))}px,0)`
            slidesGlider[i].style.transition=" all 300ms" 
        }
    }
    
});

prevButton.addEventListener("click",function() {
    let remainingClicks = countClicks()
    //console.log(remainingClicks)
    if(countSlides<totalSlides){
        countSlides += 1
        for(i=0;i<totalSlides;i++){
            slidesGlider[i].style.transform = `translate(${-(slideWidth*(totalSlides-countSlides))}px,0)`
            slidesGlider[i].style.transition=" all 300ms" 
        }
    }
})