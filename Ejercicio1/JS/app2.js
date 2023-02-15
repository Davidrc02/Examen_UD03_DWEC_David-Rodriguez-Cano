window.addEventListener("load", inicio, false);

function inicio(){
    var cookie = getCookie("idioma")
    var locacion = window.location+""
    var pag = locacion.split("/")
    var url = pag[pag.length -1]
    if(cookie==""){
        let pagina = cookie + ".html"

        window.open("ejer_idioma.html")
        window.close(pagina)
    }
    else if(cookie != url.split(".")[0]){
        let pagina = cookie + ".html"
        window.open(pagina)
        window.close(url)
    }
    else{
        document.getElementById("btnBorrar").addEventListener("click", borrar, false)
    }
}

function borrar(){
    var c = document.cookie
    deleteCookie(c)
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

function setCookie(cname, cvalue, exdays=1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" +";domain=; secure=False";
}

function deleteCookie(c){
    var cookie = getCookie("idioma")

    pagina = cookie + ".html"
    
    setCookie("idioma", "", 0)

    window.open("ejer_idioma.html")
    window.close(pagina)
}