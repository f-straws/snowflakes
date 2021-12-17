let papier = {
  lengte: 400,
  hoogte: 400,
  kleur: {
    r: 220,
    g: 220,
    b: 220
  }
}

/// [hulp-vlakken]
function hulpVlakken(vlakken) {
  for (let i = 0; i < vlakken; i++) {
    rotate(360/vlakken);
    line(0,0, max(width, height), 0);
  }
}
/// [hulp-vlakken]

function setup() {
  createCanvas(papier.lengte, papier.hoogte);
  background(papier.kleur.r,
             papier.kleur.g,
             papier.kleur.b);

/// [vlakken]
  angleMode(DEGREES);

  translate(width/2, height/2);
  hulpVlakken(5);
/// [vlakken]

}


function draw() {

/// [potlood]
  if (mouseIsPressed) {

      line(mouseX, mouseY, pmouseX, pmouseY);

  }
/// [potlood]
}
