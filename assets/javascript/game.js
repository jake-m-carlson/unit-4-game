$(document).ready(function () {

    var gems = {
        blueGem:
        {
            color: "blue",
            value: 0
        },
        greenGem:
        {
            color: "green",
            value: 0
        },
        orangeGem:
        {
            color: "orange",
            value: 0
        },
        redGem:
        {
            color: "red",
            value: 0
        },
    };

    var targetNum = 0;
    var counter = 0;
    console.log(targetNum);
    var wins = 0;
    var losses = 0;
    console.log(wins);

    function start() {
        
    }



    // 1- a number is generated when the page loads between 19-120, and each button is given a valueof 1 -12

    // 2- user clicks a button to see what value is, value is added to userGuess

    // 3- gave ends either of two ways

    // a- total guessed = generated number, wins = +1

    // b- total guessed = more than generated number, losses = +1

    // 4 - game restarts












})











// failed attempt at js ---------
// $(document).ready(function() {

//     // functions
//     // Numbered Arrays
//         // Random computer var. array
//         var rand = [];

//         for (var r = 19; r < 121; r++) {
//             rand.push(r);
//         }
//         // console.log(rand); 
//         //--- it works!


//         // crystal number arrays
//         var crystals = [];
//         for (var c = 1; c < 13; c++) {
//             crystals.push(c);
//         }
//         // console.log(crystals); 
//         //--- it works!

//     // Global variables
//         // random numbers/ var chosen by computer
//         var randNumber; 
//         var crystalNumbers = [];
//         var c1;
//         var c2;
//         var c3;
//         var c4;
//         console.log(crystalNumbers);
//         console.log(c4);
//         // users scores and guesses
//         var userScore = 0;
//         var wins = 0;
//         var losses = 0;
//         // console.log(userScore);
//     function pickRandomNumber(arr){

//         var x = arr[Math.floor(Math.random() * arr.length)];
//         randNumber = x;
//         $("#targetNumber").html(randNumber);
//         console.log(randNumber);
//     }

//     function pickRandomCrystals(arr) {

//     }
// });


