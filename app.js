let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msj =document.querySelector("#msj");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =() =>{
const option =["rock", "paper","scissors"];
const randIdx =Math.floor(Math.random() *3);
return option[randIdx];
};


const drawGame =() =>{
       
    msj.innerText = "Game Was Draw.Play Again";
    msj.style.backgroundColor ="#081b31";

};

const showWinner = (userWin,userChoice,compChoice) =>{
if(userWin){
userScore++;
userScorePara.innerText =userScore;
    msj.innerText = `You win Your ${userChoice} Beats ${compChoice}`;
    msj.style.backgroundColor ="green";
}else{
    compScore++;
    compScorePara.innerText =compScore;

    msj.innerText = `You Lose ${compChoice} Beats Your ${userChoice}`;
    
    msj.style.backgroundColor ="red";
}
}

const playGAme =(userChoice) =>{
console.log("user choice =", userChoice)

const compChoice =genCompChoice();
console.log("comp choice =",compChoice)

if(userChoice === compChoice){
drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice ==="paper" ? false : true;
    }else if(userChoice ==="paper"){
        userWin =compChoice === "scissors" ?false : true;
    }else{
        userWin =compChoice === "rock" ?false:window;
    }

showWinner (userWin,userChoice,compChoice);

}


};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice =choice.getAttribute("id")
        
playGAme(userChoice);
    })
})