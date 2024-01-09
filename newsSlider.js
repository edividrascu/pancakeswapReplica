let sliderContainer = document.getElementsByClassName("news-slider-content")[0];
let slides = sliderContainer.getElementsByClassName("news-slide");
let prevButton = document.getElementsByClassName("news-slider-prev")[0];
let nextButton = document.getElementsByClassName("news-slider-next")[0];

let totalSlides = slides.length;
let countSlides = totalSlides;
let slideStyle = window.getComputedStyle(slides[0]);
let slideWidth = slides[0].offsetWidth + parseFloat(slideStyle.marginRight);

let screenWidth = window.innerWidth;

function countClicks() {
    let sliderWidth = sliderContainer.offsetWidth;
    if(screenWidth>sliderWidth){
        screenWidth = sliderWidth
    }else{}

    let maxSlides = Math.floor(screenWidth/slideWidth);
    console.log(countSlides)
    let maxClicks = countSlides-maxSlides;
    return maxClicks
}

nextButton.addEventListener("click",function() {
    let remainingClicks = countClicks()
    console.log(remainingClicks )
    if(remainingClicks>0){
        countSlides -= 1
        for(i=0;i<totalSlides;i++){
            slides[i].style.transform = `translate(${-(slideWidth*(totalSlides-countSlides))}px,0)`
            slides[i].style.transition=" all 300ms" 
        }
    }
    
});

prevButton.addEventListener("click",function() {
    let remainingClicks = countClicks()
    console.log(remainingClicks)
    if(countSlides<totalSlides){
        countSlides += 1
        for(i=0;i<totalSlides;i++){
            slides[i].style.transform = `translate(${-(slideWidth*(totalSlides-countSlides))}px,0)`
            slides[i].style.transition=" all 300ms" 
        }
    }
})