import { ctx } from "./game.js";
export default class FiguresManager {
  createRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
  createCircle(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.closePath();
  }
}
