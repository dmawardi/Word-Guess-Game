// ID List:
// winsText: How many wins
// currentWord: Current word being guessed
// guessesRemaining: Remaining guess counter 
// lettersGuessed: List of letters guessed for current word

// Declare variables and assign to document elements
var winsText = document.getElementById('winsText');
var currentWord = document.getElementById('currentWord');
var guessesRemaining = document.getElementById('guessesRemaining');
var lettersGuessed = document.getElementById('lettersGuessed');


var words = ['hello', 'goodbye', 'test', 'another word'];

function randomPicker(wordArray) {

    // Select random word from wordArray using Math package to random pick number between minimum and array length (maximum)
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];

    return word;
}

// alert("Random word: " + randomPicker(words));

// below searches through string starting at position index 5
var n = string.indexOf("e", 5);

function checkIfLetterInWord(guessChar) {
    
}