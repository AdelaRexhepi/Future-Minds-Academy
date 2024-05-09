let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480;
rrafshi.style.marginTop = "50px"
document.body.appendChild(rrafshi);

let br = document.createElement("br")
document.body.appendChild(br)

let startOver = document.createElement("button")
startOver.innerText = "Start Over"
startOver.style.fontSize = "20px"
startOver.style.padding = "10px"
startOver.style.visibility = "visible"

let points = 0;
let timerCounter = 10;
let gameOverMsg = false;

let ctx = rrafshi.getContext("2d");

let bgrRrafsh = new Image();
bgrRrafsh.src = "images/background.png";

let bgReady = false;
bgrRrafsh.onload = function () {
    bgReady = true;
};
let miuReady = false;
let miuImg = new Image();
miuImg.src = "images/mouse.png";
miuImg.onload = function () {
    miuReady = true;
}
let miu = {};
miu.x = 100;
miu.y = 100;
miu.width = 52;
miu.height = 54;

let macaReady = false;
let macaImg = new Image();
macaImg.src = "images/cat.png"
macaImg.onload = function () {
    macaReady = true;
}
let maca = {};
maca.x = 300;
maca.y = 300;
maca.width = 128;
maca.height = 128;
let macaSpeed = 10;

addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key == "ArrowRight") {
        maca.x += macaSpeed;
    }
    if (e.key == "ArrowLeft") {
        maca.x -= macaSpeed;
    }
    if (e.key == "ArrowUp") {
        maca.y -= macaSpeed;
    }
    if (e.key == "ArrowDown") {
        maca.y += macaSpeed;
    }

}, false)
let render = function () {
    if (bgReady) { ctx.drawImage(bgrRrafsh, 0, 0); }
    if (miuReady) { ctx.drawImage(miuImg, miu.x, miu.y); }
    if (macaReady) { ctx.drawImage(macaImg, maca.x, maca.y); }

    if (maca.x > 500) { maca.x = -50 }
    if (maca.x < -51) { maca.x = 480 }
    if (maca.y < -64) { maca.y = 454 }
    if (maca.y > 454) { maca.y = -63 }

    //Maca prek miun
    if (
        maca.x < (miu.x + miu.width - 20)
        && maca.y < (miu.y + miu.height - 20)
        && miu.x < (maca.x + miu.width + 40)
        && miu.y < (maca.y + maca.height + 40)
    ) {
        points++;
        reset();
    }
    ctx.font = "24px serif";
    ctx.fillStyle = "white";
    ctx.fillText = ('Points:'+ points, 20,30);
    ctx.fillText = ('Timer:'+ timerCounter, 400, 30 );

}

let reset = function () {
    miu.x = Math.floor(Math.random() * 440) + 20;
    miu.y = Math.floor(Math.random() * 380) + 55;
}
let timer = function(){
    timerCounter --;
    if(timerCounter == 0){
        gameOver
    }
    else{
        timerCounter--;
    }
}
let gameOver = function(){

    if(points >= 15){
        ctx.font = "24px serif";
        ctx.fillStyle = "white";
        ctx.fillText("YOU WON", 260, 230);
    }
    else{
        ctx.fillText("YOU LOST", 260, 230)
    }
}

startOver.addEventListener("click", function(){
    location.reload();
})
reset();
let drawCanvas = setInterval(render, 1);
let timeInterval = setInterval(timer, 1000);
