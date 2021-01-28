// fonction pour le lien de partage de la page

// function monLien() {
//     var lien = str.link("https://durable.lenord.fr/");
//     //lien.select();
//     lien.execCommand("copy");
//     alert("Le lien a été copié " + `${lien}`);
// }

// function AdvancedCopy() {
//     //the text that is to be copied to the clipboard
//     var leLien = 'https://durable.lenord.fr/';

//     //create our hidden div element
//     var hiddenCopy = document.createElement('div');
//     //set the innerHTML of the div
//     hiddenCopy.innerHTML = leLien;
//     //set the position to be absolute and off the screen
//     hiddenCopy.style.position = 'absolute';
//     hiddenCopy.style.left = '-9999px';
//     alert("Le lien " + `${leLien}` + " a été copié ");

//     //check and see if the user had a text selection range
//     var currentRange;
//     if (document.getSelection().rangeCount > 0) {
//         //the user has a text selection range, store it
//         currentRange = document.getSelection().getRangeAt(0);
//         //remove the current selection
//         window.getSelection().removeRange(currentRange);
//     } else {
//         //they didn't have anything selected
//         currentRange = false;
//     }

//     //append the div to the body
//     document.body.appendChild(hiddenCopy);
//     //create a selection range
//     var CopyRange = document.createRange();
//     //set the copy range to be the hidden div
//     CopyRange.selectNode(hiddenCopy);
//     //add the copy range
//     window.getSelection().addRange(CopyRange);

//     //since not all browsers support this, use a try block
//     try {
//         //copy the text
//         document.execCommand('copy');
//     } catch (err) {
//         window.alert("Votre navigteur ne prend pas en charge cette fonctionnalité. Erreur : " + err);
//     }
//     //remove the selection range (Chrome throws a warning if we don't.)
//     window.getSelection().removeRange(CopyRange);
//     //remove the hidden div
//     document.body.removeChild(hiddenCopy);

//     //return the old selection range
//     if (currentRange) {
//         window.getSelection().addRange(currentRange);
//     }
// }

//document.querySelector('p').addEventListener('click', async event => {
document.getElementById('urlCopy').addEventListener('click', async event => {
    if (!navigator.clipboard) {
        // Clipboard API non disponible
        return
    }
    //const text = event.target.innerText
    const text = 'https://aidant.lenord.fr/'
    try {
        await navigator.clipboard.writeText(text)
        alert("Le lien " + `${text}` + " a été copié ");
        //event.target.textContent = 'https://durable.lenord.fr/ a été copié'
    } catch (err) {
        console.error('Echec de la copie du lien', err)
    }
})
