function adicionarValor(valor) {
    document.getElementById('resultado').value += valor;
}

function calcularResultado() {
    const resultado = eval(document.getElementById('resultado').value);
    document.getElementById('resultado').value = resultado;
}

function limparDisplay() {
    document.getElementById('resultado').value = '';
}
