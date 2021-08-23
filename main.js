const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 4;
// fail = new sound("TBD"); //make file

//gradient score keeper
const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#000");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#000");
gradient.addColorStop("0.9", "#fff");

const background = new Image();
background.src = "BG.jpeg";
const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

//scrolling BG
function handleBackground() {
  if (BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
  else BG.x1 -= gamespeed;
  if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
  else BG.x2 -= gamespeed;
  ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(10, canvas.height - 90, 50, 50);
  handleBackground();
  deadpool.update();
  deadpool.draw();
  ctx.fillStyle = gradient;
  ctx.font = "90px Georgia";
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  handleParticles();
  handleObstacles();
  handleCollisions();
  if (handleCollisions()) return;
  requestAnimationFrame(animate);
  angle += 0.18;
  hue++;
  frame++;
}
animate();

window.addEventListener("keydown" || "touch", function (e) {
  if (e.code === "Space") spacePressed = true;
});
window.addEventListener("keyup" || "touch", function (e) {
  if (e.code === "Space") spacePressed = false;
  deadpool.frameX = 0;
});

const bang = new Image();
bang.src = "bang.png";
function handleCollisions() {
  for (let i = 0; i < obstaclesArray.length; i++) {
    if (
      deadpool.x < obstaclesArray[i].x + obstaclesArray[i].width &&
      deadpool.x + deadpool.width > obstaclesArray[i].x &&
      ((deadpool.y < 0 + obstaclesArray[i].top &&
        deadpool.y + deadpool.height > 0) ||
        (deadpool.y > canvas.height - obstaclesArray[i].bottom &&
          deadpool.y + deadpool.height < canvas.height))
    ) {
      //collison detected
      ctx.drawImage(bang, deadpool.x, deadpool.y, 100, 100);
      ctx.font = "35px Georgia";
      ctx.fillStyle = "White";
      ctx.fillText(
        "Game Over Sucka. Your Score is " + score,
        30,
        canvas.height / 2 - 20
      );
      ctx.fillText("Restart to try again ", 135, canvas.height - 150);

      return true;
    }
  }
}
document.querySelector(".restart-btn").addEventListener("click", function () {
  window.location.reload();
  return false;
});
