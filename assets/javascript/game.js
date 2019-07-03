// ID List:
// winsText: How many wins
// currentWord: Current word being guessed
// guessesRemaining: Remaining guess counter 
// lettersGuessed: List of letters guessed for current word

// Declare variables

// Initialize word selection array
var words = ['Pulp Fiction', 'The Shawshank Redemption', 'The Lion King', 'Titanic', 'The Big Lebowski', 'Before Sunrise', 'Jurassic Park', 'Toy Story', 'The Matrix', 'Schindlers List', 
        'Fight Club', 'Friday', 'Clueless', 'Terminator 2', 'Goodfellas', 'LA Confidential', 'Saving Private Ryan', 'Scream', 'The Iron GIant', 'Hoop Dreams', 'Rushmore', 'Good Will Hunting',
            'The Silence of the Lambs'];

// Declare empty string
var displayString = "";
var wins = 0;
var loses = 0;
var guessWord = "";



// Function List
// Takes input character key and determines if it's successful or not
// Also, checks if 
function takeCharacterGuess(pressedKey) {

    console.log('Key pressed: ' + pressedKey);

    // If it's determined the key has already been pressed and added to the list, tell user to repeat; else continue
    if (lettersAlreadyGuessed.includes(pressedKey)) {
        document.getElementById('messageDisplayText').innerHTML = 'Sorry, you have already entered that!';

    } else {

        // Update the char guesses display for user
        lettersAlreadyGuessed.push(pressedKey);
        console.log('lettersAlreadyGuessed: ' + lettersAlreadyGuessed);
        document.getElementById('lettersGuessed').innerHTML = lettersAlreadyGuessed.forEach(function(element) {
            console.log(element);
            element.toUpperCase();
        });;



        // Search guess word for user pressed letter and output
        var foundIndexes = wordCharSearcher(guessWord, pressedKey);

        // If there were results found and they are not within the currently revealed
        if (foundIndexes.length > 0) {
            // Reveal found letters based off typed list to user
            var displayedWord = revealFoundLetters(guessWord, lettersAlreadyGuessed);
            document.getElementById('currentWord').textContent = displayedWord;


            // Add code for checking if all letters are found for a win
            if (guessWord === displayedWord) {
                console.log('Congratulations! You uncovered the word! 1 point for you!');

                // Display win text, increment wins and display
                document.getElementById('messageDisplayText').innerHTML = 'You won! Prepare for the next word!';
                wins++;
                document.getElementById('winsText').innerHTML = wins;

                // Reset Game after 3 seconds
                setTimeout(function(){
                    resetGame();
                }, 3000);
                
            }

            // If no results are found
        } else {
            console.log('Sorry. Try again!');

            // Reduce guess chances and print to document
            guessChances--;
            document.getElementById('guessesRemaining').innerHTML = guessChances;

            // Add code to check if guesses remaining are at 0
            if (guessChances === 0) {
                console.log('Guesses are at 0! You have lost!');

                // Display lose text, increment loses and display
                document.getElementById('messageDisplayText').innerHTML = 'You have lost! Next word incoming!';
                loses++;
                document.getElementById('loseText').innerHTML = loses;

                // Reset Game after 3 seconds
                setTimeout(function(){
                    resetGame();
                }, 3000);
            }
        }
    }
}

// Function randomPicker: Selects random word from array
// returns string
function randomPicker(wordArray) {
    // Select random word from wordArray using Math package to random pick number between minimum and array length (maximum)
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];

    return word;
}

// A function taken from Stack Overflow that takes input of milliseconds and pauses the code


// Function that searches input word for the input character
// Returns array of integer indices of matching letters
function wordCharSearcher(word, char) {
    // Declare variables
    var listOfFoundIndices = [];

    console.log('Word: ' + word + '. word.length: ' + word.length);

    // Iterate through word
    for (var i = 0; i < word.length; i++) {

        // If a match is found push to the listOfFoundIndices array
        if (word[i].toLowerCase() === char) {
            listOfFoundIndices.push(i);
        }
    }
    // Return array of indices
    return listOfFoundIndices;
}

// Function that takes guessWord and list of unique already typed letters and forms string to present to user
function revealFoundLetters(guessword, revealedLetters) {
    var displayString = '';


    // Iterates through boolean array (revealedLetters) 
    for (var i = 0; i < guessword.length; i++) {

        // Append string if string found
        if (guessWord[i] === ' ') {
            displayString = displayString + ' ';
        }
        // Append guessword letter to display string if the letter is included
        else if (revealedLetters.includes(guessword[i].toLowerCase())) {
            displayString = displayString + guessword[i];
            // else, add an underscore
        } else {
            displayString = displayString + '_';
        }

    }
    console.log(displayString);
    return displayString;
}

// Resets the game without removing wins: Resets all variables and user text
function resetGame() {
    // Reset guesses & display
    guessChances = 5;
    document.getElementById('guessesRemaining').innerHTML = guessChances;
    console.log('Setting guesses to 5');

    // Resets word and letters guessed and displays to users
    guessWord = randomPicker(words);
    lettersAlreadyGuessed = [];
    document.getElementById('lettersGuessed').innerHTML = "";

    // reveal letters as underscores
    document.getElementById('currentWord').innerHTML = revealFoundLetters(guessWord, lettersAlreadyGuessed);

    // Display to user the number of letters of the guess word and the guess text
    var messageText = 'Guess the ' + guessWord.length + ' letter word';
    console.log(messageText);
    document.getElementById('messageDisplayText').innerHTML = messageText;

}

// END OF FUNCTION LIST
// 

// Game
// Player touches a key to start the game
document.onkeyup = function wordGuessGame() {
    // Display to user that the game has begun
    document.getElementById('messageDisplayText').innerHTML = 'The Game has Begun!';

    // Resets the game
    resetGame();
    console.log('The randomword has been selected: ' + guessWord);



    console.log('Please key in your guess');

    // 
    //  Waiting on user
    //     

    // Given a key press from the user
    document.onkeyup = function (event) {
        // Take the character guess and process success/failure and whether guesses remain
        takeCharacterGuess(event.key);
    }

}