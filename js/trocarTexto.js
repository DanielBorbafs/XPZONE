const textoAlternar = document.getElementById('texto-alternado')
const textos = [">>> Compre", ">>> Venda", ">>> Troque"];
let currentIndex = 0;

const interval = 2000;

setInterval(() => {
    currentIndex = (currentIndex + 1 ) % textos.length;
    textoAlternar.textContent = textos[currentIndex];
}, interval);