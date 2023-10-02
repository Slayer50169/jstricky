function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let win = false;
    let guesses = 0;
    return function(guess){
        if(win){
            console.log("The game is over you already won!")
            return;
        } 
        guesses++;
        if(guess === answer){
            console.log(`You win! It took you ${guesses} guesses!`);
        } else if(guess < answer){
            console.log(`${guess} is too low!`);
        } else{
            console.log(`${guess} is too high!`);
        }
    }
}

module.exports = { guessingGame };
