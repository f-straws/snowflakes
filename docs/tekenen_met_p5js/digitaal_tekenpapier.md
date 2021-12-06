<!--
## Digitaal tekenpapier
-->

Om te tekenen heb je iets nodig om op te (mogen?) tekenen. In p5js kan je, je digitale tekenpapier maken met
de functie `createCanvas`. Wat je daarvoor moet doen is de functie aanroepen en twee getallen meegeven:
- breedte, en
- lengte

<details>
<summary>Click en zie code!</summary>

Papieren van verschillende grootte en kleur, kan je het papier veranderen? 
(Kopieer en plak de code in je [editor](https://editor.p5js.org) )

```javascript
let papieren = [
    { breedte: 100, 
      lengte: 100, 
      kleur: { r: 220, g: 20, b: 60 } },
    { breedte: 200, 
      lengte: 100, 
      kleur: { r: 61, g: 89, b: 171 } },
    { breedte: 200, 
      lengte: 400, 
      kleur: { r: 60, g: 179, b: 113 } }
];

function setup() {
    papierNr = 0;
    createCanvas(papieren[papierNr].breedte, 
                 papieren[papierNr].lengte);
}

function draw() {
    background(papieren[papierNr].kleur.r, 
               papieren[papierNr].kleur.g, 
               papieren[papierNr].kleur.b);
}
```

</details>

