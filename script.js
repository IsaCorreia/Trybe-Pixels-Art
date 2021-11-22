// Adicionar Event Listener nos objetos dentro de .color-palette
// adicionar classe .selected no elemento que for clicado
// Remover classe .selected do elemento anterior

const firstColor = document.getElementById('first-color');

// Marca preto como a primeira cor ao iniciar a tela
window.onload = firstColor.classList.add('selected');

// Detecção de clique
addEventListener('click', changeColor);
// Troca a cor selecionada
function changeColor (event){
    console.log(event.target.classList);
    if (event.target.classList.contains('color') === true) {
        const elementoUm = document.querySelector('.selected');
        console.log(elementoUm);
        elementoUm.classList.remove('selected');

        const elementoDois = event.target;
        console.log(elementoDois);
        elementoDois.classList.add('selected')
    }
}
