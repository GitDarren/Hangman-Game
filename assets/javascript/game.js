console.log("Hello World");



var userGuess;
var regExLetters = /^[a-z]+$/i;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Hits and Misses Variables//
var hits = [];
var misses = [];
var wrongGuess = 0;

var movieTitles = ['jaws', 'spaceballs', 'minions'];

var randoWord = movieTitles[Math.floor(Math.random() * movieTitles.length)];
console.log(randoWord);

var randoWordArray = randoWord.split('');
console.log(randoWordArray);

var dashesArray = randoWordArray.map(function (ltr) {
    console.log("inside is " + ltr);
    return ' _ ';
});
console.log("outside is " + dashesArray);

var dashesHTML = document.getElementById('word');
dashesHTML.innerHTML = dashesArray;

var missesHTML = document.getElementById('missesBank');

var messageHTML = document.getElementById('messages');

//try array.join//
// var a = ['Wind', 'Rain', 'Fire'];
// a.join();    // 'Wind,Rain,Fire'
// a.join('-'); // 'Wind-Rain-Fire'

document.onkeyup = function (e) {
    userGuess = e.key;
    console.log(userGuess);
    

    if (alphabet.indexOf(userGuess) === -1) {
        console.log("Not a Valid Guess");
    } else {
        console.log("Woohoo!");
        if (randoWordArray.indexOf(userGuess) === -1) {
            console.log("Bad Guess, but Good Try!");
            misses.push(userGuess);
            console.log(misses);
            missesHTML.innerHTML = misses;
            wrongGuess += 1;
            if(wrongGuess === 6)    {
                messageHTML.textContent = "You Lose!";
            }
            
        } else {
            console.log("Good Guess!!");
            hits.push(userGuess);
            console.log("Good guesses " + hits);
            randoWordArray.forEach(function (ltr, idx) {
                if (userGuess === ltr) {
                    dashesArray[idx] = ltr;
                    dashesHTML.innerHTML = dashesArray;
                    if(dashesArray.indexOf(' _ ')=== -1)    {
                        messageHTML.textContent = "You Win!!";
                        console.log("No More Dashes");
                    }
                }

            })
        }
    };




}

console.log(alphabet.indexOf('2'));


