function calcularSalario() {
    let horas = document.getElementById("horas").value;
    let valorHora = document.getElementById("valor-hora").value;

    let salario = horas * valorHora;

    document.getElementById("salario").value = salario;
}