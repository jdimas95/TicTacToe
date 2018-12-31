/*global document, window, alert, console, require*/

var turns = 0;
var selected, element;
var marked;

var player1 = {
    isActive: false,
    assignedMarker: 'circle.png',
};

var player2 = {
    isActive: false,
    assignedMarker: 'x.png',
};



document.querySelector('#Start').addEventListener('click', initNewGame());

function marking (element) {
    if (player1.isActive === true && turns < 9){
        turns++;
        document.querySelector(element).src = player1.assignedMarker;
        marked[element[2]] = 'O';
        checkWin();
        toggleActive();
    }
    else if (player2.isActive === true && turns < 9) {
        turns++;
        document.querySelector(element).src = player2.assignedMarker;
        marked[[element[2]]] = 'X';
        checkWin();
        toggleActive();
    }
}

//var test = document.querySelector('#s1').id;
//console.log(test);

function initNewGame() {
    turns = 0;
    marked = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    document.querySelector('#s0, #s1, #s2, #s3, #s4, #s5, #s6, #s7, #s8').src = 'emptySpace.png';
    document.getElementById('player1').classList.add('active');
    player1.isActive = true;
    
}

function toggleActive(){
    if (player1.isActive === true) {
        player1.isActive = false;
        player2.isActive = true;
        document.querySelector('#player1').classList.remove('active');
        document.querySelector('#player2').classList.add('active');
    }
    else if (player2.isActive === true) {
        player2.isActive = false;
        player1.isActive = true;
        document.querySelector('#player2').classList.remove('active');
        document.querySelector('#player1').classList.add('active');
    }
}

function checkWin(){
    if (marked[0] === marked[1] && marked[1] === marked[2] ||
        marked[3] === marked[4] && marked[4] === marked[5] ||
        marked[6] === marked[7] && marked[7] === marked[8] ||
        marked[0] === marked[3] && marked[3] === marked[6] ||
        marked[1] === marked[4] && marked[4] === marked[7] ||
        marked[2] === marked[5] && marked[5] === marked[8] ||
        marked[0] === marked[4] && marked[4] === marked[8] ||
        marked[2] === marked[4] && marked[4] === marked[6]) {
        turns = 10;
        console.log('You WIN!');
        console.log(marked);
    }
}

