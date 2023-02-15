window.addEventListener("load", inicio, false);

function inicio(){
    crearHTML()
    document.getElementById("cajaSuma").value=0
    var columnas = document.getElementsByTagName("td");
    for (let i = 0; i < columnas.length; i++) {
        columnas[i].addEventListener("change", function(){cambiaSuma(columnas)}, false);
    }
    document.getElementById("resetea").addEventListener("click", resetea, false);
}

function crearHTML(){
    var titulo = document.createElement("h1")
    var txtTitulo = document.createTextNode("Ejercicio 3")
    titulo.appendChild(txtTitulo)
    document.body.appendChild(titulo)

    var tabla = document.createElement("table")
    tabla.setAttribute("border", "1")
    cont=1
    for (let i=0; i<2; i++){
        var fila = document.createElement("tr")
        for(let j=0; j<5; j++){
            var columna = document.createElement("td")
            var valor = document.createTextNode(cont)
            cont++;
            var cbox = document.createElement("input")
            cbox.setAttribute("type", "checkbox")
            columna.appendChild(valor)
            columna.appendChild(cbox)
            fila.appendChild(columna)
        }
        tabla.appendChild(fila)
    }

    document.body.appendChild(tabla)

    var parrafo = document.createElement("p")
    var txtParrafo = document.createTextNode("Suma: ")
    parrafo.appendChild(txtParrafo)

    
    var inpSuma = document.createElement("input")
    inpSuma.setAttribute("type", "text")
    inpSuma.setAttribute("id", "cajaSuma")
    inpSuma.setAttribute("readonly", "readonly")

    var inpReset = document.createElement("input");
    inpReset.setAttribute("type", "reset")
    inpReset.setAttribute("id", "resetea")
    inpReset.setAttribute("value", "resetear")

    
    parrafo.appendChild(inpSuma)
    parrafo.appendChild(inpReset)
    document.body.appendChild(parrafo)
}

function cambiaSuma(columnas){
    var seleccionadas=[]
    for(let i=0; i<columnas.length; i++){
        if(columnas[i].childNodes[1].checked==true){
            seleccionadas.push(columnas[i])
        }
    }
    sumar(seleccionadas)
}

function sumar(seleccionadas){
    var suma=0
    for(let i=0; i<seleccionadas.length; i++){
        let valor=seleccionadas[i].childNodes[0].textContent
        suma+=parseInt(valor)
    }
    document.getElementById("cajaSuma").value=suma
}

function resetea(){
    var columnas = document.getElementsByTagName("td");
    for (let i = 0; i < columnas.length; i++) {
        columnas[i].childNodes[1].checked=false;
    }
    document.getElementById("cajaSuma").value=0
}