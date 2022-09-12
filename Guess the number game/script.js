'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore =  0;



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
   
    //When there is no input
    if(!guess) {
        document.querySelector('.message').textContent = 
        '⛔No number!';

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =  
       '🎉Correct Number!';
       
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.
        backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = 
            highScore;
        }
       //When guess is too high
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent =
            '📈Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 
            '🤯You lose the game!';
            document.querySelector('.score').textContent =
            0
        }
        
        //when guess is too low
    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent =
            '📉Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 
            '🤯You lose the game!';
            document.querySelector('.score').textContent =
            0
        }
    }

});

//Again button
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    document.querySelector('.message').textContent = 
    'Start guessing...';
    document.querySelector('.score').textContent = 
    score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.
    backgroundColor = '#222'
    document.querySelector('body').style.
    document.querySelector('.number').style.width = '15rem';

})
*/

///////////////////////Shorter version////////////////////////////

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore =  0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
   
    //When there is no input
    if(!guess) {
        //document.querySelector('.message').textContent = 
        displayMessage('⛔No number!');

        //When player wins
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent =  
       displayMessage('🎉Correct Number!');
       
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.
        backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = 
            highScore;
        }
    //when guess is wrong
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(document.querySelector('.message').textContent =
            guess > secretNumber ? '📈Too high!': '📉Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = 
            displayMessage('🤯You lose the game!');
            document.querySelector('.score').textContent =
            0
            document.querySelector('body').style.backgroundColor = '#255'

        }
    }          
});

//Again button
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    //document.querySelector('.message').textContent = 
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 
    score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.
    backgroundColor = '#222'
    document.querySelector('body').style.
    document.querySelector('.number').style.width = '15rem';

})