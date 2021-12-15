<!--
### Pixels en een raster
-->

Het digitale papier kan je je voorstellen als een verzameling rechthoeken, en deze rechthoeken zijn netjes 
geordend in een raster. 

![pixels and raster](images/pixels_raster.png)

De getallen die we meegeven aan `createCanvas` zijn het aantal pixels die we in de breedte willen hebben en het 
aantal pixels dat we in de hoogte willen hebben. Elke pixel heeft een naam, en die naam bestaat uit twee 
nummers. Deze nummers is hun plek in het raster. De pixel in de linkerbovenhoek heeft bijvoorbeeld de naam `0,0`, bestaande uit
twee nummers:  `x = 0` en `y = 0`.

![pixels_namen](images/pixels_namen.png)

 Alle tekeningen die je maakt zijn een combinatie van ingekleurde pixels.
Een tekening maken met p5js betekent eigenlijk dat we code schrijven die instructies die we aan een computer geven, 
waarmee we aan de computer vertellen welke pixels we moeten inkleuren (of uitgummen). 
