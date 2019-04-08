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