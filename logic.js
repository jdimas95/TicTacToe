/*global document, window, alert, console, require*/

var turns = 0;

var player1 = {
    isActive: false,
    assignedMarker: 'circle.png',
};

var player2 = {
    isActive: false,
    assignedMarker: 'x.png',
};

var availableSpaces = [];

document.querySelector('#Start').addEventListener('click', initNewGame());

while (turns < 10){
if (player1.isActive === true) {
    console.log('It\'s working');
    turns++;
}
else if (player2.isActive === true){
    console.log('It\'s not working');
    turns++;
}
}

var test = document.querySelector('#s1').id;
console.log(test);

function initNewGame() {
    document.querySelector('#s1, #s2, #s3, #s4, #s5, #s6, #s7, #s8, #s9').src = 'emptySpace.png';
    document.getElementById('player1').classList.add('active');
    player1.isActive = true;
}
