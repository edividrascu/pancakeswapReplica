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