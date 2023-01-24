const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let snakeHeadX = 10;
let snakeHeadY = 10;

let baitX = 5;
let baitY = 5;

let xVelocity = 0;
let yVelocity = 0;


// Game loop:

function drawGame(){
    changeSnakeLocation();
    checkBaitCollision();
    clearScreen();
    makeSnake();
    makeBait();
    setTimeout(drawGame, 1000/ speed);
}

function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    }


function makeSnake(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(snakeHeadX*tileCount, snakeHeadY*tileCount, tileSize,tileSize)
}

function changeSnakeLocation(){
    snakeHeadX = snakeHeadX + xVelocity;
    snakeHeadY = snakeHeadY + yVelocity;
}

//bait: 

function makeBait(){
    ctx.fillStyle = "white";
    ctx.fillRect(baitX, baitY, tileSize, tileSize);
}

function checkBaitCollision(){
    if(baitX === snakeHeadX && baitY === snakeHeadY){
        baitX = Math.floor(Math.random() * tileCount);
        baitY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
    }
}

// keyboard arrow controls 

document.body.addEventListener('keydown', keyDown);

function keyDown(event){
    // up arrow
    if(event.keyCode == 38){
        if(yVelocity == 1)
        return;
        yVelocity = -1;
        xVelocity = 0;
    }

    // down arrow
    if(event.keyCode == 40){
        if(yVelocity == -1)
        return;
        yVelocity = 1;
        xVelocity = 0;
    }

    // left arrow
    if(event.keyCode == 37){
        if(xVelocity == 1)
        return;
        yVelocity = 0;
        xVelocity = -1;
    }

    // right arrow
    if(event.keyCode == 39){
        if(xVelocity == -1)
        return;
        yVelocity = 0;
        xVelocity = 1;
    }
}

drawGame();
makeBait();
// audio
// collision detection
// keyboard input
// adding text