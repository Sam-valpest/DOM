function calcularPresupuesto() {
    let num_inv = document.getElementById("num-inv").value;
    let costo_comida = document.getElementById("costo-comida").value;
    let costo_bebida = document.getElementById("costo-bebida").value;
    let costo_decor = document.getElementById("costo-decor").value;
    let costo_musica = document.getElementById("costo-musica").value;
    let propina = document.getElementById("propina").value;
    
    let total_comida = num_inv * costo_comida;
    let total_bebida = num_inv * costo_bebida;
    let total_decor = num_inv * costo_decor;
    let total_musica = num_inv * costo_musica;
    let subtotal = total_bebida + total_comida + total_decor + total_musica;
    let total_propina = (subtotal * propina) / 100;
    let total_general = subtotal + total_propina;
    let costo_inv = total_general / num_inv;

    document.getElementById("total-comida").innerText = total_comida;
    document.getElementById("total-bebida").innerText = total_bebida;
    document.getElementById("total-decor").innerText = total_decor;
    document.getElementById("total-musica").innerText = total_musica;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("total-propina").innerText = total_propina;
    document.getElementById("total-general").innerText = total_general;
    document.getElementById("costo-inv").innerText = costo_inv;
}