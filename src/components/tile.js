export class Tile {
  constructor(ctx, index) {
    this.ctx = ctx;
    this.color = 'black';
    this.index = index;
  }

  generationTile() {
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();
console.log(this.index);
    const x = this.index * 50 + (this.index > 1 ? this.index * 20 : 0);console.log(x);
    const y = 120;
    const radius = 10;

    this.ctx.moveTo(x + radius, y);
    this.ctx.lineTo(x, y);
    this.ctx.arc(x + 46, y + radius, radius, 4.7, 6, false);

    this.ctx.lineTo(x+56, y + (radius * 1.5));
    this.ctx.arc(x+46, y + 50, radius, 6.2, 1.5, false);

    this.ctx.lineTo(x + 46, y + 60);
    this.ctx.arc(x + 5, y + 50, radius, 8, 3, false);

    this.ctx.lineTo(x - 5, y + 60);
    this.ctx.arc(x + 5, y + radius, radius, 9.3, 4.6, false);

    this.ctx.closePath();
    this.ctx.fill();
  };
};