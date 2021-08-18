/***
 * @todo create canvas
 * @todo create player
 * @todo make player jump and move left to right
 * @todo if player falls, player dies
 * @tood if player hit enemy, player dies
 * @todo create enemy AI
 * @todo display score during game play
 * @todo display player lost when dies
 */

// GLOBAL DOM / VARIABLES //
document.addEventListener ('DOMContentLoaded', () => {
  const game = document.querySelector ('.game');
  const dude = document.createElement ('div');
  let dudeLeftSpace = 160;

  function createDude () {
    game.appendChild (dude);
    dude.classList.add ('dude');
    dude.style.left = dudeLeftSpace + 'px';
  }
  createDude ();
});
//find out how to do this with canvas

// ====================== SETUP FOR CANVAS RENDERING ======================= //

// ====================== ENTITIES ======================= //

// ====================== HELPER FUNCTIONS ======================= //

//======================= EVENT LISTENERS=========================//

// SANDBOX FOR TESTING PAINTING TECHNIQUES//

//  GUIw //

//  KEYBOARD INTERACTION LOGIC //

// ====================== GAME PROCESSES ======================= //

// ====================== COLLISION DETECTION ======================= //

// ====================== PAINT INTIAL SCREEN ======================= //
