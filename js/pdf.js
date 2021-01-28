window.onload = function() {
    document.getElementById('generePDF').addEventListener('click', () => {
        kendo.drawing
            .drawDOM("#imprime", {
                paperSize: "A4",
                margin: { top: "1cm", bottom: "1cm" },
                scale: 0.5,
                pagebreak: { mode: 'avoid-all', before: '#engagement1' },
                height: 500
            })
            .then(function(group) {
                kendo.drawing.pdf.saveAs(group, "le_nord_aide_les_aidants.pdf")
            });
        kendo.pdf.defineFont({
            "Arial": "http://cdn.kendostatic.com/2017.2.621/styles/fonts/Arial/Arial.ttf"
        });

    })

}