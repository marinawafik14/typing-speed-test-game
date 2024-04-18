 
 const words =[
"Hello",
"programming",
"Code",
"Javascript",
"Town",
"Country",
"Testing",
"Youtube",
"Linkedin",
"Twitter",
"Github",
"Leetcode",
"Internet",
"Python",
"Scala",
"Destrcturing",
"Paradigm",
"Styling",
"Cascade",
"Documentation",
"Coding",
"Funny",
"Working",
"Task",
"Runner",
"Roles",
"Test",
"Playing",
"Writing",
"Facebook",

];
//setting levels
const lvls = {
"Easy"  : 5,
"Normal": 3,
"Hard"  :  2
};

//defult level
let defultLevelName = "Normal";
let defultLevelSecond = lvls[defultLevelName];

//catch selector
let startutton = document.querySelector(".start");
let levelNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");



// setting level + seconds + score

levelNameSpan.innerHTML = defultLevelName;
secondsSpan.innerHTML = defultLevelSecond ;
timeLeftSpan.innerHTML = defultLevelSecond;
scoreTotal.innerHTML = words.length


//disable pate event
input.onpaste = function(){
    return false;
}

//start game
startutton.onclick = function(){
this.remove();
input.focus()
generateWords()
};

// generate word function


function generateWords(){
//get random word from array
let randomWord =  words[Math.floor(Math.random() * words.length)]
//get word index
let wordIndex = words.indexOf(randomWord);
// remove word from arry by using index
words.splice(wordIndex , 1)
//show the rondom word
theWord.innerHTML = randomWord;
//empty upcomming words
upcomingWords.innerHTML="";
for (let i = 0; i < words.length; i++) {
    //create div
 let div = document.createElement("div");
let txt = document.createTextNode(words[i]);
div.appendChild(txt);
upcomingWords.appendChild(div);
}

//call start play function
startPlay();
    

}

function startPlay(){
    timeLeftSpan.innerHTML = defultLevelSecond;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
if (timeLeftSpan.innerHTML ==="0") {
    clearInterval(start);
    //compare words
    if (theWord.innerHTML.toLowerCase()=== input.value.toLowerCase()) {
        //empty input
        input.value="";
        //increase score
        scoreGot.innerHTML++;
        if (words.length > 0) {
            generateWords();
        }else{
            let span = document.createElement("span");
            span.className="good";
            let txtSpan = document.createTextNode("Congratz");
            span.appendChild(txtSpan);
finishMessage.appendChild(span);

        }
    }else{
let span = document.createElement("span");
span.className="bad";
let txtSpan = document.createTextNode("Game Over");
span.appendChild(txtSpan);
finishMessage.appendChild(span);
//remove upcomming words
upcomingWords.remove();

    }
}
  }, 1000);
}