
function Soma() {
    var entrada_1 = parseInt(document.getElementById('soma').value);
    var entrada_2 = parseInt(document.getElementById('soma2').value);
    Resultado_Soma = (entrada_1 + entrada_2);
    // Usei o ( isNAN ) para verificar se e falso ou verdadeiro a entrada
    Tratamento_1 = isNaN(Resultado_Soma);
    // Condição para caso não tenha inserido nenhum numero
    if (Tratamento_1 === false) {
        document.getElementById('resultado').value = Resultado_Soma;
    } else {
        // Impressão da mensagem de erro
        document.getElementById('resultado').value = '  Sem valores para Calcular';
    }
}


function Multiplicar() {
    var entrada_3 = parseInt(document.getElementById('soma').value);
    var entrada_4 = parseInt(document.getElementById('soma2').value);
    Resultado_Multiplicar = (entrada_3 * entrada_4)
    // Usei o ( isNAN ) para verificar se e falso ou verdadeiro a entrada
    Tratamento_2 = isNaN(Resultado_Multiplicar);
    // Condição para caso não tenha inserido nenhum numero
    if (Tratamento_2 === false) {
        document.getElementById('resultado').value = Resultado_Multiplicar;
    } else {
        // Impressão da mensagem de erro
        document.getElementById('resultado').value = '  Sem valores para Calcular';
    }

}
function Limpar() {
    alert('Funcionalidade em desenvolvimento...');
}

