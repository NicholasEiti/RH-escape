// Estou me baseando no vídeo: https://youtu.be/GFO_txvwK_c

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "Red hood free (zipped) Folder/idle and  alter/idle sheet-Sheet.png"

ctx.imageSmoothingEnabled = false;

let f = 0;
let delay = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100);
    ctx.drawImage(playerImage, f*80, 0, 80, 80, 0, 0, 80*5, 80*5);
    requestAnimationFrame(animate);
    if(delay === 0){
        delay++;
        f++;
    }
    else{
        delay++;
        if(delay >= 5) delay = 0;
    }
    if(f > 17){
        f = 0;
    }
};

animate();