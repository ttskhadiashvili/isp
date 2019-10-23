var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


(function titleScroller(text) {
    document.title = text;
    console.log(text);
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 400);
}(" infiNET - თქვენი ინტერნეტ პროვაიდერი "));