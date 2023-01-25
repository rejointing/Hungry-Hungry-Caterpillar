const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class snakeBit{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let snakeHeadX = 10;
let snakeHeadY = 10;
const snakeBits = [];
let tailLength = 2;

let baitX = 5;
let baitY = 5;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

// Game loop:

function drawGame(){
    clearScreen();
    changeSnakeLocation();
    checkBaitCollision();
    makeSnake();
    makeBait();

    trackScore();

    setTimeout(drawGame, 1000/ speed);
}

function trackScore(){
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana"
    ctx.fillText("Score " + score, canvas.width-50, 10);

}

function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    }


function makeSnake(){

    ctx.fillStyle = 'purple';
    for(let i = 0; i < snakeBits.length; i++){
        let bit = snakeBits[i];
        ctx.fillRect(bit.x * tileCount, bit.y * tileCount, tileSize, tileSize);
    }

    snakeBits.push(new snakeBit(snakeHeadX, snakeHeadY)); //put an item at the end of the list next to the head
    while (snakeBits.length > tailLength){
        snakeBits.shift(); // remove the furthest item from the snakeBits if you have more than the tail si
    }

    ctx.fillStyle = 'blue';
    ctx.fillRect(snakeHeadX*tileCount, snakeHeadY*tileCount, tileSize,tileSize);


}

function changeSnakeLocation(){
    snakeHeadX = snakeHeadX + xVelocity;
    snakeHeadY = snakeHeadY + yVelocity;
}

//bait: 

function makeBait(){
    ctx.fillStyle = "white";
    ctx.fillRect(baitX * tileCount, baitY * tileCount, tileSize, tileSize);
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
// audio
// collision detection
// keyboard input
// adding text