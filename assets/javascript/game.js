console.log("Hello World");



var userGuess;
var regExLetters = /^[a-z]+$/i;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Hits and Misses Variables//
var hits = [];
var misses = [];

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
            alert("Bad Guess, but Good Try");
            misses.push(userGuess);
            console.log(misses);
        } else {
            alert("Good Guess!!");
            hits.push(userGuess);
            console.log("Good guesses " + hits);
            randoWordArray.forEach(function (ltr, idx) {
                if (userGuess === ltr) {
                    dashesArray[idx] = ltr;
                    dashesHTML.innerHTML = dashesArray;
                }

            })
        }
    };




}

console.log(alphabet.indexOf('2'));


