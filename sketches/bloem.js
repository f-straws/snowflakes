// sketches/bloem.js

let canvas = { width: 400,
           height: 400,
           // rbga
           color: [120, 120, 120, 100]
    };

let flower = { heartRadius: 12,
    petal: { l0: 0, w0: 0, lMax: 6, wMax: 14 },
    stem: { x0: 0, y0: 0, xL: 0, yL: -60}
};

function growth(x, p) {
    // logistic growth model
    let nominator = 1 + Math.E ** (-p.k * (x-p.x0));
    return p.L/nominator;
}

function setup() {
    createCanvas(canvas.width, canvas.height);
    ellipseMode(CENTER);
    //frameRate(10);
}

function draw() {
    
    background(canvas.color);
    
    // flower
    translate(width/2, height/2);
    line(flower.stem.x0, flower.stem.y0, flower.stem.xL, flower.stem.yL); 
    line(flower.stem.x0, flower.stem.y0, -15 + flower.stem.xL, 0.6*flower.stem.yL); 
    line(flower.stem.x0, flower.stem.y0, +15 + flower.stem.xL, 0.6*flower.stem.yL); 

    push();
    translate(flower.stem.xL, flower.stem.yL);
    let heartRadius = growth(frameCount, { x0: 500, k: 0.02, L: flower.heartRadius});
    ellipse(flower.stem.xL, 0, 1.5*heartRadius, 1.5*heartRadius);
    for (let i = 0; i < 12; i++) {
        let lPetal = growth(frameCount, { x0: 500, k: 0.02, L: flower.petal.lMax});
        let wPetal = growth(frameCount, { x0: 500, k: 0.02, L: flower.petal.wMax});
        ellipse(flower.stem.xL, - heartRadius, lPetal, wPetal ); 
    
        rotate(PI / 6);
    }
    pop(); 
}
