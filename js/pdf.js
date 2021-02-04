window.onload = function() {
    document.getElementById('generePDF').addEventListener('click', () => {
        kendo.pdf.defineFont({
            //"Roboto": "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900"
            //"DejaVu Sans": "https://cdn.kendostatic.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf"
            'Roboto': 'fonts/Roboto/Roboto-Regular.ttf',
            'Roboto|Bold': 'fonts/Roboto/Roboto-Bold.ttf'
                // 'Verdana|Bold': '/fonts/Verdana_Bold.ttf',
                // 'Verdana|Bold|Italic': '/fonts/Verdana_Bold_Italic.ttf',
                // 'Verdana|Italic': '/fonts/Verdana_Italic.ttf'
        });

        kendo.drawing
            .drawDOM("#imprime", {
                paperSize: "A4",
                margin: { top: "1cm", bottom: "1cm" },
                scale: 0.4,
                template: $("#page-template").html(),
                height: 500
            })
            .then(function(group) {
                kendo.drawing.pdf.saveAs(group, "le_nord_aide_les_aidants.pdf")
            });


    })

}

// window.onload = function() {
//     document.getElementById('generePDF').addEventListener('click', () => {
//         const imprime = this.document.getElementById('imprime');
//         var opt = {
//             margin: 1,
//             filename: 'Le_Nord_aide_les_aidants.pdf',
//             pagebreak: { mode: 'avoid-all', before: '#engagement1' },
//             image: { type: 'jpeg', quality: 0.98 },
//             enableLinks: 'true',
//             html2canvas: { scale: '2', imageTimeout: '0' },
//             jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//         };
//         html2pdf().from(imprime).set(opt).save();

//     })

// }