//shorten the code
var $ = function (id) {
    return document.getElementById(id)
}

//global variables
var words = ['alohomora', 'cruciatus curse','expelliarmus','expecto patronum','lumos','obliviate','sectumsempra','stupefy','wingardium leviosa','accio','avada kedavra','petrificus totalus','riddikulus','reparo','confundo','ascendio'
];
var word;
var answerArray = [];
var userGuess;
var rightGuess = false;
var userRightGuess = 0;
var  left = 9;
var  wins = 0;
var losses = 0;


//pick a random word
function random() {
    let random = Math.floor(Math.random() * words.length);
    word = words[random]
}

//show blank start
function showBlank() {
    for (i = 0; i < word.length; i++) {
        answerArray[i] = "_"
    }
    $("guess").innerHTML = answerArray.join(" ")
}

//subtract guesses from total
function guessesLeft() {
    $("left").innerHTML = left
}

//creat wins
function winsScore() {
    $("wins").innerHTML = wins
}

//creat losses
function lossesScore() {
    $("losses").innerHTML = losses
}

//show the letter that is an incorrect guess
function wrongGuess(char) {
    $("wrong").innerHTML += char + ", "
}

// reset function
function initialGame() {
    if ($("winImage")) {
        $("winImage").remove()
    }

    left = 9;
    answerArray = [];
    $("wrong").innerHTML = "";
    userRightGuess = 0
    rightGuess = false;
    guessesLeft()
    random()
    showBlank()
}

// call initial function
initialGame()
winsScore()
lossesScore()

//check letter
function showLetter(char, str) {
    for (let j = 0; j < str.length; j++) {
        if (char === str[j]) {
            rightGuess = true
            answerArray.splice(j,1,char)
            userRightGuess++
        }
    }
    $("guess").innerHTML = answerArray.join(" ")
}

//check length
let matchLength = function() {
    if (word.length === userRightGuess) return true
    else return false
}

//what to do withuser guess
document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();

    showLetter(userGuess, word)
    
    if (rightGuess) {
        rightGuess = false
        if (matchLength()) {
            let audio = new Audio('');
            audio.play()
            wins++
            winsScore()
            setTimeout(initialGame, 2000)
        } else {
            let audio = new Audio('');
            audio.play()
        }
    } else {
        left--
        if (left < 1) {
            let audio = new Audio('');
            audio.play()
            initialGame()
            losses++
            lossesScore()
        } else {
            let audio = new Audio('');
            audio.play()
            wrongGuess(userGuess)
            guessesLeft()
        }

    }
}
