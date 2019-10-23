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


(function() { var css = document.createElement('link'); css.href = 'https://use.fontawesome.com/releases/v5.1.0/css/all.css'; css.rel = 'stylesheet'; css.type = 'text/css'; document.getElementsByTagName('head')[0].appendChild(css); })();