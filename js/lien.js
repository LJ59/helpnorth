// Copie URL du site dans le presse-papier
document.getElementById('urlCopy').addEventListener('click', async event => {
    if (!navigator.clipboard) {
        // Clipboard non disponible
        return
    }
    //On récupère URL de la page
    const text = window.location.href;
    var x = document.getElementById("snackbar");
    try {
        await navigator.clipboard.writeText(text)
            //alert("Le lien " + `${text}` + " a été copié ");
        x.className = "show";
        setTimeout(function() { x.className = x.className.replace("show", ""); }, 2000);

    } catch (err) {
        console.error('Echec de la copie du lien', err)
    }
})