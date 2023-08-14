function ComputerSelector()
{
    //Array of potential choices available to the computer. 
    let choice = 
    [
        'ROCK',
        'PAPER',
        'SCISSORS',
    ]

    let computer = choice[Math.floor(Math.random()*choice.length)]; // Allows for the random selection of a string value from the array. 

    return computer;
}


// Last Updated: Aug 14, 2023. 


// Evaluates who wins a particular round:

function Evaluation(user = PlayerSelection(), computer = ComputerSelector())

{
    if (user === "ROCK" && computer === "SCISSORS")
    {
   
        roundWinner("user"); 
        return "1"; 
    }
   
   else if (user === "PAPER" && computer === "ROCK")
    {
    
        roundWinner("user");
        return "1";

    }

    else if (user === "SCISSORS" && computer === "PAPER")
    {
   
        roundWinner("user");
         return "1";
    }

    else if (user === computer) 
    
    {
    
        roundWinner("tie");
        return "3";
    }
    
    else 
    {
    
        roundWinner("computer");
        return "2";
    }
    
}

//Prints winner of Round to Screen: 

async function roundWinner(winner)
{
    var victor, para; 

    switch(winner)
    {

      case "user":
            victor = document.querySelector('.victor');
            para = document.createElement('p');
            para.textContent = 'The User Won The Round';
            victor.appendChild(para);
            break;

        case "computer":
            victor = document.querySelector('.victor');
            para = document.createElement('p');
            para.textContent = 'The Computer Won The Round';
            victor.appendChild(para);
            break;

        case "tie": 
            victor = document.querySelector('.victor');
            para = document.createElement('p');
            para.textContent = 'There Was A Tie';
            victor.appendChild(para);
            break;
    }

     await delay(1250);
     victor.removeChild(para);
}


// TOP EXERCISE ADDING UI (AUG 7, 2023 - AUG 14, 2023). 


// Button Event Listener / Handler: 

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => 
{
    button.addEventListener('click', (event)=> execute(event))
});
 

// Governs the General flow of the game:

 async function execute(event)
 {
    ButtonControl("deactivate");

    let winner = Evaluation(event.target.textContent);

    count(winner); 

    if (playerScore === 5)
    {
        score(1)
    }

    else if (computerScore === 5)
    {
        score(2)
    }

    await delay(2200);

    ButtonControl("activate")
 };


// Controls the state of the buttons used to play the game:

 function ButtonControl (toggle)
 {
    let controls = document.querySelectorAll('button');

    if(toggle === 'deactivate')
    {
        for(let i = 0; i < controls.length; i++)
        {
            controls[i].disabled = true;
        }
    
    }

    else if (toggle === 'activate')
    {
        for(let i = 0; i < controls.length; i++)
        {
            controls[i].disabled = false;
        }
    }

    else 
    {
        console.log("Error !!!!")
    }
 }


//Global Variables:

var playerScore = 0, computerScore = 0;

let playerTally = document.querySelector('.playerIcon .score')
let computerTally = document.querySelector('.computerIcon .score')


// Used to keep track of User & Computer Wins:

function count(winner)
{
    if(winner === '1')
    {
        playerScore += 1;
        playerTally.innerHTML = playerScore;
    }

    else if (winner === '2')
    {
        computerScore += 1;
        computerTally.innerHTML = computerScore;
    }

    else if (winner === '3')
    {
        console.log('There was a Tie')
    }

    else 
    {
        console.log('Error')
    }
    
}

//Displays the score and the winner of the game. 

async function score(option)
{
await delay(1000);

switch(option)
{
    case 1:
    
       victor = document.querySelector('.victor');
        para = document.createElement('p');
        game = document.createElement('p');
        game.textContent = 'Game Over !!!'
        para.textContent = 'User Won';
        await delay(750);
        victor.appendChild(game);
        await delay(750);
        victor.appendChild(para);
        clear();
     break;
    

    case 2: (computerScore === 5)
    
        victor = document.querySelector('.victor');
        para = document.createElement('p');
        game = document.createElement('p');
        game.textContent = 'Game Over !!!'
        para.textContent = 'Computer Won';
        await delay(750);
        victor.appendChild(game);
        await delay(750);
        victor.appendChild(para);
        clear();
    break;
    }
}

    async function clear()
    {
        playerScore = 0;
        computerScore = 0;
        await delay(1000)
        victor.removeChild(game);
        victor.removeChild(para);
        playerTally.innerHTML = playerScore;
        computerTally.innerHTML = computerScore;
    }

    


// Used to delay the execution of the Script:
 
function delay(ms)
{
    return new Promise(resolve => setTimeout (resolve, ms));
}