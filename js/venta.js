function calcularPrecio() {
    const iva = 19;

    let prdt_nombre = document.getElementById("prdt-nombre").value;
    let prdt_cantidad = parseFloat(document.getElementById("prdt-cant").value);
    let prdt_precio = parseFloat(document.getElementById("prdt-precio").value);

    let subtotal = prdt_cantidad * prdt_precio;
    let descuento = 0;

    let total_iva = (subtotal * iva) / 100;

    if (prdt_cantidad > 5) {
        descuento = 5;
    }

    let total_descuento = (subtotal * descuento) / 100;

    let total_pagar = subtotal + total_iva - total_descuento;

    // Mostrar resultados

    document.getElementById("subtotal").value = subtotal;
    document.getElementById("total-iva").value = total_iva;
    document.getElementById("total-descuento").value = total_descuento;
    document.getElementById("total-pagar").value = total_pagar;

}