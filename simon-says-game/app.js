let gameSeq=[];
let userSeq=[];
let scor = 0;

let btns= ["yellow","red","blue","green"];

let started = false;
let level =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false ){
        console.log("game is stared");
        started = true;
        yourScore.innerHTML="";
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200); 
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 200); 
}  
  

function levelUp() {
    userSeq= [];
    level++;
    h2.innerText=`LEVEL ${level}`;
    
    let randIdx= Math.floor(Math.random() *3);
    let randColor= btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

let yourScore=document.querySelector(".yourScore");
function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    } else {
        h2.innerHTML=`Game Over!<br>Press any key to restart.`;
        yourScore.innerText=`Your Score : ${level}`;
        reset();
    }
}

function btnPress() {
   let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq= [];
    userSeq= [];
    if(level >= scor){
        score();
    }
    level = 0;
}

let highScore=document.querySelector(".highScore");

function score(){
   highScore.innerText=`Highest Score : ${level}`;
   scor=level;
}