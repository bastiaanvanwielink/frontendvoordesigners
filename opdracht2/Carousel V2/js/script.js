var img_container = document.getElementById('img-container'); 
var next = document.getElementById('next');
var prev = document.getElementById('prev');

var images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']

var i = images.length;


    // functie voor de volgende slide

next.onclick = ()=> {
    i = (i<images.length) ?(i= i+1):(i=1);
    img_container.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
}
       

    // function voor de vorige slide
    
prev.onclick = ()=> {
    i = (i<images.length+1 && i>1) ?(i= i-1):(i=images.length);
    img_container.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
}