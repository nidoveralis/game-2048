export class Tile {
  constructor(ctx, index) {
    this.ctx = ctx;
    this.index = index;
    this.value = 2;
  };

  getColor() {
    switch (this.value) {
      case 2: return "#eee4da";
      case 4: return "#ede0c8";
      case 8: return "#f2b179";
      case 16: return "#f59563";
      case 32: return "#f67c5f";
      case 64: return "#f65e3b";
      case 128: return "#edcf72";
      case 256: return "#edcc61";
      case 512: return "#edc850";
      case 1024: return "#edc53f";
      case 2048: return "#edc22e";
      default: return "#cdc1b4";
    }
  };

  generationTile() {
    this.ctx.fillStyle = this.getColor();

    this.ctx.beginPath();

    const x = this.index[0] === 0 ? 50 : 50 + this.index[0] * 70;
    const y = this.index[1] === 0 ? 120 : 120 + (this.index[1] * 70);

    const radius = 10;

    this.ctx.moveTo(x + radius, y);
    this.ctx.lineTo(x, y);
    this.ctx.arc(x + 46, y + radius, radius, 4.7, 6, false);

    this.ctx.lineTo(x + 56, y + (radius * 1.5));
    this.ctx.arc(x + 46, y + 50, radius, 6.2, 1.5, false);

    this.ctx.lineTo(x + 46, y + 60);
    this.ctx.arc(x + 5, y + 50, radius, 8, 3, false);

    this.ctx.lineTo(x - 5, y + 60);
    this.ctx.arc(x + 5, y + radius, radius, 9.3, 4.6, false);

    this.ctx.closePath();
    this.ctx.fill();
  };
};