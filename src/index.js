const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "grey"; 
ctx.lineWidth = 5;

ctx.beginPath();

const x = 100;
const y = 10;
const size = 200;
const radius = 30;

ctx.moveTo(x + radius, y);
ctx.lineTo(x, y);
ctx.arc(295, y + radius, radius, 5, 7.7, false);

ctx.lineTo(x, y + (radius * 2));
ctx.arc(100, y + radius, radius, 8, 4.6, false);

ctx.closePath(); // Закрываем путь
ctx.stroke(); 
