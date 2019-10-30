//Iteration 2 - character
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.col -= 50;
    if (this.col < 0) {
      this.col = 0
    }
  }

  moveRight() {
    this.row += 50;
    if (this.row > 450) {
      this.row = 450
    }
  }

  moveDown() {
    this.col += 50;
    if (this.col > 450) {
      this.col = 450
    }
  }

  moveLeft() {
    this.row -= 50;
    if (this.row < 0) {
      this.row = 0
    }
  }
}