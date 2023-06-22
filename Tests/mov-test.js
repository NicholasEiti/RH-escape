// Estou me baseando no vídeo: https://youtu.be/GFO_txvwK_c

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

ctx.imageSmoothingEnabled = false;

let gameFrame = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(50+gameFrame,50+gameFrame,100,100);
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();