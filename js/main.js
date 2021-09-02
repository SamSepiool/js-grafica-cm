// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.


var numCelle = parseInt(prompt('Da quante caselle vuoi sia composta la griglia: '));

if (isNaN(numCelle)) {
    alert('Errore, inserisci un numero');
    
} else if (numCelle == 0) {
    alert('Errore, inserisci un numero da 1 a 100');
    
} else {
    confirm('Vuoi che il campo sia grande' + numCelle + 'celle?');
    
}



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