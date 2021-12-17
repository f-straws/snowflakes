let papier = {
  lengte: 600,
  hoogte: 600,
  kleur: {
    r: 0,
    g: 0,
    b: 0
  }
}

let symmetrie = 6;

/// [kleurdoos]
function createKleurdoos() {

      function kleurSlider(naam, eventCallback) {
        let _kleurSlider = createP(`${naam}: <br>`);
        _kleurSlider.id('kleur-slider-' + naam.toLowerCase());

        let slider = createSlider(0, 255, 100);
        slider.id('slider-' + naam.toLowerCase());
        slider.input(eventCallback);
        slider.parent(_kleurSlider);

        return _kleurSlider;
      }

      function kleurWaarde(naam, beginWaarde, eventCallback) {
        let waardeInput = createInput(beginWaarde);
        waardeInput.id('input-' + naam.toLowerCase());
        waardeInput.size(25);
        waardeInput.input(eventCallback);

        return waardeInput
      }

      let kleurdoos = createDiv('');

      let potloodKleur = createElement('h3', 'Potlood Kleur');
      potloodKleur.id('potlood-kleur');
      potloodKleur.parent(kleurdoos);

      kleurSlider('Rood', roodSliderEvent).parent(kleurdoos);
      kleurWaarde('Rood',
                 `${select('#slider-rood').value()}`,
                 roodWaardeEvent).parent(select('#kleur-slider-rood'));

      kleurSlider('Groen', groenSliderEvent).parent(kleurdoos);
      kleurWaarde('Groen',
                 `${select('#slider-groen').value()}`,
                 groenWaardeEvent).parent(select('#kleur-slider-groen'));

      kleurSlider('Blauw', blauwSliderEvent).parent(kleurdoos);
      kleurWaarde('Blauw',
                 `${select('#slider-blauw').value()}`,
                 blauwWaardeEvent).parent(select('#kleur-slider-blauw'));

}

function roodSliderEvent() {
  select('#input-rood').value(this.value());
}

function roodWaardeEvent() {
  select('#slider-rood').value(this.value());
}

function groenSliderEvent() {
  select('#input-groen').value(this.value());
}

function groenWaardeEvent() {
  select('#slider-groen').value(this.value());
}

function blauwSliderEvent() {
  select('#input-blauw').value(this.value());
}

function blauwWaardeEvent() {
  select('#slider-blauw').value(this.value());
}

/// [kleurdoos]

/// [save-instructie]
function saveTekening() {
  save('p5js_tekening.png');
}
/// [save-instructie]

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

/// [save-knop]
  let saveKnop = createButton('save');
  saveKnop.mousePressed(saveTekening);
/// [save-knop]

/// [kleurdoos-klaarzetten]
  createKleurdoos()
/// [kleurdoos-klaarzetten]

/// [teken-vlakken]
  angleMode(DEGREES);

  translate(width/2, height/2);
  hulpVlakken(6);
/// [teken-vlakken]

}

function draw() {

/// [kleurdoos-kleur-kiezen]
  let kleur = color(select('#slider-rood').value(),
                    select('#slider-groen').value(),
                    select('#slider-blauw').value());

  select('#potlood-kleur').style('color', kleur);

/// [kleurdoos-kleur-kiezen]

/// [potlood]
  let x = mouseX - width/2;
  let x0 = pmouseX - width/2;
  let y = mouseY - height/2;
  let y0 = pmouseY - height/2;
  let d = dist(x, y, x0, y0);

  translate(width/2, height/2);

  kleur.setAlpha(map(d, 50, 100, 100, 80));
  stroke(kleur);
  strokeWeight(map(d, 0, 20, 7, 1));

  if (mouseIsPressed) {

      for (let i=0; i < symmetrie; i++) {
        rotate(360 / symmetrie);

        line(x, y, x0, y0);

/// [spiegel-symmetrie]
        push();
        scale(-1, 1);
        line(x, y, x0, y0);
        pop();
/// [spiegel-symmetrie]
      }
  }
/// [potlood]
}
