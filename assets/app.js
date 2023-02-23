

// Prompt Name
var name = prompt("Masukkan nama kamu :");
document.getElementById("nama").innerText = name;

// IMG Slide
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
// Current Time
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}
function display_ct() {
    var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    document.getElementById('c-time').innerHTML = x1;
    display_c();
}
// Message Form
function validateForm(){
    var name = document.forms["message-form"]["f-name"].value;
    var birthDate = document.forms["message-form"]["b-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "" ){
        alert("Please fill the form!!");
        return false;
    }
    
    document.getElementById("sender-f-name").innerText = name;
    document.getElementById("sender-b-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    
    return false;
}