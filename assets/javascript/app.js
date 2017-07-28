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

	var answerScreen = {
		a0 : ["assets/images/0.gif"],
		a1 : ["assets/images/1.gif"],
		a2 : ["assets/images/2.gif"],
		a3 : ["assets/images/3.gif"],
		a4 : ["assets/images/4.gif"],
		a5 : ["assets/images/5.gif"],
		a6 : ["assets/images/6.gif"],
		a7 : ["assets/images/7.gif"],
		a8 : ["assets/images/8.gif"],
		a9 : ["assets/images/9.gif"]
	};
		
	var number = 30;

	var intervalId;

	var Qcount = 0;

	var Acount = 0;

	var rightAnswer;

	var amtRight = 0;

	var amtWrong = 0;
	

// FUNCTIONS ====================================================================

	function displayQuestion() {
// console.log("Current Question: " + count);
	    $("#question").html("<h1>" + questions["q" + Qcount][0] + "</h1>");
		$("#option-1").text(questions["q"+ Qcount][1]);
		$("#option-2").text(questions["q"+ Qcount][2]);
		$("#option-3").text(questions["q"+ Qcount][3]);
		$("#option-4").text(questions["q"+ Qcount][4]);
		rightAnswer = questions["q" + Qcount][5];
// console.log("Right Answer: " + rightAnswer);
	    }

	function run() {
		$("#start-game").text("");   
		// clearGif();
		displayQuestion();
		$("#timer").html("<p>Time Remaining: 30</p>");
	    intervalId = setInterval(decrement, 1000); 
	 
		}

	function decrement() {
	    number--;
	    $("#timer").html("<p>Time Remaining: " + number + "</p>");
	    if (number === 0  && Qcount <= 10) {
	    	amtWrong++;
	    	stop();
	    	Qcount++;
	    	number = 30;
	  		// showGif();
	    	// setTimeout(run, 5000);
	    	run();
	    }
	    else if (number === 0 || Qcount > 10){
	    	amtWrong++;
	    	stop();	
	    }
		}

	function stop() {
		clearInterval(intervalId);
		if (Qcount === 9){
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
		Qcount++;
		number = 0;
	    number = 30;	   
	    // showGif();
	    // setTimeout(run, 5000);
	    run();
		}
    
	function reset() {
		$("#re-start").text("");
		number = 30;
		Qcount = 0;
			Acount = 0;
		amtRight = 0;
		amtWrong = 0;
		run();
	}

	function showGif() {
		$("#clear-block").empty();
		$("#show-gif").attr("src" , answerScreen['a' + Acount][0]);
		Acount++;
	}

	function clearGif() {
		$("#show-gif").attr("src" , "");
		
	}

 	

// MAIN PROCESS =================================================================
   
	$("#start-game").on("click", run); 

	$("#re-start").on("click", reset);

	$(".all-buttons").on("click", skip);


});