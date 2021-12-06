let huis = {
    muur: { hoogte: 100, afstand: 100 },
    tuin: { breedte: 320, diepte: 32 }
}

function tekenHuis(x0, y0, huis) {

    // tuin
    ellipse(x0, y0 + huis.muur.hoogte*0.5, huis.tuin.breedte, huis.tuin.diepte);

    // muren
    rect(x0, y0, huis.muur.afstand, huis.muur.hoogte);
    
    // dak
    triangle(x0 - huis.muur.hoogte*0.75, y0 - huis.muur.hoogte*0.5, x0 + huis.muur.hoogte*0.75, y0 - huis.muur.hoogte*0.5, x0, y0 - huis.muur.hoogte*1.25);

}

let bloem = {
    stengel: { lengte: 60 },
    blaadje: { lengte: 6, breedte: 14 },
    aantalBlaadjes: 12,
    bladHoek: Math.PI / 6,
    hartRadius: 12  
}

let groeiParameters = {
    x0: 500,
    k: 0.02
}

function tekenBloem(x0, y0, bloem, groeiParameters, t) {

    // stengel
    line(x0, y0, x0, y0 + bloem.stengel.lengte);

    // hart
    push();
    
    translate(x0, y0);
    let hartRadius = groei(groeiParameters, bloem.hartRadius, t);
    ellipse(0, 0, hartRadius, hartRadius);

    for (let i = 0; i < bloem.aantalBlaadjes; i++) {
        ellipse(0, -hartRadius, groei(groeiParameters, bloem.blaadje.lengte, t), groei(groeiParameters, bloem.blaadje.breedte, t));
        rotate(bloem.bladHoek);
    }
    
    pop();

}

function groei(parameters, maxGroei, t) {
    let noemer = 1 + Math.E ** (-parameters.k * (t - parameters.x0));
    return maxGroei / noemer;
}

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);

}

function draw() {
    background(220);

    tekenHuis(width/2, height/2, huis);
    tekenBloem(width/2 - 80, height/2, bloem, groeiParameters, frameCount);
    tekenBloem(width/2 - 120, height/2 - 10, bloem, groeiParameters, frameCount);
}
