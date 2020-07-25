let randomNumbers = [];
while (randomNumbers.length < 4) {
    let r = Math.floor(Math.random() * 10);
    if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
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
button.setAttribute('class','my-button');
button.innerHTML = "start";
gameSection.appendChild(button);
document.body.style.background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"; 
document.body.append(gameSection);
let chance = 1;
let isPlaying = false;

button.addEventListener('click', function () {
    if (!isPlaying) {
        isPlaying = true;
        chance = 0;
        gameSection.innerHTML = "";
        generateCode(4);
    } else {
        chance++;
        console.log(chance);
        if(chance<=5){
            let codes = document.querySelectorAll(".code");
        for (let i = 0; i < codes.length; i++) {
          /*  console.log(`value=${codes[i].value} expected=${codes[i].expected} index=${randomNumbers.indexOf(Number(codes[i].value))} includes=${randomNumbers.includes(Number(codes[i].value))}`);*/
            //console.log(randomNumbers)
            if (codes[i].value == codes[i].expected) {
                codes[i].style.backgroundColor = "green";
                codes[i].style.color = "white"
            } else if (codes[i].value != codes[i].expected && randomNumbers.includes(Number(codes[i].value))) {
                codes[i].style.backgroundColor = "orange";
                codes[i].style.color = "white";
            } else {
                codes[i].style.backgroundColor = "red";
                codes[i].style.color = "white";
            }
        }
        }else{
            gameSection.innerHTML="Game Over";
            gameSection.append(button);
            gameSection.style.fontWeight="bolder";
            gameSection.style.fontSize="50px"
            gameSection.style.color="white";
            button.innerHTML='Play Again';
            document.body.append(gameSection);
            isPlaying=false;
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
        if (i == codeLength - 1) {
            gameSection.append(br);
            gameSection.append(button);
        }

    }

    document.body.append(gameSection);
}