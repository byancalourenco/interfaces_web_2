
// função para mudar a cor do paragrafo para vermelho 
function corParagrafo() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = 'red';
}

// ativar a função ao clicar no btn
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btnTrocarCor').addEventListener("click", corParagrafo);
});