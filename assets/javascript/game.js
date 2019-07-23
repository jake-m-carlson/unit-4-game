$(document).ready(function() {

    var crystals = {
        blueCrystal:
        {
            color: "blue",
            value: 0
        },
        greenCrystal:
        {
            color: "green",
            value: 0
        },
        orangeCrystal:
        {
            color: "orange",
            value: 0
        },
        redCrystal:
        {
            color: "red",
            value: 0
        },

    },

})

var targetNumber = 0;
var counter = 0;

var wins = 0;
var losses = 0;


// 1- a number is generated when the page loads between 19-120, and each button is given a valueof 1 -12

// 2- user clicks a button to see what value is, value is added to userGuess

// 3- gave ends either of two ways

// a- total guessed = generated number, wins = +1

// b- total guessed = more than generated number, losses = +1

// 4 - game restarts



