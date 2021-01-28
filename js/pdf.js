window.onload = function() {
    document.getElementById('generePDF').addEventListener('click', () => {
        kendo.drawing
            .drawDOM("#imprime", {
                paperSize: "A4",
                margin: { top: "1cm", bottom: "1cm" },
                scale: 0.5,
                template: $("#page-template").html(),
                height: 500
            })
            .then(function(group) {
                kendo.drawing.pdf.saveAs(group, "le_nord_aide_les_aidants.pdf")
            });
        kendo.pdf.defineFont({
            // "Arial": "https://cdn.kendostatic.com/2017.2.621/styles/fonts/Arial/Arial.ttf"
            "DejaVu Sans": "http://cdn.kendostatic.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf"
        });

    })

}