// Here is my array of words.
var spellWords = ['alohomora', 'cruciatus curse','expelliarmus','expecto patronum','lumos','obliviate','sectumsempra','stupefy','wingardium leviosa','accio','avada kedavra','petrificus totalus','riddikulus','reparo','confundo','ascendio']

//this will select one of the above words at random
var word = words[Math.floor(Math.random() * words.length)];

//this array puts the word into underscores
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

//here how the players progress is shown--joining the string so that it appears "_ _ _" NOT "_","_","_"

//DON'T FORGET TO ADD ID FROM HTML!!!!!!!
document.getElementById("demo").innerHTML = answerArray.join("");


