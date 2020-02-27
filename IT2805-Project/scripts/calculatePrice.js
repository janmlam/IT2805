
const informasjon = [
    [
        //  Beskrivelse,       tid, pris
        ["Klipp, vask og form", 45, 760],
        ["Lugg", 20, 300],
        ["Vask og skylling", 45, 570]
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


var klipp_1 = document.getElementById("klipp_1");
var klipp_2 = document.getElementById("klipp_2");
var klipp_3 = document.getElementById("klipp_3");
var striper_1 = document.getElementById("striper_1");
var striper_2 = document.getElementById("striper_2");
var farge_1 = document.getElementById("farge_1");
var farge_2 = document.getElementById("farge_2");
var klipp_striper_farge = [klipp_1,klipp_2,klipp_3,striper_1,striper_2,farge_1,farge_2];


function new_listOfPrices(price_list){
    for(var i=0; i<informasjon.length; i++){
        for(var j=0; j< informasjon[i].length; j++){
            price_list.push(informasjon[i][j][2]);
        }
    }
}

function setValue(price_list){ 
    for(var i=0; i<klipp_striper_farge.length; i++){
        klipp_striper_farge[i].value = price_list[i];
    }
}

function updateCost(){
    var chks = document.getElementsByClassName("check");
    var sum = 0;
    for (var i = 0; i < chks.length; i++) { //checks if checkboxes are checked
        if (chks[i].checked == true) { 
            sum += parseInt(klipp_striper_farge[i].value, 10);
        } 
    }
    document.getElementById("price_booking").value = sum;
}

window.onload = function() {
    var price_list = [];
    new_listOfPrices(price_list);
    setValue(price_list);
};

