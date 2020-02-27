
// With this function we change location if the stylist (hairdresser) is chosen. If stylist is Sander
// we set the locationElement.value to oya (locationElement is the booking_location in the HTML code)

function changeLocation(thisSelect) {
    var stylist = thisSelect.value;
    var locationElement = document.getElementById("booking_location");
    if (stylist === "Frida Frisør" || stylist === "Erik Swift" || stylist === "Cece Sharp" || stylist === "Mark Elm") {
        locationElement.value = "Oya"
    }
    else if (stylist === "Sander Arntzen" || stylist === "Mathilde Theisen" || stylist === "Ingrid Øygard" || stylist === "Louise Bauer") {
        locationElement.value = "Solsiden"
    }
    else {
        return
    }
}

// This function will fill in stylist when location is chosen, and also reduce the options in stylist to just
// contain the stylists at that particular salon. 'Var option' is the options for stylist when chosen salon. 

function autofillStylist(thisSelect) {
    var location = thisSelect.value;
    var stylistElement = document.getElementById("booking_stylist");
    if (location === "Solsiden") {
        removeAllChild(stylistElement);
        var option = ["Sander Arntzen", "Mathilde Theisen", "Ingrid Øygard", "Louise Bauer"];
        addOptionsToSelect(option, stylistElement);
    }
    else if (location === "Oya") {
        removeAllChild(stylistElement);
        var option = ["Frida Frisør", "Erik Swift", "Cece Sharp"," Mark Elm"];
        addOptionsToSelect(option, stylistElement);
    }
    else {
        var option = ["Frida Frisør", "Erik Swift", "Cece Sharp"," Mark Elm", "Sander Arntzen", "Mathilde Theisen", "Ingrid Øygard", "Louise Bauer"];
        removeAllChild(stylistElement);
        addOptionsToSelect(option, stylistElement);
    }
}

// Will delete the options, so we in 'autofillStylist' can add new options.

function removeAllChild(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Adds options 

function addOptionsToSelect(options, selectElement) {
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var optionElement = document.createElement("option");
        optionElement.textContent = option;
        optionElement.value = option;
        selectElement.appendChild(optionElement);
    }
}
