let sliderContainer = document.getElementsByClassName("news-slider-content")[0];
let slides = sliderContainer.getElementsByClassName("news-slide");
let prevButton = document.getElementsByClassName("news-slider-prev")[0];
let nextButton = document.getElementsByClassName("news-slider-next")[0];

let totalSlides = slides.length;
let countSlides = totalSlides;
let width = slides[0].offsetWidth;

prevButton.addEventListener("click",function() {
    countSlides -= 1
    for(i=0;i<totalSlides;i++){
        slides[i].style.transform = `translate(${-width*(totalSlides-countSlides)}px,0)`
        slides[i].style.transition=" all 500ms" 
        console.log(slides[i].style.transform)
    }
});

nextButton.addEventListener("click",function() {
    countSlides += 1
    for(i=0;i<totalSlides;i++){
        slides[i].style.transform = `translate(${-width*(totalSlides-countSlides)}px,0)`
        slides[i].style.transition=" all 500ms" 
        console.log(slides[i].style.transform)
    }
})