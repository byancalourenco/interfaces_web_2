
// função para contar os caracteres 
function contarCaracter() {
    const elemento = document.getElementById('inputMensagem');
    var mensagem = elemento.value;
    const divNum = document.getElementById('numCaracteres');

    divNum.textContent = 'A sua mensagem tem '+ mensagem.length + ' caracteres';
}

// 
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btnContar').addEventListener("click", contarCaracter);
});