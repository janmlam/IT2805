var pageFooter = document.getElementById("footer");

var div_info = document.createElement('div');
div_info.setAttribute("id","box_one");

var footer_ul = document.createElement('ul');
footer_ul.setAttribute("id", "footer_list");


var info = ['Kontaktinformasjon','Øya: +47 725 57 300', 'Solsiden: +47 725 57 400'];
for (var i=0; i < info.length; i++){
    var info_li = document.createElement('li');
    var info_text = document.createTextNode(info[i]);
    info_li.appendChild(info_text);
    footer_ul.appendChild(info_li);
    info_li.setAttribute("class", "text_info");
}




div_info.appendChild(footer_ul);
pageFooter.appendChild(div_info);

var sendMail = document.getElementById("footer_list").lastChild;
sendMail.insertAdjacentHTML("afterend", "<li class='text_info'><a href='mailto:kundeservice@hårfin.no'>kundeservice@hårfin.no</a> </li>");
var div_copyright = document.createElement('div');
div_copyright.setAttribute("id","box_two");
var para_copyright = document.createElement('P');
var text_paraCopyright = document.createTextNode('Opphavsrett \u00a9 Hårfin. Alle rettigheter reservert.');


para_copyright.appendChild(text_paraCopyright);
div_copyright.appendChild(para_copyright);
pageFooter.appendChild(div_copyright);
