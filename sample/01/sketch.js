var x = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // **change** float[] x = new float[20] to array of 20 0's
var y = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // **change** float[] y = new float[20] to array of 20 0's
var segLength = 18;                                 // **change** float to var

function setup() {                          // **change** void setup() to function setup()
    createCanvas(640, 360);                   // **change** size() to createCanvas()
    strokeWeight(9);                          // strokeWeight() is the same
    stroke(255, 100);                         // stroke() is the same
}

function draw() {                           // **change** void draw() to function draw()
    background(0);                            // background() is the same
    drawSegment(0, mouseX, mouseY);           // functions calls, mouseX and mouseY are the same
    for(var i=0; i<x.length-1; i++) {         // **change** int i to var i
        drawSegment(i+1, x[i], y[i]);           // function calls are the same
    }
}

function drawSegment(i, xin, yin) {         // **change** void drawSegment() to function drawSegment(), remove type declarations
    var dx = xin - x[i];                      // **change** float to var
    var dy = yin - y[i];                      // **change** float to var
    var angle = atan2(dy, dx);                // **change** float to var, atan2() is the same
console.log("angle: " + degrees(angle));
    x[i] = xin - cos(angle) * segLength;      // cos() is the same
    y[i] = yin - sin(angle) * segLength;      // sin() is the same
    segment(x[i], y[i], angle);               // function calls are the same
}

function segment(x, y, a) {                 // **change** void segment() to function segment(), remove type declarations
    push();                                   // pushMatrix() becomes push()
    translate(x, y);                          // translate() is the same
    rotate(a);                                // rotate() is the same
    line(0, 0, segLength, 0);                 // line() is the same
    pop();                                    // popMatrix() becomes pop()
}