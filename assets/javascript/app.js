 //Variables

 
var correct= 0; 




//create an array of questions/////////////////////////////////////////////////////////////////////
var trivia = [
		
		["The external JavaScript file must contain the '<'script'>' tag.", true, false, false], 
		["JavaScript is the same as Java.", true, false, false], 
		["JavaScript is case-sensitive.", true, false, true], 
		["The following code: Boolean(10 > 9) will return, 'False'.", true, false, false], 
		["To round the number 7.25, to the nearest integer, Math.rnd(7.25).", true, false, false]
]

///////////////////////////////////////////////////////////////////////////////////////////////////

function doc(x) {
	return document.getElementById(x); 
}
//////////////////////////////////////////////////////////////////////////////////////////////////

//Render questions////////////////////////////////////////////////////////////////////////////////
function generateQuestion() {

	var test = doc("triviaquest"); 
	var question = trivia[y][0]; 
	var choiceTrue = trivia[y][1]; 
	var choiceFalse =trivia[y][2];
	
	test.innerHTML = "<h2>" + question + "</h2>";
	"<br>"
	test.innerHTML += "<input type ='radio' class='choices'  id='red' value='true'> " +choiceTrue+"<br>";
	test.innerHTML += "<input type ='radio' class='choices'  value='false'> " +choiceFalse+"<br><br>"; 
	test.innerHTML += "<button onclick='checkAnswer()'> Submit</button>";


}

//////////////////////////////////////////////////////////////////////////////////////////////////


//Check Answers////////////////////////////////////////////////////////////////////////////////////
var y = 0;

function checkAnswer() {

	//check user input for right or wrong answer
	
	var userInput = document.getElementById("red").checked; 
	
	
	if (userInput == trivia[y][3]) {
		 clearInterval(intervalId);
		 $("#quest-timer").html("<h3>" + "Correct" + "</h3>");
		 correct++;

		 
		
		 
	}
		else {

			 clearInterval(intervalId);
			 $("#quest-timer").html("<h3>" + "Incorrect: the correct answer is "+ trivia[y][3] + "</h3>");
			
        
		}
		y++;
		
		setTimeout(stop, 1000 * 4);
		 setTimeout(generateQuestion, 1000 * 5);
		
		}



	
	generateQuestion(); 




////////////////////////////////////////////////////////////////////////////////////////////////////
//Timed question will be 25 seconds per question

var number = 25; 

//This variable will hold interval ID 
var intervalID; 

function run () {
	intervalId = setInterval(decrement, 1000); 
}

run();

function decrement () {
//decrease the number by 1 
	number--; 
	
//show the number in quest-timer tag
	$("#quest-timer").html("<h3>" + number + "</h3>");

	//when the number hits zero...
	if(number === 0) {
		
		//tell player times up and show answer after a few seconds generated new question
		stop(); 
		


	//alert...change to restart to start new question and restart timer
 		$("#quest-timer").html("<h3>" + "Times Up: the correct answer is "+ trivia[y][3]  + "</h3>");
 		console.log("hello..."+ y);
 		y++;  
 		generateQuestion();

 		

 			

 		
	}

}



function stop() {
	clearInterval(intervalId); 
	number =30;
	run();

}
 












	








 

	 
	









