//caching the DOM, storing for future use 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	//choices are r, p, s
	const choices = ['r', 'p', 's'];
	const randomNumber = (Math.floor(Math.random()*3)); //generating random numbers between 0 and 3(not including 3)
	return choices[randomNumber];
}

function convertToWord(letter){
	switch(letter){
		case("r"):
			return "Rock";
			break;
		case("p"):
			return "Paper";
			break;
		case("s"):
			return "Scissors";
			break;
	}
}

function win(user, computer){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	// result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ", You WIN!!";  Traditional way
	//ES6 Way
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}, You WIN!!`;
	//add class of greenGlow to the div which user clicked
	userChoice_div.classList.add('greenGlow');
	setTimeout(()=>userChoice_div.classList.remove('greenGlow'), 300); //ES6 way
}

function lose(user, computer){
	const userChoice_div = document.getElementById(user);
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses ${convertToWord(computer)}${smallCompWord}, You LOSE!!`;
	userChoice_div.classList.add('redGlow');
	// setTimeout(function(){userChoice_div.classList.remove('redGlow')}, 300);
	setTimeout(()=>userChoice_div.classList.remove('redGlow'), 300); //ES6 way
}

function draw(user, computer){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}, Its a DRAW!!`;
	userChoice_div.classList.add('grayGlow');
	setTimeout(()=>userChoice_div.classList.remove('grayGlow'), 300); //ES6 way
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "pr":
		case "sp":
		case "rs":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}

}
function main(){
	//ES% ways:
	// rock_div.addEventListener('click', function(){
	// 	game("r");
	// })

	// paper_div.addEventListener('click', function(){
	// 	game("p");
	// })

	// scissors_div.addEventListener('click', function(){
	// 	game("s");
	// })
	
	rock_div.addEventListener('click', ()=>game("r"));
	paper_div.addEventListener('click', ()=>game("p"));
	scissors_div.addEventListener('click', ()=>game("s"));
}

main();