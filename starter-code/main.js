const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const player = new Character(0, 0);
const diamonds = new Treasure(6, 5);
diamonds.setRandomPosition();
// Iteration 1 - draw grid
function drawGrid() {

  for (let i = 0; i < 10; i++) {
    context.strokeRect(i * 50, 0, 1, 500);
  }
  for (let i = 0; i < 10; i++) {
    context.strokeRect(0, i * 50, 500, 1);
  }
}

// canvas dimentions
context.strokeStyle = "black"
context.lineWidth = 1
context.strokeRect(0, 0, 500, 500)




function drawPlayer() {

  const IMAGE_URL = 'images/character-down.png';
  const image = new Image();
  image.src = IMAGE_URL;
  // console.dir(image);
  // image.addEventListener('load', () => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  const size = 0.9;
  context.drawImage(image, player.row, player.col, imageWidth * size, imageHeight * size);
  // });
  return image;
};

function drawTreasure() {
  const IMAGE_URL = 'images/treasure.png';
  const image = new Image();
  image.src = IMAGE_URL;
  // console.dir(image);
  // image.addEventListener('load', () => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  const size = 0.2;
  context.drawImage(image, diamonds.row, diamonds.col, imageWidth * size, imageHeight * size);
  // });
  return image;
};



window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      console.log(player.row, player.col);
      break;
    case 38:
      player.moveUp();
      console.log(player.row, player.col);

      break;
    case 39:
      player.moveRight();
      console.log(player.row, player.col);

      break;
    case 40:
      player.moveDown();
      console.log(player.row, player.col);

      break;
  }
});

function drawEverything() {
  context.clearRect(0, 0, 490, 490)
  drawGrid();
  drawPlayer();
  drawTreasure();
  window.requestAnimationFrame(drawEverything)
}
drawEverything();