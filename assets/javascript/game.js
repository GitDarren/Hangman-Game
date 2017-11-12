


//Basic variables to establish a simple framework.  
var userGuess;
var randoWord;
var randoWordArray = [];
var dashesArray;
var winCounter = 0;
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var dashesHTML = document.getElementById('word');


//Hits and Misses Variables//
var hits = [];
var misses = [];
var wrongGuess = 0;
var missesRemaining = 6;

//Couldn't figure out how to manage two word answers so decided on one word movie titles!
var movieTitles = ['JAWS', 'SPACEBALLS', 'FRIDAY', 'BRAZIL', 'VERTIGO', 'BABE', 'NASHVILLE', 'NETWORK', 'GIANT', 'PSYCHO', 'MANHATTAN', 'FARGO', 'AMADEUS', 'GOODFELLAS', 'FEARLESS', 'UNFORGIVEN', 'CASINO', 'CRASH', 'SCARFACE', 'ROCKY', 'PATTON', 'MASH', 'PLATOON', 'BATMAN', 'MEMENTO', 'CHINATOWN', 'LOLITA', 'NOSFERATU', 'SIDEWAYS', 'MAGNOLIA', 'OLDBOY', 'MISERY', 'HARVEY', 'RED', 'MUD'];
//Creates a variable called missesHTML that writes the letter misses from the function below onto the HTML.
var missesHTML = document.getElementById('missesBank');

//Creates a variable called messagesHTML that writes the messages from the function below onto the HTML.
var messageHTML = document.getElementById('messages');

//Tells the game not to do anything until the button is clicked!//
var startButton = document.getElementById("button").addEventListener("click", startGame);




//Starts the Game with no ERRORS! YAY!!!//
//allows javascript to come up with a random number multipied by the index length of movieTitles and rounds it down to a whole integer.  Output is a number.
function startGame() {
    playGame();
    randoWord = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    console.log(randoWord);

    //Creates an array out of the individual letters that are split out from the word. 
    randoWordArray = randoWord.split('');
    console.log(randoWordArray);

    //Maps over each individual letter from the random word array with a dash.
    dashesArray = randoWordArray.map(a => ' _ ');

    console.log("outside is " + dashesArray);

    dashesHTML.innerHTML = dashesArray.join(" ");;

    //I want to start the game with a PUSH PLAY functionality so that user initiates the game on their own.
    //If I can figure it out, I would like a total wins recorded section.
    //This currently starts the game and allows the user to start by pushing any key.

}



//Let the game to start only once the Start the Game button is pushed, but that's not happening right now. 

function playGame() {
    document.onkeyup = function (e) {
        var userGuess = e.key.toUpperCase();
        var startValue = 0;
        console.log(`userGuess is ${userGuess}`);

        //tells the user that if they ch

        //I'm trying to goose a letter that is not in the alphabet, this is "Not a Valid Guess".
        if (alphabet.indexOf(userGuess) === -1) {
            alert("Not a Valid Guess");
        } else {
            console.log("Woohoo!");
            //If the user presses a letter not in the word, they see the letter appear below the dashed word and after 6 faulty tries, they get a message stating "You Lose"
            if (randoWordArray.indexOf(userGuess) === -1) {
                console.log("Bad Guess, but Good Try!");
                misses.push(userGuess);
                console.log(misses);
                missesHTML.innerHTML = misses;
                wrongGuess += 1;
                checkLoss();

            } else {
                console.log("Good Guess!!");
                hits.push(userGuess);
                console.log("Good guesses " + hits);
                randoWordArray.forEach(function (ltr, idx) {
                    console.log("good guess foreach");
                    if (userGuess === ltr) {
                        dashesArray[idx] = `${ltr}`;
                        console.log(`${userGuess} is ${ltr}?`)
                        dashesHTML.innerHTML = dashesArray.join(" ");
                        checkWin();
                        // }
                    }

                })
            }
        }
    };

}


function checkWin() {
    if (dashesArray.indexOf(' _ ') === -1) {
        messageHTML.textContent = "You Win!!";
        winCounter++;
        
            reset();
        
        setTimeout(() => {
        }, 2000);
    }
    document.getElementById('wins').textContent = winCounter;    
    console.log(winCounter);
    
};

function checkLoss() {
    if (wrongGuess === 6) {
        messageHTML.textContent = "You Loss Sucka!!";
        setTimeout(() => {
            reset();
        }, 2000);
    }
};

function reset() {
    hits = [];
    misses = [];
    wrongGuess = 0;
    missesBank.textContent = "";
    messages.textContent = "";
    button.textContent = "Restart the Game?";

    startButton;
};






//What else I still need to do
//Create a way, possibly using While loop, that the game stops when the user wins or loses.  Right now the player can keep on going
//Create a way to tally the wins and losses if possible
//Creae a function that allows the user to restart the game
//Of course still add CSS and way to animate a hangman game as the user plays
//Tell Erik his Patriots suck!


