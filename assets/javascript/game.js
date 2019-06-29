// ID List:
// winsText: How many wins
// currentWord: Current word being guessed
// guessesRemaining: Remaining guess counter 
// lettersGuessed: List of letters guessed for current word

// Function list

// wordCharSearcher(word, char)
// Function that searches input word for the input character


// Declare variables and assign to document elements
var messageDisplayText = document.getElementById('messageDisplayText');
var winsText = document.getElementById('winsText');
var currentWord = document.getElementById('currentWord');
var guessesRemaining = document.getElementById('guessesRemaining');
var lettersGuessed = document.getElementById('lettersGuessed');

// Initialize word selection array
var words = ['hello', 'goodbye', 'test', 'another word'];

// Function List
// Function Definitions
// wordCharSearcher(word, char)
// Function that searches input word for the input character


// Function randomPicker: Selects random word from array and returns
function randomPicker(wordArray) {

    // Select random word from wordArray using Math package to random pick number between minimum and array length (maximum)
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];

    return word;
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

// Function that takes guessWord and currently revealed index and forms string to present to user
function revealFoundLetters(guessword, revealedLetters) {

}




// Game
// Player touches a key to start the game
document.onkeyup = function wordGuessGame() {
    // Display to user that the game has begun
    messageDisplayText = 'The Game has Begun!';
    console.log('The Game has begun');
    
    // Select random word from word Array
    var guessWord = randomPicker(words);
    console.log('The randomword has been selected: ' + guessWord);
    

    // Initialize Game variables
    var guessChances = 12;
    var currentlyRevealedIndex = [];

    // Set guess chances to 0 and display to user the chances and the guess text
    
    guessesRemaining.innerHTML = guessChances.toString();
    messageDisplayText = 'Guess the ' + guessWord.length + ' letter word';

    
    // While guess chances are available & the currently revealed guess word letters are, read keystrokes as character guesses for the word
    while (guessChances > 0 && currentlyRevealedIndex.length < guessWord.length) {
        console.log('Please key in your guess');
        // When key pressed
        document.onkeyup = function(event) {
            console.log('Key pressed : ' + event.key);

            // Search guess word for user pressed letter and output
            var foundIndexes = wordCharSearcher(guessword, event.key);

            if (foundIndexes.length > 0) {
                console.log('You have found ' + foundLetters.length + ' letters in the word!');

                // Add code to reveal found letters based off found
            }
            else {
                console.log('Sorry. Try again!');

                // Reduce guess chances and print to document
                guessChances--;
                guessesRemaining = guessChances;
            }

            

        }
    }

}





