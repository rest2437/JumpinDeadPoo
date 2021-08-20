/***
 * @todo create canvas *******
 * @todo create player *******
 * @todo make player jump and move left to right
 * @todo if player falls, player dies
 * @tood if player hit enemy, player dies
 * @todo create enemy AI
 * @todo display score during game play
 * @todo display player lost when dies
 */

// GLOBAL DOM / VARIABLES //

let game = document.querySelector("#game");
//console.log(game);
let dude;
let platforms;
let isGameOver = false;
// let platformCount = 5;
// let platforms = [];

// ====================== SETUP FOR CANVAS RENDERING ======================= //
const ctx = game.getContext("2d");
// ctx.fillerStyle = "white";
// ctx.strokeStyle = "red";
// ctx.lineWidth = 5;
// ctx.fillRect(10, 10, 100, 100);
// ctx.strokeRect(10, 10, 100, 100);

game.setAttribute("class", "main-game");
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
// ====================== ENTITIES ======================= //

//add render for dude and platforms
class Dude {
  constructor(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.alive = true;

    this.render = function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
  }
}
// function createDude() {
//   dude.alive = false;
//   setTimeout(() => {
//     let x = Math.floor(Math.random() * game.width) - 40;
//     let y = Math.floor(Math.random() * game.height) - 80;
//     dude = new Dude(x, y, "orange", 40, 80);
//   }, 1000);
//   return true;
// }
class Platform {
  constructor(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;

    this.render = function () {
      ctx.fillstyle = this.color;
      ctx.fillRect = (this.x, this.y, this.width, this.height);
    };
  }
}
function createPlatforms() {
  dude.alive = true;
  setTimeout(() => {
    let x = Math.floor(Math.random() * game.width) - 40;
    let y = Math.floor(Math.random() * game.height) - 80;
    platforms = new Platform(300, 400, "green", 85, 15);
  }, 1000);
}
// ====================== HELPER FUNCTIONS ======================= //

//======================= EVENT LISTENERS=========================//
window.addEventListener("DOMContentLoaded", (e) => {
  dude = new Dude(295, 520, "orange", 60, 85);
  platforms = new Platform(300, 400, "green", 85, 15);
  document.addEventListener("keydown", movementHandler);
  const runGame = setInterval(gameLoop, 80);
  //   movementHandler(e) //
});

// SANDBOX FOR TESTING PAINTING TECHNIQUES//

//  GUIw //
// function movePlatforms() {
//   if (dudeBottomSpace > 200) {
//     platforms.forEach((platform) => {
//       platform.bottom -= 4;
//       let visual = platform.visual;
//       visual.style.bottom = platform.bottom + "px";
//     });
//   }
// }
//  KEYBOARD INTERACTION LOGIC //
function movementHandler(e) {
  switch (e.keyCode) {
    case 87: //up
      dude.y - 20 >= 0 ? (dude.y -= 10) : null;
      break;
    case 65: //left
      dude.x - 20 >= 0 ? (dude.x -= 10) : null;
      break;
    case 83: //down
      dude.y + 20 <= game.height ? (dude.y += 10) : null;
      break;
    case 68: //right
      dude.x + 20 <= game.width ? (dude.x += 10) : null;
      break;
  }
}
// ====================== GAME PROCESSES ======================= //

function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);
  if (dude.alive) {
    dude.render();
  }
  //platform.render();
}
function jump() {
  clearInterval(downTimerId);
  upTimerId = setInterval(function () {
    dudeBottomSpace += 30;
    dude.style.bottom = dudeBottomSpace + "px";
    if (dudeBottomSpace < 200) {
      fall();
    }
  }, 30);
}
function fall() {
  clearInterval(upTimerId);
  downTimerId = setInterval(function () {
    dudeBottomSpace -= 5;
    dude.style.bottom = dudeBottomSpace + "px";
    if (dudeBottomSpace <= 0) {
      GameOver();
    }
  });
}

function gameOver() {
  //console.log ('game over');
  isGameOver = true;
  clearInterval(upTimerId);
  clearInterval(downTimerId);
}

// function start() {
//   if (!isGameOver) {
//     createPlatforms();
//     createDude();
//     setInterval(movePlatforms, 60);
//     jump();
//   }
// }
// //attach to a button
// start();
// ====================== COLLISION DETECTION ======================= //

// ====================== PAINT INTIAL SCREEN ======================= //

//old code
// function createPlatforms() {
//   setTimeout(() => {
//     for (let i = 0; i < platformCount; i++) {
//       let x = Math.floor(Math.random() * game.width) - 40;
//       let y = Math.floor(Math.random() * game.height) - 80;
//       platforms = new Platform(300, 400, "green", 85, 15);
//     }
//   }, 1000);
// }
// console.log(platforms);
