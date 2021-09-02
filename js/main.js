// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

function buildGrid(row, cols, field) {

    let numTiles = row * cols;

    for (var i = 0; i < numTiles; i++) {
        var tile = document.createElement('div');
        // tile.classList.add('tile');
        field.appendChild(tile);
        tiles.push(tile);
    }

}

var numRows = parseInt(prompt('Da quante righe vuoi sia formato il campo?'))
var numCols = parseInt(prompt('Da quante colonne vuoi sia formato il campo?'))

const grid = document.querySelector('#playground');
var row = 10;
var tiles = []

buildGrid(numRows, numCols, grid);






// console.log(numCelle);

// function makeGrid(num){

//     let tile;
    
//     for (var i = 1; i <= num; i++) {
//         tile = document.getElementById("playground").innerHTML 
//         +=`<div class="caselle">${i}</div>`;
//         tile.classList().add('tile');
//     } 
// }

// makeGrid(numCelle);

// document.getElementById("playground").addEventListener("click",
//    function(event){
//        event.target.classList.toggle("color_switch");
//        alert(event.target.innerHTML);
//    }

// );