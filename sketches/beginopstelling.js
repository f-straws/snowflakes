let canvas = {
    width: 400,
    height: 400
}

let spelers = [
    new Speler(0.1*canvas.width, canvas.height/2),
    new Speler(0.2*canvas.width, canvas.height*(1/6)),
    new Speler(0.2*canvas.width, canvas.height/2),
    new Speler(0.2*canvas.width, canvas.height*(5/6)),
    new Speler(0.3*canvas.width, canvas.height*(2/6)), 
    new Speler(0.3*canvas.width, canvas.height*(4/6))]

function setup() {
    createCanvas(400, 400);
    frameRate(5);
};

function draw() {
       
    background(220);

    spelers.forEach(function(speler){
            ellipse(speler.x, speler.y, 10, 10);
        }
    );

    spelers.forEach(function(speler){
            speler.x += random(-1, +1)*0.10*canvas.width;
            speler.y += random(-1, +1)*0.10*canvas.height;
        }
    );
}

function mouseClicked() {
    if (isLooping()) {
        noLoop();
    } else {
        spelers.forEach(function(speler){ 
            speler.x = speler.x0; 
            speler.y = speler.y0; 
        });
        loop();
    }
};

