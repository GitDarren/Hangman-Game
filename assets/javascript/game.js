


//Basic variables to establish a simple framework.  A user guess, the use of regular expressions, and the var alphabet
var userGuess;
var regExLetters = /^[a-z]+$/i;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];


//Hits and Misses Variables//
var hits = [];
var misses = [];
var wrongGuess = 0;

//Still need to come up with a cohesive theme and add new words to extend the game//
var movieTitles = ['the producers', 'the twelve chairs', 'blazing saddles', 'young frankenstein', 'silent movie', 'high anxiety', 'history of the world', 'to be or not to be', 'spaceballs'];

//allows javascript to come up with a random number multipied by the index length of movieTitles and rounds it down to a whole integer.  Output is a number.
var randoWord = movieTitles[Math.floor(Math.random() * movieTitles.length)];
console.log(randoWord);

//Creates an array out of the individual letters that are split out from the word. 
var randoWordArray = randoWord.split('');
console.log(randoWordArray);

//Maps over each individual letter from the random word array with a dash.
var dashesArray = randoWordArray.map(a=>' _ ');
//     console.log("inside is " + ltr);
//     return ' _ ';


//     (a=>'_').join(' ');
// });
console.log("outside is " + dashesArray);

//
var dashesHTML = document.getElementById('word');
dashesHTML.innerHTML = dashesArray.join(' ');

//Creates a variable called missesHTML that writes the letter misses from the function below onto the HTML.
var missesHTML = document.getElementById('missesBank');

//Creates a variable called messagesHTML that writes the messages from the function below onto the HTML.
var messageHTML = document.getElementById('messages');

//try array.join to remove the commas from the dashes.
// var a = ['Wind', 'Rain', 'Fire'];
// a.join();    // 'Wind,Rain,Fire'
// a.join('-'); // 'Wind-Rain-Fire'

//I want to start the game with a PUSH PLAY functionality so that user initiates the game on their own.
//I would like to have more than one category to choose from so that players can try different games.
//If I can figure it out, I would like a total wins recorded section.
//This currently starts the game and allows the user to start by pushing any key.
document.onkeyup = function (e) {
    userGuess = e.key;
    console.log(userGuess);
    
//tells the user that if they choose a letter that is not in the alphabet, this is "Not a Valid Guess".
    if (alphabet.indexOf(userGuess) === -1) {
        console.log("Not a Valid Guess");
    } else {
        console.log("Woohoo!");
//If the user presses a letter not in the word, they see the letter appear below the dashed word and after 6 faulty tries, they get a message stating "You Lose"
        if (randoWordArray.indexOf(userGuess) === -1) {
            console.log("Bad Guess, but Good Try!");
            misses.push(userGuess);
            console.log(misses);
            missesHTML.innerHTML = misses;
            wrongGuess += 1;
            if(wrongGuess === 6)    {
                messageHTML.textContent = "You Lose!";
            }
 
//If the user presses a letter in the word, it fills in the letter in the appropriate location.  If they complete the word, they get the message "You Win"
        } else {
            console.log("Good Guess!!");
            hits.push(userGuess);
            console.log("Good guesses " + hits);
            randoWordArray.forEach(function (ltr, idx) {
                if (userGuess === ltr) {
                    console.log(idx);
                    console.log(ltr);
                    dashesArray[idx] = ltr;
                   
                    dashesHTML.innerHTML = dashesArray.join(' ');
                    if(dashesArray.indexOf('_')=== -1)    {
                        messageHTML.textContent = "You Win!!";
                        console.log("No More Dashes");
                    }
                }

            })
        }
    };




}

//What else I still need to do
//Create a way, possibly using While loop, that the game stops when the user wins or loses.  Right now the player can keep on going
//Create a way to tally the wins and losses if possible
//Creae a function that allows the user to restart the game
//Of course still add CSS and way to animate a hangman game as the user plays
//Tell Erik his Patriots suck!


