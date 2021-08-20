// GLOBAL DOM / VARIABLES //
(function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

// ====================== SETUP FOR CANVAS RENDERING ======================= //
var canvas = document.getElementById("game"),
  ctx = canvas.getContext("2d"),
  width = 540,
  height = 540;
const player = {
  animation: new Animation(),
  x: 250,
  y: 494,
  width: 32,
  height: 48,
  speed: 3,
  vrX: 0,
  vrY: 0,
  frameX: 0,
  frameY: 0,
  moving: false,
  jumping: false,
};
//-------------ANIMATION FUNCTIONS--------------//
const playerSprite = new Image();
playerSprite.src = "deadpool.png";
const background = new Image();
background.src = "background.jpeg";
(keys = []), (friction = 0.8), (gravity = 0.3);

canvas.width = width;
canvas.height = height;
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  drawSprite(
    playerSprite,
    player.width * player.frameX,
    player.height * player.frameY,
    player.width,
    player.height,
    player.x,
    player.y,
    player.width,
    player.height
  );
  movePlayer();
  handlePlayerFrame();
  requestAnimationFrame(animate);
}
animate();

//  KEYBOARD INTERACTION LOGIC //

function movePlayer() {
  // check keys
  if (keys[38] || keys[32]) {
    // up arrow or space
    if (!player.jumping) {
      player.jumping = true;
      player.vrY = -player.speed * 3;
      player.frameY = 0;
      player.moving = true;
    }
  }
  if (keys[39]) {
    // right arrow
    if (player.vrX < player.speed) {
      player.vrX++;
      player.frameY = 2;
      player.moving = true;
    }
  }
  if (keys[37] && player.y > 100) {
    // left arrow
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }

  player.vrX *= friction;

  player.vrY += gravity;

  player.x += player.vrX;
  player.y += player.vrY;

  if (player.x >= width - player.width) {
    player.x = width - player.width;
  } else if (player.x <= 0) {
    player.x = 0;
  }

  if (player.y >= height - player.height) {
    player.y = height - player.height;
    player.jumping = false;
  }
}
function handlePlayerFrame() {
  if (player.frameX < 3 && player.moving) player.frameX++;
  else player.frameX = 0;
}

// ====================== GAME PROCESSES ======================= //

//======================= EVENT LISTENERS=========================//

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
  player.moving = true;
});

document.body.addEventListener("keyup", function (e) {
  delete keys[e.keyCode];
  player.moving = false;
  console.log(keys);
});

// window.addEventListener("load", function () {
//   update();
// });

//--------------------OLD CODE---------------------//
// ctx.clearRect(0, 0, width, height);
// ctx.fillStyle = "blue";
// ctx.fillRect(player.x, player.y, player.width, player.height);

//   requestAnimationFrame(update);

// document.body.addEventListener("keyup", function (e){
//     keys[e.keyCode] = false;
//   });

//================SOURCE CREDIT================//
//Bradley Ripple for prividing source to sprite insuration and animation
//https://www.youtube.com/watch?v=EYf_JwzwTlQ&t=15s
