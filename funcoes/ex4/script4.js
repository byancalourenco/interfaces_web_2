
// função que cria o alert com o nome digitado 
function nome() {
    const elemento = document.getElementById('inputNome'); // pego o input e coloco na var elemento
    var nome = elemento.value;
    alert('olá, '+ nome +', seja bem vindo(a)!');
}

// ativar a função ao clicar no btn
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnNome').addEventListener("click", nome);
})