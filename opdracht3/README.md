# frontend voor designers - opdracht 3

Inleiding:

In de eindopdracht van FVD heb ik voor het eerst met JSON gewerkt. Dit is een type javascript waarbij de javascript niet in zijn geheel iedere keer geladen wordt als de pagina geladen wordt, maar waarbij de Javascript uit een externe bron wordt opgevraagd wanneer de gebruiker een bepaalde acties op de website doet. In mijn website heb ik gebruik gemaakt van JSON om een lijst aan films op te halen. 

Concept:

Ik ben begonnen met het verzinnen van een concept, oftwel wat de gebruiker precies op mijn website kan doen. Het idee is geworden dat de website dient als een bioscoop website waar gebruikers de draaiende films van verschillende bioscopen door Nederland kunnen bekijken. De website bevat ook een coming soon pagina. Deze dient als impressie van de films die er binnenkort aan komen. Voor deze pagina heb ik de slider uit opdracht 2 weer terug laten komen. Hier kunnen gebruikers namelijk klikken door verschillende afbeeldingen van films met hun muis of met je toetsenbord pijltjes.

Ontwerp (States):

Het ontwerp heeft ook 3 states. 
Een zero state waarin de gebruiker nog geen locatie heeft gekozen. 
Een loading state waarin de films geladen worden, en er kort een melding komt te staan met "Laden van films". 
En een final state waarin het lijstje geladen is. 

Proces code + Verschillende versies:

Versie 1: Bij versie 1 heb ik mij vooral gefocust op het correct inladen van de films. De eerste stap hierin is zorgen dat de films in de console te zien zijn. Toen in de console alle 6 films zichtbaar waren met een titel, cover en plot wist ik dat dit goed gegaan was. Op dit moment was dit alleen nog niet zichbaar op de pagina, dus heb ik een main en section gemaakt in de HTML en heb ik doormiddel van "Appendchild" de data gekoppeld. 

Live demo:  [online url](https://bastiaanvanwielink.github.io/frontendvoordesigners/opdracht3/v1)

Versie 2: Voor versie 2 heb ik meerdere iteraties gemaakt. Ik heb een loader toegevoegd, deze had ik in versie 1 er al wel in gezet, maar deze functioneerde toen nog niet helemaal juist. Vervolgens heb ik geprobeerd de slider toe te voegen. Deze stond in eerste moment nog op de index pagina, en heb ik later verhuisd naar zijn eigen "Coming soon" pagina. In deze versie ben ik ook begonnen met het stylen van de pagina. Dit zag er in eerste instantie nog niet zo heel erg strak uit, maar in de eind versie is dit helemaal goed gekomen.

Live demo:  [online url](https://bastiaanvanwielink.github.io/frontendvoordesigners/opdracht3/v2)

Versie eind: In de laatste versie heb ik geprobeerd alles er een stuk beter uit te laten zien, en nog een aantal punten op de i gezet om de code er beter uit te laten zien. Een tweede script heb ik aan gemaakt voor de code van de Slider. Ik liep namelijk tegen het probleem op dat deze niet helemaal goed functioneerd wanneer het direct onder de code van de films stond. Ook heb ik met Javascript een functie geschreven voor het klikken van een bioscoop. De gebruiker ziet namelijk op deze manier welke bioscoop actief is wanneer hij de lijst aan films opvraagt.

Live demo:  [online url](https://bastiaanvanwielink.github.io/frontendvoordesigners/opdracht3/eind)







