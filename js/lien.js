// Copie URL du site dans le presse-papier
document.getElementById('urlCopy').addEventListener('click', async event => {
    if (!navigator.clipboard) {
        // Clipboard non disponible
        return
    }
    //On récupère URL de la page
    const text = window.location.href;
    try {
        await navigator.clipboard.writeText(text)
        alert("Le lien " + `${text}` + " a été copié ");

    } catch (err) {
        console.error('Echec de la copie du lien', err)
    }
})