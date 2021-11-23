// Reserva, no início do carregamento, a primeira cor que deve receber a classe .selected (preto)
const firstColor = document.getElementById('first-color');

// Atribui a classe
window.onload = firstColor.classList.add('selected');
// Reserva a propriedade background-color da primeira cor
let colorBg = window.getComputedStyle(firstColor).backgroundColor;

// Detecção de clique da paleta de cores
// Troca a cor selecionada
function selectColor(event) {
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
addEventListener('click', selectColor);

// Define o tamanho inicial do canvas
const n = 5;
for (let i = 0; i < n; i += 1) {
  const divLine = document.createElement('div');
  divLine.classList.add('line' + [i]);
  document.getElementById('pixel-board').appendChild(divLine);

  for (let j = 0; j < n; j += 1) {
    const divCol = document.createElement('div');
    divCol.classList.add('pixel');
    document.querySelector('.line' + [i]).appendChild(divCol);
  }
}

// Requisito 10 - teste
// Problema em removeChild() para apagar o canvas anterior
// function canvasSize() {
//   const input = document.querySelector('#board-size');
//   n = input.value;

//   for (let i = 0; i < n; i += 1) {
//     const canvas = document.getElementsByClassName('line');
//     if (document.getElementsByClassName('line')) {
//       canvas.removeChild();
//     }
//   }

//   for (let i = 0; i < n; i += 1) {
//     const divLine = document.createElement('div');
//     divLine.classList.add('line' + [i]);
//     document.getElementById('pixel-board').appendChild(divLine);

//     for (let j = 0; j < n; j += 1) {
//       const divCol = document.createElement('div');
//       divCol.classList.add('pixel');
//       document.querySelector('.line' + [i]).appendChild(divCol);
//     }
//   }
// }

// Detecção de clique nos pixels
function paintPixel(event) {
  // getComputedStyle = Retorna os valores do estilo atribuído via CSS numa stylesheet
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  if (event.target.classList.contains('pixel') === true) {
    const pixel = event.target;
    pixel.style.backgroundColor = colorBg;
  }
}
addEventListener('click', paintPixel);

function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
}
