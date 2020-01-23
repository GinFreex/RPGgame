var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.beginPath();
ctx.fillRect(10, 10, 150, 100);
ctx.stroke();

var ctx2 = c.getContext("2d");
ctx2.fillStyle = "#00FF00";
ctx2.beginPath();
ctx2.fillRect(200, 10, 150, 100);
ctx2.stroke();