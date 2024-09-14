export class Score {
  constructor(ctx) {
    this.ctx = ctx;
  }

  generationScore() {
    this.ctx.strokeStyle = "grey";
    this.ctx.lineWidth = 5;

    this.ctx.beginPath();

    const x = 100;
    const y = 10;
    const radius = 30;

    this.ctx.moveTo(x + radius, y);
    this.ctx.lineTo(x, y);
    this.ctx.arc(300, y + radius, radius, 4.7, 7.7, false);

    this.ctx.lineTo(x, y + (radius * 2));
    this.ctx.arc(x, y + radius, radius, 8, 4.6, false);

    this.ctx.closePath();
    this.ctx.stroke();
  };
};