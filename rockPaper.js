// event listener X 3
// 3 divs
// random gener 1-3
// variable to store computer choice/our choice
// compare logic btwn vars
// score keeper
// If score is whatever you WIN!/LOSE

var scoreMe = 0
var scoreIt = 0
var choiceMe = ""
var choiceIt = ""

var winner = function(me, computer) {
	if (me === "rock" && computer === "scissors") {
		console.log ("rock beats scissors")
		scoreMe += 1
	}
		if (me === "scissors" && computer === "paper") {
		console.log ("scissors beats paper")
		scoreMe += 1
	}
		if (me === "paper" && computer === "rock") {
		console.log ("paper beats rock")
		scoreMe += 1
	}
	////////////////////////////
	if (computer === "rock" && me === "scissors") {
		console.log ("rock beats scissors")
		scoreIt += 1
	}
		if (computer === "scissors" && me === "paper") {
		console.log ("scissors beats paper")
		scoreIt += 1
	}
		if (computer === "paper" && me === "rock") {
		console.log ("paper beats rock")
		scoreIt += 1
	}
	////////////////////////////
	if (computer === "rock" && me === "rock") {
		console.log ("TIE")
		
	}
		if (computer === "scissors" && me === "scissors") {
		console.log ("TIE")
		
	}
		if (computer === "paper" && me === "paper") {
		console.log ("TIE")
		
	}

	// console.log(scoreMe, "scoreMe")
	// console.log(scoreIt, "scoreIt")
		finalScore.innerHTML = "My score: " + scoreMe +" Computer score: "+ scoreIt
}

var random = function() {
	var rando = Math.floor(Math.random()*3)+1
	//console.log (rando)
	if (rando === 1) {return "rock"}
	if (rando === 2) {return "paper"}
	if (rando === 3) {return "scissors"}
}

var rock = document.querySelector("#rock")
//console.log(rock)
var paper = document.querySelector("#paper")
var scissors = document.querySelector("#scissors")

rock.addEventListener("click", function() {
	//console.log ("rock")
	choiceMe = "rock"
//	console.log(random(),choiceMe)
	winner(choiceMe, random())
})

scissors.addEventListener("click", function() {
	//console.log ("scissors")
	choiceMe = "scissors"
	winner(choiceMe, random())
})

paper.addEventListener("click", function() {
	//console.log ("paper")
	choiceMe = "paper"
	winner(choiceMe, random())
 
})

var finalScore = document.querySelector("#score")
console.log(document.querySelector("#score"))






