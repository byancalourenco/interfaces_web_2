
// criando uma função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// criando uma função para mostrar o resultado
function mostrarResultado() {

    // pegando os valores digitados e colocando em constantes
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    // verificar se é válido
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos!';
        return;
    }

    // o valor da cont imc, usa a função e coloca 2 casas decimais  
    const imc = calcularIMC(peso, altura).toFixed(2);

    // criando uma variável para colocar a classificação
    let classificacao = '';

    // verificando os valores e definindo as classificações
    if (imc <= 18.5) {
        classificacao = 'Abaixo do peso';
    } else if ((imc > 18.5) && (imc <= 24.9)) {
        classificacao = 'Peso normal';
    } else if ((imc > 24.9) && (imc <= 29.9)) {
        classificacao = 'Sobrepeso';
    } else if ((imc > 29.9) && (imc <= 34.9)) {
        classificacao = 'Obesidade grau 1';
    } else if ((imc > 34.9) && (imc <= 39.9)) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    // resultado final --> na div
    resultado.textContent = 'Seu IMC é ' + imc + ' com a classificação: ' + classificacao;

    // mostrando a div
    document.getElementById('resultado').style.display = 'block';
}