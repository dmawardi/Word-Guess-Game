// ID List:
// winsText: How many wins
// currentWord: Current word being guessed
// guessesRemaining: Remaining guess counter 
// lettersGuessed: List of letters guessed for current word

// Declare variables

// Initialize word selection array
var words = ['hello', 'goodbye', 'test', 'another word'];

// Initialize guess chances
var guessChances = 12;




// Function List
// Function Definitions
// wordCharSearcher(word, char)
// Function that searches input word for the input character


// Function randomPicker: Selects random word from array
// returns string word
function randomPicker(wordArray) {
    // Select random word from wordArray using Math package to random pick number between minimum and array length (maximum)
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];

    return word;
}

// Function that searches input word for the input character
// Returns array of integer indices of matching letters
function wordCharSearcher(word, char) {
    // Declare variables
    var listOfFoundIndices = [];

    console.log('Word: ' + word + '. word.length: ' + word.length);

    for (var i = 0; i < word.length; i++) {

        console.log('word[i]: ' + word[i]);

        if (word[i].toLowerCase() === char) {
            listOfFoundIndices.push(i);
            console.log('Pushed to list of Indices: ' + i);
        }
    }

    return listOfFoundIndices;
}

    // Synchronizes results of current search with all previous search results
    function foundListSync(currentlyRevealedIndex, listOfFoundIndices) {
        for (var i = 0; i > listOfFoundIndices.length; i++) {
            // Assign true to the boolean positions found in the listOfFoundIndices list
            currentlyRevealedIndex[listOfFoundIndices[i]] = true;
        }
        return currentlyRevealedIndex;
    }

    // Function that takes guessWord and currently revealed index and forms string to present to user
    function revealFoundLetters(guessword, revealedLetters) {
        // Declare empty string
        var displayString = "";

        // Iterates through boolean array (revealedLetters) 
        for (var i = 0; i < revealedLetters.length; i++) {

            // If the current index being cycled through is a true value, reveal the true guessword 
            if (revealedLetters[i] === true) {
                displayString = displayString + guessword[i];
            }
            // Else, if false, concatenate an empty underscore
            else {
                displayString = displayString + "_";
            }
        }
        return displayString;
    }

    // Reset the game and guesses to prepare to start the game. Display to player guesses
    console.log('Setting guesses to 12');
    document.getElementById('guessesRemaining').innerHTML = guessChances.toString();


    // Game
    // Player touches a key to start the game
    document.onkeyup = function wordGuessGame() {

        // Display to user that the game has begun
        document.getElementById('messageDisplayText').innerHTML = 'The Game has Begun!';
        console.log('The Game has begun');

        // Select random word from word Array
        var guessWord = randomPicker(words);
        console.log('The randomword has been selected: ' + guessWord);

        // Display to user the number of letters of the guess word and the guess text
        var messageText = 'Guess the ' + guessWord.length + ' letter word';
        console.log(messageText);
        document.getElementById('messageDisplayText').innerHTML = messageText;

        console.log('Please key in your guess');

        document.onkeyup = function (event) {
            console.log('Key pressed : ' + event.key.toLowerCase());

            // Search guess word for user pressed letter and output
            var foundIndexes = wordCharSearcher(guessWord, event.key.toLowerCase());

            console.log(foundIndexes);

            if (foundIndexes.length > 0) {
                console.log('You have found ' + foundIndexes.length + ' letters in the word!');

                // Add code to reveal found letters based off found
            } else {
                console.log('Sorry. Try again!');

                // Reduce guess chances and print to document
                guessChances--;
                document.getElementById('guessesRemaining').innerHTML = guessChances;
            }
        }

    }