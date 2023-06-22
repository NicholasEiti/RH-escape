const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let mazeImg = new Image();

let xvel = 0;
let yvel = 0;

let xpos = 50;
let ypos = 50;

function animate(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(xpos,ypos,50,50);
    let data = ctx.getImageData(xpos+xvel,ypos+yvel,50,50).data;
    for(var i=0;i<data.length;i+=4){
        if(
            data[i+0]==255&&
            data[i+1]==255&&
            data[i+2]==255
        ){
            xvel = 0;
            yvel = 0;
        }
    }
    xpos += xvel;
    ypos += yvel;
    requestAnimationFrame(animate);
};

// Movimentação simples direcional (movimento da cobrinha)
document.addEventListener('keydown', ({key}) => {
    switch(key){
        case 'w':
            yvel = -5;
            xvel = 0;
            break;
        case 's':
            yvel = 5;
            xvel = 0;
            break;
        case 'd':
            xvel = 5;
            yvel = 0;
            break;
        case 'a':
            xvel = -5;
            yvel = 0;
            break;
        case 'q':
            xvel = 0;
            yvel = 0;
    }
})

animate();