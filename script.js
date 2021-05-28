const container = document.querySelector('.container');

const gridDiv = document.createElement('div');
gridDiv.classList.add('grid')
container.appendChild(gridDiv)

for (i=0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i.toString())
    div.classList.add('cell')
    gridDiv.appendChild(div)
}
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';
    });
});


const button = document.querySelector('.reset')
button.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
    const playerSelection = prompt("Please enter the number of squares you want to add");
    for (i=0; i < playerSelection*playerSelection; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', i.toString())
        div.classList.add('cell')
        gridDiv.appendChild(div)
    }

});