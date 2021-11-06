const board = document.querySelector('#board');
const colors = [
  '#f3e5f5',
  '#e1bee7',
  '#ce93d8',
  '#ba68c8',
  '#ab47bc',
  '#9c27b0',
  '#8e24aa',
  '#7b1fa2',
  '#6a1b9a',
  '#4a148c',
  '#ea80fc',
  '#e040fb',
  '#d500f9',
  '#aa00ff',
];
const SQUARE_NUMBER = 440;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(e) {
  const color = getRandomColor();
  e.style.backgroundColor = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  e.style.backgroundColor = '#d1c4e9';
  e.style.boxShadow = `0 0 2px #d1c4e9`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
