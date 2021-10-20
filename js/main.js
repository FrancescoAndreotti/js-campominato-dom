const selectDifficolta = document.getElementById("difficolta");
const btnStart = document.getElementById("start-btn");
const boxContainer = document.querySelector(".box-container");

btnStart.addEventListener("click", function () {
    const level = selectDifficolta.value;

    const totalCells = getCellsNum(level);


    const bombe = generaBombe(totalCells);
    generateGrid(totalCells);
    console.log(bombe);

});


function onSingleClick() {

    /* non riesco a passare l'array che contiene le bombe a questa funzione */
    const bombe = [1, 4, 37, 28];
    const numCellaCorrente = parseInt(this.textContent);
    console.log(numCellaCorrente);
    if (bombe.includes(numCellaCorrente)) {
        this.classList.add("bomb");
    } else {
        this.classList.add("active");
    }
}

function getCellsNum(level) {
    let result;

    switch (parseInt(level)) {
        case 1:
            result = 100;
            break;
        case 2:
            result = 81;
            break;
        case 3:
            result = 49;
            break;
    }

    return result;
}



function generateGrid(totalCells) {
    boxContainer.innerHTML = "";

    const perRowCells = Math.sqrt(totalCells);
    const cellSize = 100 / perRowCells;


    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("box");
        cell.style.width = cellSize + "%";
        cell.style.height = cellSize + "%";
        cell.textContent += `${i + 1}`;
        cell.addEventListener("click", onSingleClick);
        boxContainer.append(cell);
    }
}



/* function singleCellClick() {
    this.classList.toggle("active");
} */


function generaBombe(totalCells) {
    const arrayBombe = [];
    console.log(totalCells);

    for (let i = 0; i < 16;) {


        const nuovaBomba = Math.ceil(Math.random() * parseInt(totalCells));

        if (arrayBombe.indexOf(nuovaBomba) === -1) {
            arrayBombe.push(nuovaBomba);
            i++;
        }

    }

    return arrayBombe;

}

