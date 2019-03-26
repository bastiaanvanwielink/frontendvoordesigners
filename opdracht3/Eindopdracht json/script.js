//script.js
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var main = document.querySelector('main');
console.log(main);

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () { // Dit is een listener
    console.log(request.response);
    showMovies(request.response);
}

function showMovies(moviejson) {
    console.log("moviejson", moviejson);
    var movies = moviejson;

    console.log("hoe lang ben jij?", moviejson.length)
    for (var i = 0; i < movies.length; i++) {
        console.log("node", i)
        console.log("title", movies[i].title)
        console.log("plot", movies[i].plot)
        console.log("cover", movies[i].cover)

        var mySection = document.createElement('section');
        var filmTitle = document.createElement('h2');
        filmTitle.textContent = movies[i].title;

        var filmPlot = document.createElement('p');
        filmPlot.textContent = movies[i].plot;

        var filmCover = document.createElement('img');
        filmCover.src = movies[i].cover;

        mySection.appendChild(filmTitle);
        mySection.appendChild(filmPlot);
        mySection.appendChild(filmCover);
        main.appendChild(mySection);
    }
} // Eind functie

