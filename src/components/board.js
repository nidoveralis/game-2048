export class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = Array(length = 4)
  }

  generationBoard() {
    this.ctx.strokeStyle = "grey";
    this.ctx.lineWidth = 5;

    this.ctx.beginPath();

    const x = 50;
    const y = 100;
    const radius = 30;

    this.ctx.moveTo(x + radius, y);
    this.ctx.lineTo(x, y);
    this.ctx.arc(345, y + radius, radius, 4.7, 6, false);

    this.ctx.lineTo(375, y + (radius * 1.5));
    this.ctx.arc(345, 380, radius, 6.2, 1.5, false);

    this.ctx.lineTo(345, 410);
    this.ctx.arc(x + 5, 380, radius, 8, 3, false);

    this.ctx.lineTo(x - 25, y + (radius * 2));
    this.ctx.arc(x + 5, y + radius, radius, 9.3, 4.6, false);

    this.ctx.closePath();
    this.ctx.stroke();
  };

  generationGrid() {
    const emptyCells = [];

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        emptyCells.push({ x: row, y: col, tile: 0 })
      }
    }
  }
};