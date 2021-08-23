const deadpoolSprite = new Image();
deadpoolSprite.src = "deadpoolsprite.png";

class Deadpool {
  constructor() {
    this.x = 150;
    this.y = 100;
    this.vy = 0;
    this.originalWidth = 450 / 2;
    this.originalHeight = 270;
    this.width = this.originalWidth / 3;
    this.height = this.originalHeight / 3;
    this.weight = 1.5;
    this.frameX = 0;
  }
  update() {
    let curve = Math.sin(angle) * 20;
    if (this.y > canvas.height - this.height + curve) {
      this.y = canvas.height - this.height + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.8;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }
    if (spacePressed && this.y > this.height) this.flap();
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      deadpoolSprite,
      this.frameX * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x - 12,
      this.y - 12,
      this.width * 1.3,
      this.height * 1.3
    );
  }
  flap() {
    this.vy -= 5;
    if (this.frameX >= 1) this.frameX = 0;
    else if (frame % 2 === 0) this.frameX++;
  }
}
const deadpool = new Deadpool();
