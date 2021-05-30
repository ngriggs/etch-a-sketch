const container = document.querySelector('.container');
const gridDiv = document.createElement('div');
const resetButton = document.querySelector('.reset')
let cells = document.querySelectorAll('.cell')
gridDiv.classList.add('grid')
container.appendChild(gridDiv)

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function fillGrid(size) {
    for (i = 0; i < size**2; i++) {
        const div = document.createElement('div');
        div.classList.add('cell')
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        });
        gridDiv.appendChild(div)
    }
}

function setDefaultGrid() {
    fillGrid(16);
    setGridSize(16)
}
function clearGrid() {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}
function emptyGrid() {
    var node = document.querySelector('.grid');
    node.querySelectorAll('*').forEach(n => n.remove());
}
function setGridSize(size) {
    gridDiv.style.gridTemplateColumns = "repeat("+size+", 1fr";
    gridDiv.style.gridTemplateRows = "repeat("+size+", 1fr";
}

function changeSize() {
    clearGrid()
    let playerSelection = prompt("Please enter the number of squares you want to add");

    if (playerSelection > 64 || isNaN(playerSelection) || playerSelection < 2) {
        alert("Enter a number from 1-64 range");
        changeSize();
    } else {
        emptyGrid()
        fillGrid(playerSelection)
        setGridSize(playerSelection)
    }
}


