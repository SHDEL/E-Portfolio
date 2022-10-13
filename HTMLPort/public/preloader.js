var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 1000);
}

function showPage(){
    document.getElementById("preloader").style.display = "none";
    document.getElementById("Homenavbar").style.display = "block";
    document.getElementById("content").style.display = "block";
}
