<!--
### De buitenomgeving
-->
Kopieer en plak eens het onderstaande stukje code in je [editor](https://editor.p5js.org), en draai de code.
Wat zie je gebeuren?

```javascript
// global scope
let kleuren = [ 'red', 'green', 'blue' ];

function setup() {
    // function's scope
    createCanvas(400, 400);
    frameRate(0.5);
}

function draw() {
    // function's scope
    i = (frameCount - 1) % kleuren.length;
    background(kleuren[i]);
}
```

Probeer eens het volgende: 
- Verplaats uit de buitenomgeving, de 'global scope' de code lijn 
die begint met `let kleuren`, naar binnen de functie `setup` (tussen de `{ }`).

Wat zie je? (Als het goed is, geeft je code nu een `error`)

Dat bovenstaande code een error geeft als je de variabele `kleuren` verplaatst van de 'global scope'
naar binnen de `setup` functie, komt doordat de functie `draw` geen toegang meer heeft 
tot de variabele `kleuren`. Variabelen die in de 'global scope' gedefinieerd staan, 
zijn bereikbaar voor beide functies, `setup` en `draw`. Variabelen die binnen een functie gedefinieerd zijn, (in de 'functie scope'), zijn alleen beschikbaar binnen de functie.   

![scope en toegang](./images/scope_en_toegang.png)
