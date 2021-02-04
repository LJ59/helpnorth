// Bouton scroll to top

//On choppe le bouton dans la page
var mybutton = document.getElementById("BacktoTop");
window.onscroll = function() {
    scrollFunction()
};

// Dès que l'on scrolle de 100px on affiche le bouton
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Quand on clique sur le bouton, on revient en haut de la page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}