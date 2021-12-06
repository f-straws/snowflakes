let symmetry = 6;
let angle = 360 / symmetry;

weightedLine = function(x, y, x0, y0) {
    let d = dist(x, y, x0, y0);
    strokeWeight(map(d, 0, 20, 20, 1));
    line(x, y, x0, y0);
}

centerRelative = function(coord, dim) {
    return coord - dim/2;
}

drawAxes = function(a, w, h) {
    translate(w/2, h/2);
    stroke(255,0,0);

    for (let i = 0; i < symmetry; i++) {
        rotate(a);
        line(0, 0, max(w, h), 0);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(0);
    
    drawAxes(angle, width, height);

}

function draw() {

    translate(width/2, height/2)

    if (mouseIsPressed) {

        stroke(255, 100);

        for (let i = 0; i < symmetry; i++) {

            rotate(angle);

            weightedLine(centerRelative(mouseX, width), 
                         centerRelative(mouseY, height), 
                         centerRelative(pmouseX, width), 
                         centerRelative(pmouseY, height));
            push();
            scale(1, -1);
        
            weightedLine(centerRelative(mouseX, width), 
                         centerRelative(mouseY, height), 
                         centerRelative(pmouseX, width), 
                         centerRelative(pmouseY, height));
            pop();
        }
    }

}
