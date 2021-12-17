let papier = {
  lengte: 800,
  hoogte: 800,
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
  translate(width/2, height/2);

  let x = mouseX - width/2;
  let y = mouseY - height/2;
  let x0 = pmouseX - width/2;
  let y0 = pmouseY - height/2;

  if (mouseIsPressed) {

      line(x, y, x0, y0);

      push();
      scale(1, -1);
      line(x, y, x0, y0);
      pop();

  }
/// [potlood]
}
