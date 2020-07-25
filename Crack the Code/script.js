 let gameSection=document.createElement('div');
 gameSection.setAttribute("class","game-section");
 gameSection.style.border="2px solid black";
 gameSection.style.width="auto";
 gameSection.style.padding="10px";
 gameSection.style.display="flex";

 let button=document.createElement('button');
 button.innerHTML="start";
 gameSection.appendChild(button);
 document.body.append(gameSection)
 let score=0;
 let isPlaying=false;

 button.addEventListener('click',function(){
     if(!isPlaying){
         isPlaying=true;
         score=0;
         generateCode(4);
         button.innerHTML="Validate Code";
     }else{
         score++;
         let codes=document.querySelectorAll(".code");
         for (let i = 0; i < codes.length; i++) {
           if(codes[i].value==codes[i].actual){
            codes[i].style.backgroundColor="green"
            codes[i].style.color="white"
           }
         }
     }
 })


function generateCode(codeLength) {
    for (let i = 0; i < codeLength; i++) {
        let el = document.createElement('input');
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "50px";
        el.classList.add('code');
        el.order=i;
        el.style.flexBasis="25%";
        el.actual = Math.floor(Math.random * 10);
        el.value = 0;
        gameSection.appendChild(el);
        gameSection.appendChild(button);
    }
    document.body.append(gameSection);
}