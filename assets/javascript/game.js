// ID List:
// winsText: How many wins
// currentWord: Current word being guessed
// guessesRemaining: Remaining guess counter 
// lettersGuessed: List of letters guessed for current word

// Function list

// wordCharSearcher(word, char)
// Function that searches input word for the input character


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

// Game
// Player touches a key to start the game
document.onkeyup = function wordGuessGame() {
    console.log('The Game has begun');
    
    // Select Random word from word Array
    var guessWord = randomPicker(words);
    
}



// below searches through string starting at position index 5

var n = string.indexOf("e", 5);


function revealFoundLetters(guessChar) {

}



// Function that searches input word for the input character
function wordCharSearcher(word, char) {
    // Declare variables
    var lastFoundIndex = 0;
    var listOfFound = [];
    var foundIndex = 0;


    // Iterate through word
    for (var i = 0; i < word.length; i++) {

        // Search word for character char, starting at lastFound Index
        foundIndex = word.indexOf(char, lastFoundIndex);

        // Push the found index to the array of found indices
        listOfFound.push(foundIndex);

        // Assign the found index to the lastFoundIndex variable
        lastFoundIndex = foundIndex;
    }

    return listOfFound;
}