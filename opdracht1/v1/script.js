var content = document.getElementById("content"); // Opslaan van het element content
var button = document.getElementById("show-more"); // Opslaan van het element show-more

// Event van onclick met een functie over of de box open of dicht is
button.onclick = function() { 
    
    if(content.className == "open") { // Checken of de class name open is, als dat zo is 
        // Klap de box dicht
        content.className = "";
        button.innerHTML = "Details"
    } else {
        // Open de box
        content.className = "open";
        button.innerHTML = "Sluit"
    }
    
};

