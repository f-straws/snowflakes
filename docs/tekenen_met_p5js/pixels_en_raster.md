<!--
### Pixels en een raster
-->

Het digitale papier kan je, je voorstellen als een verzameling rechthoeken, en die rechthoeken zijn netjes 
geordend in een raster. 

![pixels and raster](images/pixels_raster.png)

De getallen die we meegeven aan `createCanvas` zijn het aantal pixels die we in de breedte willen hebben en het 
aantal pixels dat we in de hoogte willen hebben. Elke pixel heeft een naam, en die naam bestaat uit twee 
nummers. Deze nummers is hun plek in het raster. Het pixel in de linker bovenhoek heeft de nummers `0,0`, 
of `x = 0` en `y = 0`.

![pixels_namen](images/pixels_namen.png)

Zo een rechthoek, of pixel is het kleinste wat we kunnen tekenen, of eigenlijk 
inkleuren. Alle tekeningen die je maakt zijn een combinatie van ingekleurde pixels.
Een tekening maken met p5js betekend eigenlijk dat we code schrijven die instructies geven aan computer, 
of waarmee we aan de computer vertellen welke pixels die moet inkleuren (of uit gummen). 
