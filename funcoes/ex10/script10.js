function alternar() {
    const texto = document.getElementById('texto');
    let atual = window.getComputedStyle(texto).display;

    if (atual == 'block'){
        texto.style.display = 'none';
    } else{
        texto.style.display = 'block';
    }

};

// 
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btnAlternar').addEventListener("click", alternar);
});