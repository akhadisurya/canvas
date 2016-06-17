var leather = new Image();
leather.src="arvin.jpg"

function draw(){
  var ctx = document.getElementById('my_canvas').getContext('2d');
  var g1 = ctx.createLinearGradient(0, 0, 200, 0);
  g1.addColorStop(0, "magenta");
  g1.addColorStop(1, "black");

  ctx.fillStyle = g1;
  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;
  ctx.fillRect(0, 0, 200, 200);
  ctx.strokeRect(0, 0, 200, 200);

  var pattern = ctx.createPattern(leather, "repeat-x")
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 200, 200);
  ctx.lineWidth = 20;
  ctx.strokeStyle = g1;
  ctx.strokeRect(0, 0, 200, 200);
  ctx.fill();
}

window.onload = draw;
