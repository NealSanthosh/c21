var sun;
var size;
var r;

var startx_Mercury;
var starty_Mercury;
var angle_Mercury;
var increment_Mercury;
var radius_Mercury;
var Mercury;

var startx_Venus;
var starty_Venus;
var angle_Venus;
var increment_Venus;
var radius_Venus;
var Venus;

var startx_Earth;
var starty_Earth;
var angle_Earth;
var increment_Earth;
var radius_Earth;
var Earth;

var startx_Mars;
var starty_Mars;
var angle_Mars;
var increment_Mars;
var radius_Mars;
var Mars;

var startx_Jupiter;
var starty_Jupiter;
var angle_Jupiter;
var increment_Jupiter;
var radius_Jupiter;
var Jupiter;

// var startx_Saturn;
// var starty_Saturn;
// var angle_Saturn;
// var increment_Saturn;
// var radius_Saturn;
// var Saturn;

var startx_Uranus;
var starty_Uranus;
var angle_Uranus;
var increment_Uranus;
var radius_Uranus;
var Uranus;

var startx_Neptune;
var starty_Neptune;
var angle_Neptune;
var increment_Neptune;
var radius_Neptune;
var Neptune;

function setup() {
  createCanvas(750,750);
  // sun = createSprite(350, 350, 20, 20);

   size = 10;
   r = 10

  startx_Mercury=350;
  starty_Mercury=350; 
  angle_Mercury=0; 
  increment_Mercury=5; 
  radius_Mercury=40;
  Mercury = createSprite(350, 350, 10, 10);
  Mercury.mirrorX(-1);

  startx_Venus=350; 
  starty_Venus=350; 
  angle_Venus=0; 
  increment_Venus=4; 
  radius_Venus=80;
  Venus = createSprite(350, 350, 10, 10);
  Venus.mirrorX(-1);

  startx_Earth=350; 
  starty_Earth=350; 
  angle_Earth=0; 
  increment_Earth=3; 
  radius_Earth=120;
  Earth = createSprite(350, 350, 10, 10);
  Earth.mirrorX(-1);

  startx_Mars=350; 
  starty_Mars=350; 
  angle_Mars=0; 
  increment_Mars=2.2; 
  radius_Mars=160;
  Mars = createSprite(350, 350, 10, 10);
  Mars.mirrorX(-1);

  startx_Jupiter=350;
  starty_Jupiter=350; 
  angle_Jupiter=0; 
  increment_Jupiter=2.5; 
  radius_Jupiter=200;
  Jupiter = createSprite(350, 350, 10, 10);
  Jupiter.mirrorX(-1);

  // startx_Saturn=350; 
  // starty_Saturn=350; 
  // angle_Saturn=0; 
  // increment_Saturns=2; 
  // radius_Saturn=300;
  // Saturn = createSprite(350, 350, 10, 10);
  // Saturn.mirrorX(-1);

  startx_Uranus=350; 
  starty_Uranus=350; 
  angle_Uranus=0; 
  increment_Uranus=2; 
  radius_Uranus=240;
  Uranus = createSprite(350, 350, 10, 10);
  Uranus.mirrorX(-1);

  startx_Neptune=350; 
  starty_Neptune=350; 
  angle_Neptune=0; 
  increment_Neptune=1; 
  radius_Neptune=280;
  Neptune = createSprite(350, 350, 10, 10);
  Neptune.mirrorX(-1);

}

function draw() {
  background(0,0,0);  

  sun = ellipse(350, 350, r*2, r*2);

  if(frameCount % 4 === 0){
    r = size;
    size = size + 0.5;
  }

  turn();

  drawSprites();
}

function turn() {
  angle_Mercury=angle_Mercury+increment_Mercury;
  Mercury.x=startx_Mercury+radius_Mercury*Math.cos(angle_Mercury * Math.PI/180);
  Mercury.y=starty_Mercury+radius_Mercury*Math.sin(angle_Mercury * Math.PI/180);
  Mercury.rotation=60-angle_Mercury;
  
  angle_Venus=angle_Venus+increment_Venus;
  Venus.x=startx_Venus+radius_Venus*Math.cos(angle_Venus * Math.PI/180);
  Venus.y=starty_Venus+radius_Venus*Math.sin(angle_Venus * Math.PI/180);
  Venus.rotation=60-angle_Venus;

  angle_Earth=angle_Earth+increment_Earth;
  Earth.x=startx_Earth+radius_Earth*Math.cos(angle_Earth * Math.PI/180);
  Earth.y=starty_Earth+radius_Earth*Math.sin(angle_Earth * Math.PI/180);
  Earth.rotation=60-angle_Earth;
  
  angle_Mars=angle_Mars+increment_Mars;
  Mars.x=startx_Mars+radius_Mars*Math.cos(angle_Mars * Math.PI/180);
  Mars.y=starty_Mars+radius_Mars*Math.sin(angle_Mars * Math.PI/180)
  Mars.rotation=60-angle_Mars;

  angle_Jupiter=angle_Jupiter+increment_Jupiter;
  Jupiter.x=startx_Jupiter+radius_Jupiter*Math.cos(angle_Jupiter * Math.PI/180);
  Jupiter.y=starty_Jupiter+radius_Jupiter*Math.sin(angle_Jupiter * Math.PI/180);
  Jupiter.rotation=60-angle_Jupiter;

  // angle_Saturn=angle_Saturn+increment_Saturn;
  // Saturn.x=startx_Saturn+radius_Saturn*Math.cos(angle_Saturn * Math.PI/180);
  // Saturn.y=starty_Saturn+radius_Saturn*Math.sin(angle_Saturn * Math.PI/180);
  // Saturn.rotation=60+angle_Saturn;

  angle_Uranus=angle_Uranus+increment_Uranus;
  Uranus.x=startx_Uranus+radius_Uranus*Math.cos(angle_Uranus * Math.PI/180);
  Uranus.y=starty_Uranus+radius_Uranus*Math.sin(angle_Uranus * Math.PI/180);
  Uranus.rotation=60+angle_Uranus;
  
  angle_Neptune=angle_Neptune+increment_Neptune;
  Neptune.x=startx_Neptune+radius_Neptune*Math.cos(angle_Neptune * Math.PI/180);
  Neptune.y=starty_Neptune+radius_Neptune*Math.sin(angle_Neptune * Math.PI/180);
  Neptune.rotation=60+angle_Neptune;

}
