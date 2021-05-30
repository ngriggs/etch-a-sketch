const container = document.querySelector('.container');

const gridDiv = document.createElement('div');
gridDiv.classList.add('grid')
container.appendChild(gridDiv)


for (i=0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i.toString())
    div.classList.add('cell')
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';
    });
    gridDiv.appendChild(div)
}


const button = document.querySelector('.reset')
button.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell')
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
    const playerSelection = prompt("Please enter the number of squares you want to add");

    var node = document.querySelector('.grid');
    node.querySelectorAll('*').forEach(n => n.remove());

    for (i=0; i < playerSelection*playerSelection; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', i.toString())
        div.classList.add('cell')
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'blue';
        });
        gridDiv.appendChild(div)
    }
    let newSize = 80 * 16 / playerSelection
    gridDiv.style.gridTemplateColumns = "repeat("+playerSelection+", "+newSize+"px)";
    gridDiv.style.gridTemplateRows = "repeat("+playerSelection+", "+newSize+"px)";

});
