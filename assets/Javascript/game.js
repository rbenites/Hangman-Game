
//This will hold an list of words to guess in the game
var wordsToGuess = ["abc"];
//Global variables//
//variables to hold score count
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
//Empty arras to store letters guessed
var lettersGuessed = [];
var correctLetters = [];
var wrongLetters = [];
//Empty array to store the word to guess
var randomWord = [];
//Empty array for dashes
var word = [];


//When the enter key is pressed a new word is slected and the Current Word section is replaced with dashes
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        word = [];
        var lettersGuessed = [];
        var correctLetters = [];
        var wrongLetters = [];
        start();
    }
}, false);

//function to start and re-start the game when needed
function start() {

    //Randomizer to pick random a word from wordsToGuess array
    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    console.log(randomWord);

    //This adds the dashes for the number of letters of the picked word
    for (var i = 0; i < randomWord.length; i++) {
        word[i] = "_";
    }
    console.log(word);
    document.getElementById("current-word").innerHTML = word;


    //when the player presses a key well run some code
    document.onkeyup = function (event) {

        //To determine what key is pressed and save it to lettersGuessed
        lettersGuessed.push(event.key);
        //Print letters guessed to page
        document.getElementById("guessed-letters").innerHTML = lettersGuessed;
        console.log(lettersGuessed);

        //check if letter guessed is equal to any of the letters in the word
        /*
        for (var i = 0; i < randomWord.length; i++) {
            word.push(randomWord.charAt(i));
        }
        */
        for (var i = 0; i < word.length; i++) {
            if (randomWord == lettersGuessed) {
                correctLetters.push(lettersGuessed);
            } else {
                wrongLetters.push(lettersGuessed);
            }

        }
        console.log(wrongLetters);
        console.log(correctLetters);

        //subtract from guesses remaining and display new value
        guessesRemaining--;
        document.getElementById("guesses").innerHTML = guessesRemaining;
        console.log(guessesRemaining);


        /*
        guessesRemaining--;
        document.getElementById("guesses").innerHTML = guessesRemaining;
        console.log(guessesRemaining);
        */
    };
}

//each time the player guesses a correct letter
    //current word should update

//each time the player wins

//each time the player looses