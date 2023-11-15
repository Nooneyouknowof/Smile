const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const CW = canvas.width;
const CH = canvas.height;
let xCenter = CW / 2;
let yCenter = CH / 2;
let fillColor = "blue";
let isWinking = false;

function rad(arg) {
  return Math.PI * (arg / 180);
}

function Ball(color, x, y, r, d1, d2) {
  let fillColor = color;
  ctx.beginPath();
  ctx.arc(xCenter + x, yCenter + y, r, rad(d1), rad(d1) + rad(d2));
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.stroke();
}

function arcBall(color, x, y, r, d1, d2) {
  ctx.beginPath();
  ctx.arc(xCenter + x, yCenter + y, r, rad(d1), rad(d1) + rad(d2));
  ctx.stroke();
}

function Box(color, x, y, w, h) {
  let fillColor = color;
  ctx.beginPath();
  ctx.fillStyle = fillColor;
  ctx.fillRect(xCenter + x - w / 2, yCenter + y - h / 2, w, h);
}

function wink() {
  ctx.clearRect(0, 0, CW, CH);
  Ball("yellow", 0, 0, 200, 0, 360);
  Ball("black", -50, -50, 20, 0, 360);
  arcBall("black", 0, 25, 50, 0, 180);
  if (isWinking) {
    Box("black", 50, -50, 50, 5);
  } else {
    Ball("black", 50, -50, 20, 0, 360);
  }
  isWinking = !isWinking;
}
