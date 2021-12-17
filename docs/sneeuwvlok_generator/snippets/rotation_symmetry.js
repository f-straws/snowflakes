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

/// [teken-vlakken]
  angleMode(DEGREES);

  translate(width/2, height/2);
  hulpVlakken(6);
/// [teken-vlakken]

}

function draw() {

/// [potlood]
  let x = mouseX - width/2;
  let x0 = pmouseX - width/2;
  let y = mouseY - height/2;
  let y0 = pmouseY - height/2;

  translate(widht/2, height/2);

  if (mouseIsPressed) {

      for (let i=0; i < 6; i++) {
        rotate(360 / 6);
        line(x, y, x0, y0);
      }
  }
/// [potlood]
}
