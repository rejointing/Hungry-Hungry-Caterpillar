const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);

let speed = 7;

// Game loop:

function drawGame(){
    console.log('draw game');
    setTimeout(drawGame, 1000/ speed);
}

drawGame();

// audio
// collision detection
// keyboard input
// adding text