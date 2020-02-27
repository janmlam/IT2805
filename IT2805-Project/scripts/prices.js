function createTable(overskrift, info) {
    for (i=0; i<info.length; i++) { /*Går gjennom ytterste lag (1. lag) i info-array*/
        var table = document.createElement("table"); /*Lager en table*/
        var caption = table.createCaption(); /*Lager caption til table*/
        caption.innerHTML = overskrift[i]; /*Legger tekst til caption fra overskrift array*/
        for (j=0; j<info[i].length; j++) { /*Går gjennom midderste lag (2. lag) i info-array*/
            var row = table.insertRow(); /*Lager en rad for hver tjeneste*/
            for (k=0; k<info[i][j].length; k++) { /*Går gjennom innerste lag (3. lag) i info-array*/
                var cell = row.insertCell(); /*Setter inn en celle for hver "info-boks"*/
                if(k==0) { /*Hvis det er beskrivelsen, får den classname "td1" (så man kan style den i css)*/
                    cell.className = "td1";
                    cell.textContent = info[i][j][k]
                }
                else if(k==1) { /*Hvis det er tiden tjenesten tar, får den classname "td2"*/
                    cell.className = "td2";
                    cell.textContent = info[i][j][k] + " min";
                }
                else {
                    cell.textContent = "fra kr " + info[i][j][k] + ",-";
                }                
            }
        }
        document.getElementById("pricelist_table").appendChild(table); /*Legger table til div i html-dokumentet*/
    }
}

const overskrift = ["Klipp og styling", "Farging", "Striping"]
const informasjon = [
    [
        //  Beskrivelse,       tid, pris
        ["Klipp + vask", 45, 760],
        ["Stuss", 20, 300],
        ["Klipp", 45, 570]
    ],
    [
        ["Farging av ettervekst", 90, 995],
        ["Farge med foliestriper", 120, 1420]
    ],
    [
        ["Foliestripet ettervekst", 105, 1200],
        ["Hettestriper", 105, 1435]
    ]   
]

window.onload = function() {
    createTable(overskrift, informasjon);
};