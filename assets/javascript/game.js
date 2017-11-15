


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
var wrongGuess = 6;

//Couldn't figure out how to manage two word answers so decided on one word movie titles!
var movieTitles = [
    {
           movieName: 'JAWS',
           poster: '../Hangman-Game/assets/images/jawsposter.jpg'
        }, {
        movieName: 'SPACEBALLS',
        poster: '../Hangman-Game/assets/images/spaceballsposter.jpg'
        }, {
            movieName:  'BABE',
            poster: '../Hangman-Game/assets/images/babemovie.jpg'
    }
       /*'FRIDAY', 'BRAZIL', 'VERTIGO' , 'NASHVILLE', 'NETWORK', 'GIANT', 'PSYCHO', 'MANHATTAN', 'FARGO', 'AMADEUS', 'GOODFELLAS', 'FEARLESS', 'UNFORGIVEN', 'CASINO', 'CRASH', 'SCARFACE', 'ROCKY', 'PATTON', 'MASH', 'PLATOON', 'BATMAN', 'MEMENTO', 'CHINATOWN', 'LOLITA', 'NOSFERATU', 'SIDEWAYS', 'MAGNOLIA', 'OLDBOY', 'MISERY', 'HARVEY', 'RED', 'MUD'*/];
//Creates a variable called missesHTML that writes the letter misses from the function below onto the HTML.
var missesHTML = document.getElementById('missesBank');

//Creates a variable called messagesHTML that writes the messages from the function below onto the HTML.
var messageHTML = document.getElementById('messages');

//Tells the game not to do anything until the button is clicked!//
var startButton = document.getElementById("button").addEventListener("click", startGame);

//Add Pseudocode!!!
var missesRemaining = document.getElementById("missesRemaining");

var index;



//Starts the Game with no ERRORS! YAY!!!//
// Sets the game, randomly selects the word, creates a dashed array the same lenght of the word, and finally removes the commas out of the dashesArray
function startGame() {
    playGame();
    index = Math.floor(Math.random() * movieTitles.length);
    randoWord = movieTitles[index].movieName;
    console.log(randoWord);

    //Creates an array out of the individual letters that are split out from the word. 
    randoWordArray = randoWord.split('');
    console.log(randoWordArray);

    //Maps over each individual letter from the random word array with a dash.
    dashesArray = randoWordArray.map(a => ' _ ');

    console.log("outside is " + dashesArray);

    dashesHTML.innerHTML = dashesArray.join(" ");

    missesBank.textContent = "";
    messages.textContent = "";

    missesRemaining.innerHTML = "Misses Remaining: " + wrongGuess;
     if(document.getElementsByTagName('img').length > 0 ) {
        document.getElementsByTagName('img')[0].style.display = 'none';
     }
    console.log(document.getElementsByTagName('img').length);
}





//Let the game to start only once the Start the Game button is pushed.   

function playGame() {
    document.onkeyup = function (e) {
        console.log(e);
        var userGuess = e.key.toUpperCase();
        if (alphabet.indexOf(userGuess) === -1) {
            return;
        } else {
            var startValue = 0;
            console.log(`userGuess is ${userGuess}`);

            //tells the user that if they choose an non alpha number, "not a Valid Guess"



            //If the user presses a letter not in the word, they see the letter appear below the dashed word//
            if (randoWordArray.indexOf(userGuess) === -1) {
                console.log("Bad Guess, but Good Try!");
                misses.push(userGuess);
                console.log(misses);
                missesHTML.innerHTML = misses;
                wrongGuess -= 1;
                missesRemaining.innerHTML = "Misses Remaining: " + wrongGuess;
                console.log(missesRemaining);


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

//Checks if the user wins the game if they remove all the dashes. 
function checkWin() {
    if (dashesArray.indexOf(' _ ') === -1) {
        messageHTML.textContent = "You Win!!";
        winCounter++;
        var img = document.createElement('img');
        img.setAttribute('src', movieTitles[index].poster);
        document.getElementById('content').appendChild(img);
        reset();
    }
    document.getElementById('wins').textContent = winCounter;
    console.log(winCounter);


    //Updates the Win Counter each time the user wins.  

};
//Checks if the user loses by picking six wrong guesses.  
function checkLoss() {
    if (wrongGuess === 0) {
        messageHTML.textContent = "You Lose Sucka!!";

        // setTimeout(() => {
        reset();
        // }, 2000);
    }
};

//Resets the game and ask the user if they want to play again
function reset() {
    hits = [];
    misses = [];
    wrongGuess = 6;
    button.textContent = "Play Again?";
    startButton;
};






//What else I still need to do
//create a way to not allow for letters to be guessed more than one time
//Still add CSS and way to animate a hangman game as the user plays
//Tell Erik his Patriots suck!


