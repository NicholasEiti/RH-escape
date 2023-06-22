// Estou me baseando no vídeo: https://youtu.be/GFO_txvwK_c

document.getElementById("animations").addEventListener("change" ,(e) => {
    playerState = e.target.value
});

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const playerImage = new Image();

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let playerState = "idle"

ctx.imageSmoothingEnabled = false;

let gameFrame = 0;
const staggerFrames = 4;

const animationStates = {
    idle:{
        sheetpath: "Red hood spritesheets/idle and  alter/idle sheet-Sheet.png",
        frames: 18,
        width: 80,
        height: 80
    },
    run:{
        sheetpath: "Red hood spritesheets/idle and  alter/itch run-Sheet sheet.png",
        frames: 24,
        width: 80,
        height: 80
    }
}

console.log(animationStates);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100);
    let state = animationStates[playerState];
    playerImage.src = state.sheetpath;
    let position = Math.floor(gameFrame/staggerFrames) % state.frames;
    ctx.drawImage(playerImage, position*state.width, 0, state.width, state.height, 0, 0, 600, 600);
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();