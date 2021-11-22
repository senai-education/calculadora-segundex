function calcularDistanciaPontoReta() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var nA = Number(document.getElementById("nA").value);
    var nB = Number(document.getElementById("nB").value);
    var nC = Number(document.getElementById("nC").value);

    var superior = (nA * xA) + (nB * yA) + nC;
    var inferior = Math.sqrt((Math.pow(nA, 2) + Math.pow(nB, 2)));
    var resultado = Math.abs(superior / inferior);

    document.getElementById("display").value = `D = ${resultado}`;
}