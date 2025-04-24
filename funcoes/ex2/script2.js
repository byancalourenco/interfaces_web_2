
// funçao que cria uma constante para o texto e muda ele
function trocarTexto() {
    const texto = document.getElementById('texto');
    texto.textContent = 'Texto trocado :D';
}

// ativar a função ao clicar no btn
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btnTrocar').addEventListener('click', trocarTexto);
});

