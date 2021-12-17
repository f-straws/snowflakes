let papier = {
    lengte: 400,
    hoogte: 400,
    kleur: {
        r: 220,
        g: 220,
        b: 220
    }
}

/// [kleurdoos]
function createKleurdoos() {

      function kleurSlider(naam) {
              _kleurSlider = createP(`${naam}: <br>`);
              slider = createSlider(0, 255, 100);
              slider.id('slider-' + naam.toLowerCase());
              slider.parent(_kleurSlider);

              return _kleurSlider;
      }

      let kleurdoos = createDiv('');

      let potloodKleur = createElement('h3', 'Potlood Kleur');
      potloodKleur.id('potlood-kleur');
      potloodKleur.parent(kleurdoos);

      kleurSlider('Rood').parent(kleurdoos);
      kleurSlider('Groen').parent(kleurdoos);
      kleurSlider('Blauw').parent(kleurdoos);
}
/// [kleurdoos]

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

/// [kleurdoos-klaarzetten]
    createKleurdoos()
/// [kleurdoos-klaarzetten]
}

function draw() {

/// [kleurdoos-kleur-kiezen]
      let kleur = color(select('#slider-rood').value(),
                    select('#slider-groen').value(),
                    select('#slider-blauw').value());

      select('#potlood-kleur').style('color', kleur);
      stroke(kleur);
/// [kleurdoos-kleur-kiezen]

/// [potlood]
      if (mouseIsPressed) {
              line(mouseX, mouseY, pmouseX, pmouseY);
            }
/// [potlood]

}
