
// funçao para exibir uma mensagem, quanto ativada!
function mensagem() {
    alert("Olá, seja bem vindo!");
}


// add um evento que, ao carregar a pag, ele ativa um função que pega o btn e add a função mensagem quando for clicado
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btn').addEventListener("click", mensagem);
});