var randomNumbers = [];
while(randomNumbers.length < 4){
    var r = Math.floor(Math.random() * 10);
    if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
}
console.log(randomNumbers.join(''));

let gameSection = document.createElement('div');
gameSection.setAttribute("class", "game-section");
gameSection.style.border = "2px solid black";
gameSection.style.width = "auto";
gameSection.style.padding = "10px";
gameSection.style.display = "flex";
gameSection.style.justifyContent = "center";



let button = document.createElement('button');
button.innerHTML = "start";
gameSection.appendChild(button);
document.body.style.background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"; 
document.body.append(gameSection);
let score = 0;
let isPlaying = false;

button.addEventListener('click', function () {
    if (!isPlaying) {
        isPlaying = true;
        score = 0;
        gameSection.innerHTML="";
        generateCode(4);
    } else {
        score++;
        const codes = document.querySelectorAll(".code");
        for (let i = 0; i < codes.length; i++) {
            if (codes[i].value == codes[i].expected) {
                codes[i].style.backgroundColor="green";
                codes[i].style.color = "white"
            }else{
                codes[i].style.backgroundColor="red";
                codes[i].style.color = "white"
            }
        }
    }
})


function generateCode(codeLength) {
    for (let i = 0; i < codeLength; i++) {
        let el = document.createElement('input');
        let br = document.createElement('br');
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;

        el.size = 1;
        el.style.width = "50px";
        el.classList.add('code');
        el.order = i;
        el.style.flexBasis = "25%";
        el.expected = randomNumbers[i];
        button.innerHTML = "Validate Code";
        gameSection.appendChild(el);
        if (i==codeLength-1) {
            gameSection.append(br,button);
        }

    }

    document.body.append(gameSection);
}