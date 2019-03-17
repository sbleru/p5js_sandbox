function setup(){
  createCanvas(500,500);
  // background(0);
  strokeWeight(4);
  stroke( 255, 255, 255 ); 
}

function draw() {
  background(0);
  translate(width/2, height/2);//原点を画面の中心におく。
// console.log("mouseX: " + mouseX);
// console.log("mouseY: " + mouseY);
console.log("x: " + (mouseX-width/2));
console.log("y: " + (mouseY-height/2));

  var a = atan2(mouseY-height/2,mouseX-width/2);
  //原点が画面の中心なのでその分補正する。
 
  rotate(a);//求めた角度（ラジアン）だけ画面を回転する。          
  line(0,0,100,0);//線を描く
  var b=degrees(a);//ラジアンを角度（°）に直す。
  console.log(b);//角度（°）を表示する。
}