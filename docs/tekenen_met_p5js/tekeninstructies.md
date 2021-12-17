<!--
## Teken instructies
-->

Je kan op twee manieren een digitaal 'potlood' besturen binnen `p5js`,
- via je muis, of
- via een algoritme.

Een voorbeeld van het gebruik van een algoritme is, wanneer we `p5js` 
de instructie geven:
> teken alle punten die op een afstand van `50` pixels, 
> van het midden van het papier liggen

Als voorbeeld kan je deze instructies vertalen naar de volgende code:
```javascript
let papier = { lengte: 400, breedte: 400 };
let radius = 50;
let x0 = papier.breedte / 2;
let y0 = papier.lengte / 2;
let beeldSnelheid = 10;

function setup() {
    createCanvas(papier.breedte, papier.lengte);
    background(220);
    angleMode(DEGREES);
    frameRate(beeldSnelheid);
}

function draw() {
    hoek = random(360);
    x = radius*cos(hoek) + x0;
    y = radius*sin(hoek) + y0;

    strokeWeight(radius / 10);
    point(x,y);
}
```

Wanneer we zelf de bovenstaande instructies krijgen om met de muis 
de digitale potlood te besturen, kunnen we het volgende doen:

WIP
