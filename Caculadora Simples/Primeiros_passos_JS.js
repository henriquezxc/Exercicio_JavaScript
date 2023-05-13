// 2 Entradas de numeros inteiros para verificar quem e o maior dos 2.

function Soma() {
    let entrada_1 = parseInt(document.getElementById('soma').value);
    let entrada_2 = parseInt(document.getElementById('soma2').value);
    Resultado_Soma = (entrada_1 + entrada_2)
    document.getElementById('resultado').value = Resultado_Soma;
    }

function Multiplicar() {
    let entrada_3 = parseInt(document.getElementById('soma').value);
    let entrada_4 = parseInt(document.getElementById('soma2').value);
    Resultado_Multiplicar = (entrada_3 * entrada_4)
    document.getElementById('resultado').value = Resultado_Multiplicar;
}
function Limpar() {
    alert('Funcionalidade em desenvolvimento...');
}

