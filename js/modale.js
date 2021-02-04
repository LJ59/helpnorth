const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
const doc = document.querySelector('.js-document');
const focusableElementsArray = [
    '[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
];
const keyCodes = {
    tab: 9,
    enter: 13,
    escape: 27,
};

const open = function(dialog) {
    const focusableElements = dialog.querySelectorAll(focusableElementsArray);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    dialog.setAttribute('aria-hidden', false);
    doc.setAttribute('aria-hidden', true);

    // On sort si on ne peut pas donner le focus
    if (!firstFocusableElement) {
        return;
    }

    window.setTimeout(() => {
        firstFocusableElement.focus();

        // on attrappe le focus dans la modale
        focusableElements.forEach((focusableElement) => {
            if (focusableElement.addEventListener) {
                focusableElement.addEventListener('keydown', (event) => {
                    const tab = event.which === keyCodes.tab;

                    if (!tab) {
                        return;
                    }

                    if (event.shiftKey) {
                        if (event.target === firstFocusableElement) { // shift + tab
                            event.preventDefault();

                            lastFocusableElement.focus();
                        }
                    } else if (event.target === lastFocusableElement) { // tab
                        event.preventDefault();

                        firstFocusableElement.focus();
                    }
                });
            }
        });
    }, 100);
};

const close = function(dialog, trigger) {
    dialog.setAttribute('aria-hidden', true);
    doc.setAttribute('aria-hidden', false);

    // retour du  focus
    trigger.focus();
};

triggers.forEach((trigger) => {
    const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
    const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

    // ouverture de la modale
    trigger.addEventListener('click', (event) => {
        event.preventDefault();

        open(dialog);
    });

    trigger.addEventListener('keydown', (event) => {
        if (event.which === keyCodes.enter) {
            event.preventDefault();

            open(dialog);
        }
    });

    // fermeture de la modale
    dialog.addEventListener('keydown', (event) => {
        if (event.which === keyCodes.escape) {
            close(dialog, trigger);
        }
    });

    dismissTriggers.forEach((dismissTrigger) => {
        const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

        dismissTrigger.addEventListener('click', (event) => {
            event.preventDefault();

            close(dismissDialog, trigger);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === dialog) {
            close(dialog, trigger);
        }
    });

    //pour fermer la modale au click sur un lien de la modale

    dialog.addEventListener("click", function() {
        document.getElementById("dialog").setAttribute('aria-hidden', true);
    });

});

//pour cacher le bouton menu au scroll de fin de page
addEventListener("scroll", function() {

    if ((document.body.scrollHeight - pageYOffset) === innerHeight) {
        //si tu es en bas de la page
        document.querySelector('.menubouton').style.visibility = "hidden"
    } else {
        document.querySelector('.menubouton').style.visibility = "visible";
    }


});