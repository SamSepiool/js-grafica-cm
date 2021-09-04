// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.



// FUNCTIONS

function setGrid(num, field){
    
    
    for(var i = 1; i <= num ; i++){
        let tile = document.createElement('div');
        field.appendChild(tile)
        tile.innerHTML = [i]
    }
}

// variabili principali
var numCelle = parseInt(prompt('Da quante celle vuoi sia formato il campo?'));
var playGround = document.getElementById('playground');

setGrid(numCelle, playGround)

playGround.addEventListener('click', 
function(event) {
    event.target.classList.toggle('click_bg_switch');
    alert(event.target.innerHTML);
}
)
