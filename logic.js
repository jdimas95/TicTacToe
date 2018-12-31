/*global document, window, alert, console, require*/

var turns = 0;
var selected, element;

var player1 = {
    isActive: false,
    assignedMarker: 'circle.png',
};

var player2 = {
    isActive: false,
    assignedMarker: 'x.png',
};

var marked = [];

document.querySelector('#Start').addEventListener('click', initNewGame());

function marking (element) {
    if (player1.isActive === true && turns < 10){
        turns++;
        document.querySelector(element).src = player1.assignedMarker;
        toggleActive();
    }
    else if (player2.isActive === true && turns < 10) {
        turns++;
        document.querySelector(element).src = player2.assignedMarker;
        toggleActive();
    }
}

//var test = document.querySelector('#s1').id;
//console.log(test);

function initNewGame() {
    turns = 0;
    document.querySelector('#s1, #s2, #s3, #s4, #s5, #s6, #s7, #s8, #s9').src = 'emptySpace.png';
    document.getElementById('player1').classList.add('active');
    player1.isActive = true;
    
}

function toggleActive(){
    if (player1.isActive === true) {
        player1.isActive = false;
        player2.isActive = true;
    }
    else if (player2.isActive === true) {
        player2.isActive = false;
        player1.isActive = true;
    }
}


