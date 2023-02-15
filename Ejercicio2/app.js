window.addEventListener("load", inicio, false);

function inicio(){
    apartado1()

    document.body.appendChild(document.createElement("br"))
    var botonApar2 = document.createElement("input")
    botonApar2.setAttribute("type", "button")
    botonApar2.setAttribute("value", "APARTADO 2")
    document.body.appendChild(botonApar2)
    botonApar2.addEventListener("click", apartado2, false);

    apartado3()
    
    document.body.appendChild(document.createElement("br"))
    var botonApar6 = document.createElement("input")
    botonApar6.setAttribute("type", "button")
    botonApar6.setAttribute("value", "APARTADO 6")
    document.body.appendChild(botonApar6)
    botonApar6.addEventListener("click", apartado6, false);
}

function apartado1(){
    var elemento1 = document.createElement("h1")
    var txtElem1 = document.createTextNode("Examen Unidad 3: Manejo del DOM")
    elemento1.appendChild(txtElem1)

    var primerHijo = document.body.childNodes.item(0)
    document.body.insertBefore(elemento1, primerHijo)
}

function apartado2(){
    var nFIlas = 15
    var nColumnas = 4
    var desea = prompt("Desea cambiar el numero de filas de la tabla?\n (Introduzca 1 para cambiarlo, otra tecla para no hacerlo)")
    if(desea=="1"){
        nFIlas= parseInt(prompt("Introduzca el numero de filas deseadas"))
    }
    crearTabla(nFIlas, nColumnas)
}

function crearTabla(filas, columnas){
    var claves = ["Fabricante", "Modelo", "Color" , "Tamaño"]
    var tabla = document.createElement("table")
    tabla.setAttribute("border", "1")
    tabla.setAttribute("id", "tabla")
    for(let i=0 ; i<filas; i++){
        var fila = document.createElement("tr")
        for(let j=0; j< columnas; j++){
            var columna
            if(i==0){
                columna = document.createElement("th")
                var textoNegrita = document.createElement("strong")
                var txt = document.createTextNode(claves[j])
                textoNegrita.appendChild(txt)
                columna.appendChild(textoNegrita)
            }else{
                columna = document.createElement("td")
                var cajaTexto = document.createElement("textarea")
                cajaTexto.setAttribute("rows", "2")
                cajaTexto.setAttribute("cols", "7")
                columna.appendChild(cajaTexto)
            }
            fila.appendChild(columna)
        }
        tabla.appendChild(fila)
    }
    document.body.appendChild(tabla)
    
    document.body.appendChild(document.createElement("br"))
    var botonApar5 = document.createElement("input")
    botonApar5.setAttribute("type", "button")
    botonApar5.setAttribute("value", "APARTADO 5")
    document.body.appendChild(botonApar5)
    botonApar5.addEventListener("click", apartado5, false);
}

function apartado3(){
    document.body.appendChild(document.createElement("br"))
    var desplegable = document.createElement("select")
    desplegable.setAttribute("id", "desplegable")
    var opciones = ["Xiaomi", "Samsung", "LG" , "Huawei"]
    var enlaces = ["www.mi.com", "www.samsung.com", "www.lg.com", "www.huawei.com"]
    for (let i = 0; i < enlaces.length; i++) {
        var opcion = document.createElement("option")
        opcion.appendChild(document.createTextNode(opciones[i]))
        opcion.setAttribute("value", enlaces[i])
        desplegable.appendChild(opcion)
        
    }
    document.body.appendChild(desplegable)
}

// function apartado4(){
//     var listaEnlaces = document.getElementsByTagName("a")
//     listaEnlaces[0].setAttribute("href", this.getAttribute("value"))
//     listaEnlaces[0].childNodes[0].textContent=this.target.textContent
// }

function apartado5(){
    var parraf = document.createElement("p")
    var txtParraf = document.createTextNode("Indique las características del coche deseadas.")
    parraf.appendChild(txtParraf)
    parraf.setAttribute("style", "text-decoration: underline")
    var tabla = document.getElementById("tabla")
    document.body.insertBefore(parraf, tabla)
}

function apartado6(){
    var enlaces = document.getElementsByTagName("a")
    for(let i=0; i<enlaces.length; i++){
        if(enlaces[i].getAttribute("href")=="http://www.google.com"){
            document.body.removeChild(enlaces[i])
        }
    }
}