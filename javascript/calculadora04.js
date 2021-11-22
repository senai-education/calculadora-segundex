function calcularEquacaoReduzida() {
    console.log("Entrouuu aqui")
    var m = document.getElementById("m").value;
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var n = xA - (m * yA);
    var y = n > 0 ? `+${n}` : n;
    document.getElementById("display").value = `n = ${m}x ${y} `;
}