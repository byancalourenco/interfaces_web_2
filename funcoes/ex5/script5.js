// função que ensconde o parágrafo
function esconder() {
    const esconder = document.getElementById('esconder');

    esconder.style.display = 'none';
}

// ativar a função ao clicar no btn
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btnEsconder').addEventListener("click", esconder);
})