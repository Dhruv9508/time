var hr,mn,sec
var hra,mna,seca

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);
sec=second()
sca=map(sec,0,60,0,360);
translate(200,200)
rotate(-90)
push();
rotate(sca)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop();
strokeWeight(10);
noFill();
stroke(255,0,0)
arc(0,0,300,300,0,sca)

hr=hour()
hra = map(hr % 12,0,12,0,360)
push();
rotate(hra)
stroke(0,255,0)
strokeWeight(7)
line(0,0,100,0)
pop();
strokeWeight(10);
noFill();
stroke(0,255,0)
arc(0,0,260,260,0,hra)

mn=minute()
mna = map(mn,0,12,0,360)
push();
rotate(mna)
stroke(0,0,255)
strokeWeight(7)
line(0,0,100,0)
pop();
strokeWeight(10);
noFill();
stroke(0,0,255)
arc(0,0,280,280,0,mna)
}