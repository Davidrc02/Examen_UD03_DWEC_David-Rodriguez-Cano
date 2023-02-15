function setCookie(cname, cvalue, exdays=1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" +";domain=; secure=False";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


window.addEventListener("load", inicio, false);

function inicio(){
    var cookie = getCookie("idioma")

    if(cookie!=""){
        pagina = cookie + ".html"
        window.open(pagina)
        window.close("ejer_idioma.html")
    }
    else{
        document.getElementById("enlace_es").setAttribute("href", "./es.html")
        document.getElementById("enlace_en").setAttribute("href", "./en.html")
        document.getElementById("enlace_fr").setAttribute("href", "./fr.html")

        var enlaces = document.getElementsByTagName("a")
        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].addEventListener("click", cambiarCookie, false);
        }
    }
}

function cambiarCookie(e){
    var nombre = "idioma"
    switch (this.getAttribute("id")) {
        case "enlace_es":
            var valor = "es"
            break;
        case "enlace_en":
            var valor = "en"
            break;
        case "enlace_fr":
            var valor = "fr"
            break;
    }
    setCookie(nombre, valor)
}