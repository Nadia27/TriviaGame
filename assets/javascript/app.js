 //Variables

var position = 0; 
var correct= 0; 
var incorrect=0;

//create an array of questions 
var trivia = [
		
		["The external JavaScript file must contain the '<'script'>' tag.", true, false, false], 
		["JavaScript is the same as Java.", true, false, false], 
		["JavaScript is case-sensitive.", true, false, true], 
		["The following code: Boolean(10 > 9) will return, 'False'.", true, false, false], 
		["To round the number 7.25, to the nearest integer, Math.rnd(7.25).", true, false, false]
]

//Timed question will be 25 seconds per question
var number = 25; 

//This variable will hold interval ID 
var intervalID; 

function run () {
	intervalId = setInterval(decrement, 1000); 
}

function decrement () {
//decrease the number by 1 
	number--; 
	console.log(number);
//show the number in quest-timer tag
	$("#quest-timer").html("<h3>" + number + "</h3>");

	//when the number hits zero...
	if(number === 0) {
		
		stop(); 

	//alert...change to restart to start new question and restart timer
	alert("time up!"); 
	} 
}

function stop() {
	clearInterval(intervalId); 

}
run(); 






function doc(x) {
	return document.getElementById(x); 
}

//Render questions
function generateQuestion() {

	var test = doc("triviaquest"); 
	var question = trivia[position][0]; 
	var choiceTrue = trivia[position][1]; 
	var choiceFalse =trivia[position][2];
	
	test.innerHTML = "<h2>" + question + "</h2>";
	"<br>"
	test.innerHTML += "<input type ='radio' id='choices' value=true> " +choiceTrue+"<br>";
	test.innerHTML += "<input type ='radio' id='choices' value= false> " +choiceFalse+"<br>"; 
	test.innerHTML += "<button onclick='checkAnswer()'> Submit</button>";
}

function checkAnswer() {
	//check user input for right or wrong answer
	choices = doc("choices");
	for( var i= 0; i < choices.length; i++) {
		if(choices[i].checked) {
			var choice = choices[i].value; 
		}
	}if (choice ==trivia[position][3]) {
		correct++; 
	}
	position++; 
	generateQuestion();

}

generateQuestion();




 

	 
	









