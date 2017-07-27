$(document).ready(function() {

// VARIABLES ====================================================================
	var score = 0;
	var answer;
	var questions = { 
		q0 : ["'Smelly Cat' is the name of the cat in what show?" , "How I Met Your Mother" , "Friends" , "Seinfeld" , "Will and Grace" , 2],

		q1 : ["Which of these is NOT a cat from 'Sailor Moon'?" , "Artemis" , "Diana" , "Luna" , "Selene" , 4],

		q2 : ["What is the name of the cat in the TV series 'Charmed'?" , "Kit" , "Kat" , "Kate" , "Cat" , 1],

		q3 : ["Which of these cats is the youngest cat in the animated movie 'The Aristocats'?" , "Toulouse" , "Berlioz" , "Marie" , "Adelaide" , 3],

		q4 : ["'Cat' is the name of the cat in which Audrey Hepburn movie?" , "Breakfast at Tiffany's" , "Funny Face" , "Roman Holiday" , "Sabrina" , 1],
		
		q5 : ["What is the name of the cat in the tv series 'Buffy the Vampire Slayer'?" , "Admiral Snuggles" , "Miss Kitty Fantastico" , "Princess Whiskers" , "Fluffy McMittens" , 2],
		
		q6 : ["What is the name of the cat in the animated movie 'Pinocchio'?" , "Figaro" , "Jiminy" , "Geppetto" , "Stromboli" , 1],
		
		q7 : ["'Happy' is the name of the cat in what anime series?" , "Soul Eater" , "Kiki's Delivery Service" , "Fairytail" , "Chi's Sweet Home" , 3],
		
		q8 : ["Which of these is NOT a cat inspired 'Pokemon'?" , "Meowth" , "MeowMew" , "Glameow" , "Meowstic" , 2],
		
		q9 : ["What is the name of the cat in the tv series 'Sabrina the Teenage Witch'?" , "Salem" , "Wizard" , "Mort" , "Luncinda", 1],
	};
		
	var number = 30;

	var intervalId;

	var count = 0;

	var rightAnswer;

	var amtRight = 0;

	var amtWrong = 0;

// FUNCTIONS ====================================================================

	function displayQuestion() {
// console.log("Current Question: " + count);
	    $("#question").html("<h1>" + questions["q" + count][0] + "</h1>");
		$("#option-1").text(questions["q"+ count][1]);
		$("#option-2").text(questions["q"+ count][2]);
		$("#option-3").text(questions["q"+ count][3]);
		$("#option-4").text(questions["q"+ count][4]);
		rightAnswer = questions["q" + count][5];
// console.log("Right Answer: " + rightAnswer);
	    }

	function run() {
		$("#start-game").text("");
		displayQuestion();
		$("#timer").html("<p>Time Remaining: 30</p>");
	    intervalId = setInterval(decrement, 1000); 
		}

	function decrement() {
	    number--;
	    $("#timer").html("<p>Time Remaining: " + number + "</p>");
	    if (number === 0  && count <= 10) {
	    	amtWrong++;
	    	stop();
	    	count++;
	    	number = 30;
	    	run();
	    }
	    else if (number === 0 || count > 10){
	    	amtWrong++;
	    	stop();	
	    }
		}

	function stop() {
		clearInterval(intervalId);
		if (count === 9){
		$("#question").html("<h1>Here's How you did!</h1>");
		$("#option-1").text("Correct: " + amtRight);
		$("#option-2").text("Wrong: " + amtWrong);
		$("#option-3").text("");
		$("#option-4").text("");
		$("#timer").html("");
		$("#re-start").text("Play Again!");
			}
		}

	function skip() {
		if (this.title == rightAnswer){
// console.log("Answer is correct");
				amtRight++;
	 	}
	 	else {
// console.log("Answer is wrong");
	 			amtWrong++;
	 	}
// console.log("Button Capture: " + this.title);
// console.log("Correct Count: " + amtRight);
// console.log("Incorrect Count: " + amtWrong);
// console.log("===========================");		
		stop();
		count++;
		number = 0;
	    number = 30;
	    run();
		}
    
	function reset() {
		$("#re-start").text("");
		number = 30;
		count = 0;
		amtRight = 0;
		amtWrong = 0;
		run();
	}

 	

// MAIN PROCESS =================================================================
   
	$("#start-game").on("click", run); 

	$("#re-start").on("click", reset);

	$(".all-buttons").on("click", skip);

	


	


});