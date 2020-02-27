var ICON_PATH = "img/favicon.png"

// Check if the page is oya.html or solsiden.html. If true, extend path.
if (document.getElementById("header").parentElement.getAttribute("class") == "salonBody") {
    let path_dash = "../"
    ICON_PATH = path_dash.concat(ICON_PATH)
}

const tabs = document.getElementsByClassName('favicon');

for (let i=0; i < tabs.length; i++) {
    let tab = tabs[i]
    tab.setAttribute('rel', 'icon')
    tab.setAttribute('href', ICON_PATH)
    tab.setAttribute('type', 'image/x-icon')
}