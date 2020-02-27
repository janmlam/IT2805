const header = document.getElementById("header");

const PATH = "C:/Users/mathi/Documents/NTNU/IT2085-project"  
var LOGO_PATH = "img/logo.png"
const HOMEPAGE_PATH = PATH.concat("/homepage.html")

// Check if the page is oya.html or solsiden.html. If true, extend path.
const parent = header.parentElement.getAttribute("class")
if (parent == "salonBody") {
    let path_dash = "../"
    LOGO_PATH = path_dash.concat(LOGO_PATH)
}

// Create div-wrapper for the logo
const divLogo = document.createElement('div');
const imageString = "<img src=".concat(LOGO_PATH).concat(" alt='logo of harfin' width='150'> </a>")
const homepageString = "<a href=".concat(HOMEPAGE_PATH).concat(">").concat(imageString)
divLogo.setAttribute("id","headerLogo");

divLogo.insertAdjacentHTML ('afterbegin' , homepageString)
document.getElementById("header").appendChild(divLogo);

// Create div-wrapper for the menu links
const divList = document.createElement('div'); 
const ul = document.createElement('UL'); 
// Add id and class for styling
divList.setAttribute("id", "nav-link-div")
ul.setAttribute("class", "nav-links"); 

const titles = ["Hjem", "Bestill time", "Prisliste", "Om oss", "Våre salonger"] 
const titles_links = ["/homepage.html", "/booking.html", "/pricelist.html", "/about.html", "/salons/oya.html" ] 
const header_id = ["h_homepage", "h_book", "h_pricelist", "h_about", "h_salon"]

// Loops through 'titles':
for (let i = 0; i < titles.length; i++) {
    let li = document.createElement('LI'); 
    li.setAttribute('id', header_id[i]);

    if (titles[i] === "Våre salonger") {
        let p = document.createElement('p')
        let text = titles[i];
        let textnode = document.createTextNode(text);
        p.appendChild(textnode);
        li.appendChild(p);                         
        ul.appendChild(li);

    }
    else {
        let a = document.createElement('a');  
        a.setAttribute('href', PATH.concat(titles_links[i]));   
        let text = titles[i];           
        let textnode = document.createTextNode(text);   
        a.appendChild(textnode)  
        li.appendChild(a);                        
        ul.appendChild(li); 
    }

}

divList.appendChild(ul); 
document.getElementById("header").appendChild(divList);


/* Crate hamburger menu */
var btn = document.createElement('button');
btn.innerHTML = "&#9776;";/*☰*/
btn.setAttribute("id", "btnID")
document.getElementById("header").appendChild(btn);

//we create div containers for hambuer menu usage
var sidebar = document.createElement("div");
sidebar.setAttribute("id", "sidebar");
var sidebar_head = document.createElement("div");
sidebar_head.setAttribute("id", "sbHead");
var sidebar_body = document.createElement("div");
sidebar_body.setAttribute("id", "sbBody");
sidebar.appendChild(sidebar_head);
sidebar.appendChild(sidebar_body);
var overlay = document.createElement("div");
overlay.setAttribute("id", "overlay");

document.getElementById('header').appendChild(sidebar);
document.getElementById("header").appendChild(overlay);

const ulDropDown = document.createElement('ul')
ulDropDown.setAttribute('id', "nav-links-dropdown")

const salonDropdown = ["Øya", "Solsiden"] // Client can add more strings to this array when the business expands
const salon_links = ["/salons/oya.html", "/salons/solsiden.html"]

for (let i= 0; i < salonDropdown.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', PATH.concat(salon_links[i]));
    let text = salonDropdown[i];
    let textnode = document.createTextNode(text);
    a.appendChild(textnode);
    li.appendChild(a);
    ulDropDown.appendChild(li);
}

document.getElementById('h_salon').appendChild(ulDropDown);

//we make a copy of the links, since they will have different style
//so its needed to give each nav-link a unique id
var link_test = document.getElementById("nav-link-div");
var copied = link_test.cloneNode(true);
copied.setAttribute("id","nav-link-sidebar")
document.getElementById("sbBody").appendChild(copied);

//a variable to check if the hamburger menu opened/closed
var check = 0;
//a function which triggers expansion of the hamburger menu
document.getElementById("btnID").addEventListener("click", function() {
    var headerCSS = document.getElementById("header");
    var sidebarCSS = document.getElementById("sidebar");
    var buttan = document.getElementById("btnID");
    var headerLogoCSS = document.getElementById("headerLogo");

    if(check == 0) {
        headerCSS.style.height = "350px";
        sidebarCSS.style.display = "inline-block";
        buttan.style.left = "53.5%";
        buttan.style.top = "-39.5%";
        headerLogoCSS.style.left = "-2%";
        check = 1;
    } else {
        headerCSS.style.height = "auto";
        sidebarCSS.style.display = "none";
        buttan.style.left = "36%";
        buttan.style.top = "-41%";
        headerLogoCSS.style.left = "-7%";
        check = 0;
    }
});
