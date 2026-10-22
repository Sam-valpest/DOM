function sumar() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById("input-salida").value = resultado;
}
    
 function restar() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 - numero2;

    document.getElementById("input-salida").value = resultado;
}

function multiplicar() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;

    document.getElementById("input-salida").value = resultado;
}

function dividir() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 / numero2;

    document.getElementById("input-salida").value = resultado;
}

