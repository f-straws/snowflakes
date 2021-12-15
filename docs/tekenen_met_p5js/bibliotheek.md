<!--
## Bibliotheek
-->

`p5js` is een bibliotheek, gemaakt in de programmeertaal JavaScript. Het is een heel specifieke bibliotheek waarmee je visualisaties kan maken (tekeningen, animaties, spelletjes, etc.). 

Als voorbeeld: stel voor dat je een werkstuk voor school maakt over roze olifanten in India. Om aan een plaatje te komen van een roze olifant, kan je:
1. zelf naar India vliegen,
    - een roze olifant vinden, en
    - een foto maken
2. naar de bibliotheek gaan,
    - een boek vinden met een foto van een roze olifant uit India, en
    - een kopie maken van deze foto

Net zoals naar de bibliotheek gaan je tijd (en zakgeld?) bespaart voor een reis naar India, kan je, door gebruik te maken van een code bibliotheek, tijd besparen. 
Door een code bibliotheek te gebruiken, kan je voortbouwen op het werk van anderen, en hoef je zelf niet alle code van 'scratch' te schrijven. Het enige is wel: zoals er wel in de bibliotheek een boek moet staan met een foto van een roze olifant, moet er wel een code bibliotheek bestaan die, die code bevat die jij nodig hebt! (Anders moet je alsnog de code zelf schrijven)

De lijst met alle code bouwstenen beschikbaar in de `p5js` bibliotheek, de 'index', kan je [hier](https://p5js.org/reference/) vinden. 

Als je nieuwsgierig bent hoe de `p5js` code bibliotheek gekoppeld is aan je [editor](https://editor.p5js.org), zoek dan eens in je editor naar een liggend pijltje, ongeveer onder 'Auto-refresh' (kan je het vinden?). 
Door op het pijltje te klikken, verandert het pijltje van richting. Als deze naar links gericht staat, zie je een lijstje bestanden/files. Als het goed is, zie je het bestand `index.html`, en deze heeft ongeveer de onderstaande inhoud. De HTML `<script>` elementen onder `<head>` binnen dit bestand leggen een koppeling met de `p5js` code bibliotheek, en zorgen zo ervoor dat je de code uit deze bibliotheek kan gebruiken.
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

