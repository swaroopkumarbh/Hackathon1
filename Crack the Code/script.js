let randomNumbers = [];
let complexityLength=4;
let resultsArr=[];
while (randomNumbers.length < complexityLength) {
    let r = Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
    if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
}

let messageSection = document.createElement('div');
messageSection.setAttribute("class", "game-section");
messageSection.style.width = "auto";
messageSection.style.padding = "10px";
messageSection.style.display = "flex";
messageSection.style.justifyContent = "center";
messageSection.style.wordWrap = "break-word";
messageSection.style.color = "ghostwhite";
messageSection.style.fontWeight = "bolder";
messageSection.style.fontSize = "40px"
messageSection.innerHTML = "CRACK THE CODE";

let scoreSection = document.createElement('div');
scoreSection.setAttribute("class", "game-section");
scoreSection.style.width = "auto";
scoreSection.style.padding = "10px";
scoreSection.style.display = "flex";
scoreSection.style.justifyContent = "center";
scoreSection.style.wordWrap = "break-word";
scoreSection.style.color = "ghostwhite";
scoreSection.style.fontWeight = "bolder";
scoreSection.style.fontSize = "40px"


let gameSection = document.createElement('div');
gameSection.setAttribute("class", "game-section");
gameSection.style.width = "auto";
gameSection.style.padding = "10px";
gameSection.style.display = "flex";
gameSection.style.justifyContent = "center";
gameSection.style.wordWrap = "break-word";

let buttonSection = document.createElement('div');
buttonSection.setAttribute("class", "game-section");
buttonSection.style.width = "auto";
buttonSection.style.padding = "10px";
buttonSection.style.display = "flex";
buttonSection.style.justifyContent = "center";
buttonSection.style.wordWrap = "break-word";

let instructionSection = document.createElement('div');
instructionSection.setAttribute("class", "game-section");
instructionSection.style.width = "auto";
instructionSection.style.padding = "5px";
instructionSection.style.display = "flex";
instructionSection.style.justifyContent = "center";
instructionSection.style.wordWrap = "break-word";
instructionSection.style.color = "ghostwhite";
instructionSection.style.fontSize="1.5rem"
instructionSection.innerHTML = "Instructions: The computer gives the player hints about the numbers in color-coding. Red represents the digit is not present in that number, orange represents the digit is present in the number but at the wrong place and green represents the particular digit is present in the number at the right place";

let button = document.createElement('button');
button.setAttribute('class', 'my-button');
button.innerHTML = "Start";
document.body.style.background = "linear-gradient(90deg, rgba(63,94,251,0.8886905103838411) 0%, rgba(189,67,92,0.8382703423166141) 92%)";
buttonSection.appendChild(button)
document.body.append(messageSection, gameSection, buttonSection, instructionSection);
let chance = 1;
let isPlaying = false;
let score=500;

button.addEventListener('click', function () {
    if (!isPlaying) {
        isPlaying = true;
        chance = 0;
        gameSection.innerHTML = "";
        scoreSection.innerHTML = "";
        instructionSection.innerHTML = "";
        while (randomNumbers.length < complexityLength) {
            let r = Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
            if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
        }
        generateCode(complexityLength);
    } else {
        chance++;
        scoreSection.innerHTML="Chances Left = "+(5-chance);
        document.body.append(scoreSection,gameSection, buttonSection);
        resultsArr=[];
        if (chance <= 5) {
            let codes = document.querySelectorAll(".code");
            for (let i = 0; i < codes.length; i++) {
                if (codes[i].value == codes[i].expected) {
                    codes[i].style.backgroundColor = "green";
                    codes[i].style.color = "white"
                    resultsArr.push(true);
                } else if (codes[i].value != codes[i].expected && randomNumbers.includes(Number(codes[i].value))) {
                    codes[i].style.backgroundColor = "orange";
                    codes[i].style.color = "white";
                    score-=10;
                   resultsArr.push(false);
                } else {
                    codes[i].style.backgroundColor = "red";
                    codes[i].style.color = "white";
                    score-=Math.round(100/complexityLength);
                    resultsArr.push(false);
                }
            }
            if(resultsArr.indexOf(false)==-1){
            complexityLength+=1;
            scoreSection.innerHTML=" You won<br>Your Score is "+score ;
            gameSection.innerHTML="";
            gameSection.append(button);
            gameSection.style.fontWeight = "bolder";
            gameSection.style.fontSize = "10px"
            gameSection.style.color = "white";
            button.innerHTML = 'Next Level';
            if(randomNumbers.length>6){
                button.innerHTML = 'Finish';
                randomNumbers=[];
                isPlaying=false;
                complexityLength=4;
                score=0;
            }
            buttonSection.appendChild(button)
            document.body.append(gameSection,scoreSection,buttonSection);
            isPlaying = false;
            randomNumbers = [];
            score+=500;
            }
        } else {
            scoreSection.innerHTML="Your Score is "+score;
            gameSection.innerHTML = "Game Over";
            gameSection.append(button);
            gameSection.style.fontWeight = "bolder";
            gameSection.style.fontSize = "50px"
            gameSection.style.color = "white";
            button.innerHTML = 'Play Again';
            buttonSection.appendChild(button)
            document.body.append(gameSection,scoreSection,buttonSection);
            isPlaying = false;
            randomNumbers = [];
            score=+500;
        }
    }
})

function generateCode(codeLength) {
    for (let i = 0; i < codeLength; i++) {
        let el = document.createElement('input');
        let br = document.createElement('br');
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 1;
        el.style.padding="1%";
        el.style.fontSize="3vw";
        el.style.fontWeight="bold";
        el.style.textAlign="center"
        el.size = 1;
        el.classList.add('code');
        el.order = i;
        el.style.flexBasis = "10%";
        el.style.outline="none";
        el.setAttribute("required","")
        el.expected = randomNumbers[i];
        button.innerHTML = "Validate Code";
        gameSection.appendChild(el);
        if (i == codeLength - 1) {
            gameSection.append(br);
        }
    }
    buttonSection.appendChild(button)
    document.body.append(gameSection, buttonSection);
}