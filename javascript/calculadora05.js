function calcularPosicaoDasRetas() {
    var firstM = Number(document.getElementById("firstM").value);
    var firstN = Number(document.getElementById("firstN").value);
    var secundM = Number(document.getElementById("secundM").value);
    var secundN = Number(document.getElementById("secundN").value);

    var resultado = "";

    if (firstM === secundM) {
        resultado += " Paralela";
        if (firstN === secundN) {
            resultado += " Coincidente"
        }
    } else {
        resultado += " Concorrente";
        if ((firstM * secundM) == -1) {
            resultado += " Perpendicular"
        }
    }
    document.getElementById("display").value = `${resultado}`
}