var date = document.getElementById("date_booking")
var time = document.getElementById("tidspunkt_booking")

// Make it impossible to choose dates before todays date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //Januar er 0
var yyyy = today.getFullYear();
if (dd < 10) {
	dd = '0' + dd
}
if (mm < 10) {
	mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date_booking").setAttribute("min", today);


// Check if all mandatory fields are filled
function validateForm() {
    var name = document.forms["bookings"]["fullt_navn"].value;
    var email = document.forms["bookings"]["epost_adr"].value;
    var tlf = document.forms["bookings"]["tlf"].value;
    var location = document.forms["bookings"]["booking_location"].value;
    var date = document.forms["bookings"]["date_booking"].value;
    var time = document.forms["bookings"]["tidspunkt_booking"].value;

    if (name == "" || email == "" || tlf == "" || date == "" || time == "" || location == "") {
        return false;
    }
    else {
        return true

    }
  } 

function button_function(){
    var form = validateForm()
    if (form == false) {
        return
    } else {
        var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
        myWindow.document.write("Vi ser frem til å se deg  ",time.value," den ", date.value, "!");
    }
}




