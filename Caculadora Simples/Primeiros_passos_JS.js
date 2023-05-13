
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
        document.getElementById('resultado').value = '  Sem valores para Calcular'
    };
}

function Subtrair() {
    var entrada_5 = parseInt(document.getElementById('soma').value);
    var entrada_6 = parseInt(document.getElementById('soma2').value);
    Resultado_Subtrair = (entrada_5 - entrada_6)
    // Usei o ( isNAN ) para verificar se e falso ou verdadeiro a entrada
    Tratamento_3 = isNaN(Resultado_Subtrair);
    // Condição para caso não tenha inserido nenhum numero
    if (Tratamento_3 === false) {
        document.getElementById('resultado').value = Resultado_Subtrair;
    } else {
        // Impressão da mensagem de erro
        document.getElementById('resultado').value = '  Sem valores para Calcular'
    }

}

function Limpar() {
    // Essa funcão pega as 2 entradas e a entrada de resultado e coloca tudo com ('') para ficar vazia
    document.getElementById('resultado').value = '';
    document.getElementById('soma').value = '';
    document.getElementById('soma2').value = '';
}