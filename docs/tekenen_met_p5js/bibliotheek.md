<!--
## Bibliotheek
-->

`p5js` is een bibliotheek voor JavaScript code. Het is een heel specifieke bibliotheek voor code waarmee je visualisaties kan maken (tekeningen, animaties, spelletjes, etc.). 

Als voorbeeld, stel je voor dat je een werkstuk voor school maakt over roze olifanten in India. Om aan een plaatje te komen van een roze olifant kan je:
1. zelf naar India vliegen,
    - een roze olifant vinden, en
    - een foto maken
2. naar de bibliotheek gaan,
    - een boek vinden met een foto van een roze olifant uit India,
    - een kopie maken van deze foto

Net zoals naar de bibliotheek gaan, je tijd (en zakgeld?) bespaard voor een reis naar India, kan je door gebruik te maken van een code bibliotheek tijd besparen. 
Door een code bibliotheek te gebruiken kan je voortbouwen op het werk van anderen, en hoef je zelf niet alle code van 'scratch' te schrijven. 
Het enige is wel,... zoals er wel in de bibliotheek een boek moet staan met een foto van een roze olifant, moet er wel een code bibliotheek bestaan die, die code bevat die jij nodig hebt! (Anders moet je het als nog zelf van 'scratch' schrijven)

De "index", een lijst met alle code bouwstenen beschikbaar in de `p5js` bibliotheek kan je [hier](https://p5js.org/reference/) vinden.

Als je nieuwsgierig bent hoe de `p5js` code bibliotheek gekoppeld is aan je [editor](https://editor.p5js.org), zoek dan eens in je editor naar een liggend pijltje, ongeveer onder 'Auto-refresh' (kan je het vinden?). 
Door op het pijltje te klikken verandert die van richting. Als die naar links gericht staat, zie je een lijstje van bestanden/files. Als het goed is heet een file `index.html` en die heeft ongeveer onderstaande inhoud. Het de HTML `<script>` elementen onder `<head>` leggen de koppeling met de `p5js` code bibliotheek, en zorgen ervoor dat je de code uit deze bibliotheek kan gebruiken.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
       <link rel="stylesheet" type="text/css" href="style.css">
       <meta charset="utf-8" />

  </head>
  <body>
     <script src="sketch.js"></script>
  </body>

  </html>
```

