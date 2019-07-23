$(document).ready(function () {

// 1- a number is generated when the page loads between 19-120, and each button is given a valueof 1 -12
    // Numbered Arrays
        // Random computer var. array
        var rand = [];

        for (var r = 19; r < 121; r++) {
            rand.push(r);
        }
        console.log(rand); //--- it works!


        // crystal number arrays
        var crystals = [];
        for (var c = 1; c < 13; c++) {
            crystals.push(c);
        }
        console.log(crystals); //--- it works!

    // Global variables
        // random numbers/ var chosen by computer
        var randNumber; 
        var crystalNumbers = [];
        var c1;
        var c2;
        var c3;
        var c4;
        console.log(crystalNumbers);
        console.log(c1);
        // users scores and guesses
        var userScore = 0;
        var wins = 0;
        var losses = 0;
        console.log(userScore);

// 2- user clicks a button to see what value is, value is added to userGuess
    // functions


// 3- gave ends either of two ways

// a- total guessed = generated number, wins = +1

// b- total guessed = more than generated number, losses = +1

// 4 - game restarts


});