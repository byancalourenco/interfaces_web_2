
//
function aumentarTexto(){
    const texto = document.getElementById('texto');
    var atual = parseInt(window.getComputedStyle(texto).fontSize);
    var novoFonteSize = atual + 2;

    texto.style.fontSize = novoFonteSize +'px';

}

// 
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btnAumentar').addEventListener("click", aumentarTexto);
});