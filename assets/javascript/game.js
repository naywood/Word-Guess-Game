//shorten the code
let $ = function (id) {
    return document.getElementById(id)
}

//global variables
const words = ['alohomora', 'cruciatus curse','expelliarmus','expecto patronum','lumos','obliviate','sectumsempra','stupefy','wingardium leviosa','accio','avada kedavra','petrificus totalus','riddikulus','reparo','confundo','ascendio'
];
let word;
let answerArray = [];
let userGuess;
let rightGuess = false;
let userRightGuess = 0;
let left = 9;
let wins = 0;
let losses = 0;


//random word
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

//guesses left
function guessesLeft() {
    $("left").innerHTML = left
}

//wins
function winsScore() {
    $("wins").innerHTML = wins
}

//losses
function lossesScore() {
    $("losses").innerHTML = losses
}

//show wrong guess
function wrongGuess(char) {
    $("wrong").innerHTML += char + ", "
}

// resent function
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

//user guess
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
