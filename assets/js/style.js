function clickMe(){
    window.alert("Hello ... My Name is Surya Faturohman");
}



document.getElementById("contact").addEventListener("click", showHideContact);
function showHideContact() {
    document.getElementById("contact").classList.add("a-active");
    document.getElementById("home").classList.remove("a-active");
    document.getElementById("title").innerHTML = '<i class="fa fa-phone-square"></i> Contact';
    document.getElementById("p1").innerHTML = '<i class="fa fa-mobile-phone"></i> Phone : 0838 1142 2863<br><br><i class="fa fa-envelope-square"></i> E-Mail : suryafaturohman@gmail.com';
    document.getElementById("p2").innerHTML = '<i class="fa  fa-address-book"></i> Address : Jl. Dekeng No.49 RT02/RW03 Kel.Genteng Kec.Bogor Selatan Kode POS. 16137';
}

document.getElementById("home").addEventListener("click", showHideHome);
function showHideHome() {
    document.getElementById("home").classList.add("a-active");
    document.getElementById("contact").classList.remove("a-active");    
    document.getElementById("title").innerHTML = '<i class="fa fa-user"></i> About Me';
    document.getElementById("p1").innerHTML = '<i class="fa fa-quote-left fa-2x fa-pull-left fa-border"></i>I am from Bogor and the graduated student of a high school majoring in software engineering class on 2015 and also a graduate of Pakuan University majoring in computer science on 2022.';
    document.getElementById("p2").innerHTML = '<i class="fa fa-quote-left fa-2x fa-pull-left fa-border"></i>My motivation to join RevoU was to return to my former soul and enthusiasm, to code a program and upgrade my skills more in the field of software engineering.';
}