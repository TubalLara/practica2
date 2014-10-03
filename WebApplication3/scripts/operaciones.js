var datos = [];

function guardar() {
    var n = document.getElementById("txtNombre").value;
    var e = document.getElementById("txtEdad").value;
    var no = document.getElementById("txtNota").value;

    if (isNaN(e) || isNaN(no)) {
        alert("Campos invalidos");
        return;
    }

    datos.push(new Alumno(n, parseInt(e), parseInt(no)));

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtEdad").value = "";
    document.getElementById("txtNota").value = "";

    document.getElementById("lista").innerHTML += "<li>" + n
        + "</li>";
}

function buscar() {

    var n = document.getElementById("txtNombre").value;

    for (var i = 0; i < datos.length; i++) {
        if (datos[i].nombre == n) {
            var r = document.getElementById("resultado");
            r.innerHTML = datos[i].nombre + " " + datos[i].nota
                + " " + datos[i].edad;

            break;
        }

    }
}

function media() {
    var total = 0;
    for (var i = 0; i < datos.length; i++) {
        total += datos[i].nota;
    }
    var r = document.getElementById("resultado");
    r.innerHtml = total / datos.length;

}