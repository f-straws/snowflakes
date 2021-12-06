<!--
## Tekeninstructie 'loop'
-->

Stel je voor, van iets of iemand krijg je instructies om iets te tekenen, stap voor stap. Bijvoorbeeld:
> 1. teken een horizontale lijn,
> 2. teken een rechthoek bovenop de lijn,
> 3. teken een driehoek bovenop de rechthoek.

Vervolgens vraagt iets of iemand:
> Wil je deze instructies, 
> 1. nog een keer herhalen, en daarna...
> 2. nog een keer, en daarna,
> 3. ... (en zo verder)

Opeens zegt er iets of iemand, 
> STOP!

Dit is wat er in grote lijnen gebeurt in de `draw` functie. De tekeninstructies worden herhaald, of 'geloopt', 
totdat er tegen `draw` gezegd wordt: 'STOP!' 

![instructie ronde](./images/draw_instructie_ronde.png)

<details>
<summary>Click en zie code!</summary>

```javascript
let papier = { breedte: 400, hoogte: 400, rgbKleur: [211, 211, 211] };
let beeldSnelheid = 1;

function setup() {
  createCanvas(papier.breedte, papier.hoogte);
  background(paier.rgbKleur);

  textSize(30);
  textAlign(CENTER);

  frameRate(beeldSnelheid);
}

function draw() {
  text(frameCount, papier.breedte / 2, papier.hoogte / 2);
}
```
Met de `beeldSnelheid`, of `frameRate`, kan je bepalen hoeveel herhalingen van de tekeninstructies 
er in een seconde doorlopen moeten worden.

Als je wilt kan je eens kijken wat er gebeurt als je:
- de code `background(220);` naar binnen de functie `draw` verplaatst, 
- de `beeldSnelheid` verhoogt naar `120`.

Is er iets wat je zelf nog zou willen zien veranderen?
</details>
