let userScore=0;
let compScore=0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");


options.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userOption=choice.getAttribute("id");
        playGame(userOption);
    });
});

const generateCompOption=()=>{
    // rock paper scissors
    const values=['rock','paper','scissors'];
    const randomIdx=Math.floor(Math.random()*3);
    return(values[randomIdx]);
}

const playGame=(userOption)=>{
    console.log("User chose: ",userOption);
    // generate computer choice
    const compOption = generateCompOption();
    console.log("Computer chose: ",compOption);

    //Game conditions

    if(userOption === compOption){
        // draw
        drawGame();
    } else{ //not a draw
        let userWin = true;
        if(userOption==='rock'){
            // scissors, paper
            userWin = compOption === 'paper'? false : true;
        } else if( userOption === 'paper'){
            // rock, scissors
            userWin = compOption === 'scissors'? false : true;
        } else{
            // rock, paper
            userWin = compOption === 'rock'? false : true;
        }
        showWinner(userWin,compOption, userOption);
    }

}

const drawGame = () => {
    console.log("It's a draw !!!");
    msg.innerText ="It's a draw, play your next move";
    msg.style.backgroundColor = "blueviolet";
}

const showWinner=(userWin, compOption, userOption)=>{
    if(userWin){
        console.log("You Won !");
        msg.innerText =`You Won ! Your ${userOption} beats ${compOption}`;
        msg.style.backgroundColor = "green";
        userScore++;
        uScore.innerText = userScore;
    } else{
        console.log("You lost !");
        msg.innerText=`You lost ! ${compOption} beats your ${userOption}`;
        msg.style.backgroundColor = "red";
        compScore++;
        cScore.innerText = compScore;
    }
}