var x;
var y;
function setup() {
createCanvas(400, 400);
	
  x = width/2;
  y = height/2;
  background(51);

}

function draw() {
  stroke(sin(frameCount*0.02)*255,cos(frameCount*0.03)*255,tan(frameCount*0.04)*255);
  strokeWeight(10);

  point(x, y);

  var r = floor(random(4));

  switch (r) {
    case 0:
      x = x + 3;
      break;
    case 1:
      x = x - 3;
      break;
    case 2:
      y = y + 3;
      break;
    case 3:
      y = y - 3;
      break;
  }
if(x<=0){
	x=width-6
}
if(x>=width){
	x=6
}
if(y<=0){
	y=height-6
}
if(y>=height){
	y=6
}

}