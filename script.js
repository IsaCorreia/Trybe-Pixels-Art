// Reserva, no início do carregamento, a primeira cor que deve receber a classe .selected (preto)
const firstColor = document.getElementById('first-color');

// Atribui a classe
window.onload = firstColor.classList.add('selected');
// Reserva a propriedade background-color da primeira cor
let colorBg = window.getComputedStyle(firstColor).backgroundColor;


// Detecção de clique da paleta de cores
addEventListener('click', selectColor);
// Troca a cor selecionada
function selectColor (event){
    // classList.contains = Checa se na lista de classes, contém 'x' classe.
    // Ref: https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
    if (event.target.classList.contains('color') === true) {
        // remove a classe .selected do elemento que a continha
        const elementoUm = document.querySelector('.selected');
        elementoUm.classList.remove('selected');

        // Adiciona a classe .selected ao elemento selecionado.
        const elementoDois = event.target;
        elementoDois.classList.add('selected');

        // Reserva a background-color do elemento elecionado
        colorBg = window.getComputedStyle(elementoDois).backgroundColor;
    }
}

// Detecção de clique nos pixels
addEventListener('click', paintPixel);
function paintPixel(event){
    // getComputedStyle = Retorna os valores do estilo atribuído via CSS numa stylesheet
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    if (event.target.classList.contains('pixel') === true) {
        let pixel = event.target;
        pixel.style.backgroundColor = colorBg;
    }
}

function clearBoard(){
    let board = document.querySelectorAll('.pixel');
    for (let i = 0; i < board.length; i += 1) {
        board[i].style.backgroundColor = 'white';
    }
}
