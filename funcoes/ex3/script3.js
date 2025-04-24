
// função que pega a cor de fundo e deixa vermelho  
function CorFundo() {
    const fundo = document.body;
    fundo.style.background = 'blue';
}

// ativar a função ao clicar no btn
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btnCorFundo').addEventListener('click', CorFundo);
});
