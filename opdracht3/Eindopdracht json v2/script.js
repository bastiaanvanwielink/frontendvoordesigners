//script.js
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var main = document.querySelector('main');

var button = document.querySelector("button");


var loader = document.querySelector("#loader");
loader.classList.add('hide');


var section = document.querySelector('section');
console.log(main);


function laadNu() {
    loader.classList.remove('hide');

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { // Dit is een listener
        console.log(request.response);
        loader.classList.add('hide');
        showMovies(request.response);
    }
} //end laadfilms

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

        // Titel

        var filmTitle = document.createElement('h2');
        filmTitle.textContent = movies[i].title;

        // Plot

        var filmPlot = document.createElement('p');
        filmPlot.textContent = movies[i].plot;

        // Cover

        var filmCover = document.createElement('img');
        filmCover.src = movies[i].cover;

        // Data Koppelen

        mySection.appendChild(filmTitle);
        mySection.appendChild(filmPlot);
        mySection.appendChild(filmCover);

        //koppelen van de section aan de main
        //main bestaat al in de html en wordt gedeclareerd
        main.appendChild(mySection);

    } //enfor


}

button.onclick = function () {
    console.log("loader", loader)

    //section.innerHTML = "";
    laadNu();
};






// Carousel JS


var img_container = document.getElementById('img-container'); 
var volgende = document.getElementById('volgende');
var vorige = document.getElementById('vorige');

var images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']

var i = images.length;


    // functie voor de volgende slide

volgende.onclick = ()=> {
    i = (i<images.length) ?(i= i+1):(i=1);
    img_container.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
}
       

    // function voor de vorige slide
    
vorige.onclick = ()=> {
    i = (i<images.length+1 && i>1) ?(i= i-1):(i=images.length);
    img_container.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
}

    // function voor pijltjes op toetsenbord

document.onkeydown = function(event) {
        switch (event.keyCode) {
           case 37:
                i = (i<images.length+1 && i>1) ?(i= i-1):(i=images.length);
                img_container.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
              break;
           case 39:
                i = (i<images.length) ?(i= i+1):(i=1);
                img_container.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
              break;
    }
};
