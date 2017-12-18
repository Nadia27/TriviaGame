//create an array of questions???
//Creat

//generate one question at a time on screen until time runs out or player answers
//each question will be an timed event 
//if player select right answer...show congrats
		//after a few seconds display next quetion(without user input)
//else player selects wrong answer
		//tell player they selected wrong answer and display right answer
		//display correct answer...after few seconds show next question
	///timed out... 
		//tell player times up
		//display correct answer...after few seconds show next question(w/o user input)

//Final screen...show number of correct/incorrect answers and option to restart game (w/o restarting page)

//Variables 

//Time alloted for each question
var questionTimer = 46;

var trivia = {
	questionA: "Inside which HTML element do we put the JavaScript?",
	questionB: "Where is the correct place to insert a JavaScript?",
	questionC: "What is the correct syntax for referring to an external script called 'xxx.js'?",
	questionD: "The external JavaScript file must contain the <script> tag?",
	questionE: " Is JavaScript case-sensitive?"
}

//setting timer to fire 1 sec after page loads 
 var startGame = setTimeout(function run() { 
        counter=setInterval(timer, 1000); 
        console.log(counter);
     },1000);



function timer() {
  //Decrement questionTimer
	questionTimer--;

 //Print counter to html
 	$("#quest-timer").html(questionTimer); 

 	if(questionTimer === 0) {

 		alert("time's up"); 
 	}
  
}
timer(); 
//run(); 


 




	//decrement counter by 1
	 
	









