let papier = {
  lengte: 400,
  hoogte: 400,
  kleur: {
    r: 220,
    g: 220,
    b: 220
  }
}

function setup() {
  createCanvas(papier.lengte, papier.hoogte);
  background(papier.kleur.r,
             papier.kleur.g,
             papier.kleur.b);
}

function draw() {

/// [potlood]
  line(mouseX, mouseY, pmouseX, pmouseY);
/// [potlood]
}
