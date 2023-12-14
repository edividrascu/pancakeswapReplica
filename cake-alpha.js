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
    context.fillRect(20, 20, 800, 800);
    canvas.getContext('2d',).drawImage(video, 0, 0, canvas.width, canvas.height);
}

canvasInterval = window.setInterval(() => {
    window.requestAnimationFrame(drawImage);
}, 30);

video.onplay = function() {
  clearInterval(canvasInterval);
  canvasInterval = window.setInterval(() => {
    drawImage(video);
  }, 30);
};