
// função para criar um titulo e paragrafo
function aparecer() {
    const titulo = document.getElementById('titulo');
    const paragrafo = document.getElementById('paragrafo');

    titulo.textContent = 'título';
    paragrafo.textContent = "parágrafo!";
}

// ativar a função ao clicar no btn
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btnAparecer').addEventListener("click", aparecer);
})