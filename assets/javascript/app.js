var position = 0; 


//create an array/object of questions 
var trivia = [
		
		["The external JavaScript file must contain the '<'script'>' tag.", true, false, false], 
		["JavaScript is the same as Java.", true, false, false], 
		["JavaScript is case-sensitive.", true, false, true], 
		["The following code: Boolean(10 > 9) will return, 'False'.", true, false, false], 
		["To round the number 7.25, to the nearest integer, Math.rnd(7.25).", true, false, false]
]



function _(x) {
	return document.getElementById(x); 
}

function generateQuestion() {
	//generate
	var test =_("triviaquest"); 
	var question = trivia[position][0]; 
	var choiceTrue = trivia[position][1]; 
	var choiceFalse =trivia[position][2];
	
	test.innerHTML = "<h2>" + question + "</h2>";
	"<br>"
	test.innerHTML += "<input type ='radio' name='choices' value=true> " +choiceTrue+"<br>";
	test.innerHTML += "<input type ='radio' name='choices' value= false> " +choiceFalse+"<br>"; 
	test.innerHTML += "<button onclick='checkAnswer()'> Submit</button>";
}

function checkAnswer() {
	//check user input for right or wrong answer
	alert('userinput');

}


generateQuestion();

 


	 
	 	





/*


//console.log(trivia.questions.q1);
console.log(trivia.answers); 
console.log(trivia.options)*/

//Generate questions in question box 
/*$(document).ready(function generateQuestions() {
		triviaQuestion=document.getElementById('content').innerHTML = "<h2>" +trivia.questions.q3 + "</h2>";

		for (var i = 0; i < trivia.questions.length; i++) {

			

		}

	//}
	
})
*/

//Variables

var score = 0;
var correct= 0; 
var incorrect=0;


//Time alloted for each question
var questionTimer = 46; 
















// console.log(questions);


// function renderQuestion() {
		// triviaQuestion = document.getElementById("question-box").innerHTML= "<h3>"+ this.question + "</h3>";
		

		// console.log(triviaQuestion); 

//function renderQuestion() {
		//triviaQuestion = document.getElementById("question-box").innerHTML= "<h3>"+ this.question + "</h3>";
		

		//console.log(triviaQuestion); 
//}


// function renderQuestion() {
	// document.getElementById("#question-box").innerHTML= "<h3>"+ question + "</h3>";
	// console.log(renderQuestion()); 


// }
// renderQuestion(); 





	
	

	/*generateQuestions: function() {
		document.getElementById("question-box").innerHTML=this.questionB;
		console.log(this.questionB); 
	}*/


// trivia.generateQuestions(); 

//setting timer to fire 1 sec after page loads 
 // var startGame = setTimeout(function run() { 
 //        counter=setInterval(timer, 1000); 
 //        console.log(counter);
 //     },1000);


///Question timer 
// function timer() {
//   //Decrement questionTimer
// 	questionTimer--;

//  //Print counter to html
//  	$("#quest-timer").html(questionTimer); 
// // if player selects correct answer, show screen congrats after few seconds display new question
//  		if {


 		
//  //else if player selects wrong answer tell player wrong answer and display correct answer wait few seconds 
//  // display next question
//  		} else if {


//  		} else {
//  		//if time runs out
//  		(questionTimer === 0)
//  		//tell player times up and display correct answer after few seconds show next question

//  	}
  
// }


// function stop() {
// 	clearInterval(timer); 
// }

// timer();
// stop();  
//run(); 


 

	 
	









