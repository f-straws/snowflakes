let papier = {
    lengte: 400,
    hoogte: 400,
    kleur: {
        r: 220,
        g: 220,
        b: 220
    }
}

/// [save-instructie]
function saveTekening() {
   save('p5js_tekening.png');
}
/// [save-instructie]


function setup() {
    createCanvas(papier.lengte, papier.hoogte);
    background(papier.kleur.r,
               papier.kleur.g,
               papier.kleur.b);

/// [save-knop]
    let saveKnop = createButton('save');
    saveKnop.mousePressed(saveTekening);
/// [save-knop]

}

function draw() {

      if (mouseIsPressed) {
              line(mouseX, mouseY, pmouseX, pmouseY);
            }

}
