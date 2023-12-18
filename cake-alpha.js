'use-strict'

let video = document.getElementById('cake-video-canva');

video.setAttribute("src", "cake-alpha.webm");
video.autoplay="true";
video.muted="true";
video.setAttribute("preload","auto");
video.setAttribute("playsinline","true");
video.setAttribute("webkit-playsinline","true");


const canvas = document.getElementById('canvas-cake');
let context = canvas.getContext('2d');

const fps = 1;
const width = 900;
const height = 900;
let canvasInterval = null;

function drawImage() {
    grd = context.createRadialGradient(canvas.width/2, canvas.height/2, 100, canvas.width/2, canvas.height/2, 400);
    grd.addColorStop(0, "#351A57");
    grd.addColorStop("0.25", "#2B1547");
    grd.addColorStop("0.5", "#201133");
    grd.addColorStop("0.75", "#150B20");
    grd.addColorStop(1, "#08060b");
    context.fillStyle = grd;
    context.fillRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d',).drawImage(video, 0, 0, canvas.width, canvas.height);
}

canvasInterval = window.setInterval(() => {
    window.requestAnimationFrame(drawImage);
}, 60);

video.onplay = function() {
  clearInterval(canvasInterval);
  canvasInterval = window.setInterval(() => {
    drawImage(video);
  }, 60);
};



/******* Numbers animations ***************/

function randomNumbers(element,digits,commas){
  
  let setAnimation = setInterval(()=>{
      let randomNumber = [Math.ceil((10**(digits))*Math.random())];
      let animatedText = randomNumber ;
      for(i=0;i<commas;i++){
        randomNumber = [Math.ceil((10**(digits))*Math.random())];
        animatedText = animatedText +","+ randomNumber;
      }
      setTimeout(()=>clearInterval(setAnimation),1000); 
      element.innerHTML = animatedText;

  },10);
  setTimeout(()=>clearInterval(setAnimation),1000); 
}

let circulatingSupply = document.getElementById("circulatin-supply-number");
randomNumbers(circulatingSupply,3,2);
setTimeout(()=>circulatingSupply.innerText = "262,897,833",1000);

let totalSupply = document.getElementById("total-supply-number");
randomNumbers(totalSupply,3,2);
setTimeout(()=>totalSupply.innerText = "386,271,349",1000);

let tokenBurn = document.getElementById("token-burn-number");
randomNumbers(tokenBurn,3,2);
setTimeout(()=>tokenBurn.innerText = "1,099,492,387",1000);
