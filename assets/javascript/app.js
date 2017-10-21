$(document).ready(function() {
	//add array for object array for questions
	var questions = [
		{
			"name": "Question-1",
			"question": "What year was the housing market crash?",
			"answers": ["2006", "2008", "2011", "1980"],
			"correct answer": "2008"
		},
		{
			"name": "Question 2",
			"question": "Which of the following has NOT been killed by millennials?",
			"answers": ["brunch", "diamonds", "the student loan industry", "Applebees"],
			"correct answer": "the student loan industry"
		},
		{
			"name": "Question 3",
			"question": "Fill in the phrase: Stay ______",
			"answers": ["golden.", "cool.", "safe.", "woke."],
			"correct answer": "woke."
		},
		{
			"name": "Question 4",
			"question": "Which of the following does NOT contain coffee?",
			"answers": ["Cortado", "Vanilla Bean Frappicino", "Gibraltar", "Americano"],
			"correct answer": "Vanilla Bean Frappicino"
		},
		{
			"name": "Question 5",
			"question": "Which of the following is not a real type of Yoga?",
			"answers": ["Ashtanga", "Vinyasa", "Cat", "Rose Water"],
			"correct answer": "Rose Water"
		},
		{
			"name": "Question 6",
			"question": "What sauce did McDonald's bring back for 1 day in 2017?",
			"answers": ["schezwan", "hot mustard", "sweet chili", "teriyaki"],
			"correct answer": "schezwana-"
		}
	];

	$("#start").click(function() {
		//on star click, make question divs and print questions
			for (i=0; i<questions.length; i++) {
			var questionDiv = $("<div>");
			var questionTitle = $("<h2>");
			questionTitle.html(questions[i].question);
			var answers = $("<label>");
			answers.addClass("form-check-label");
			answers.attr("id", questions[i].name);
			//print answers to div
			for (k=0; k<questions[i].answers.length; k++) {
				var answerButtons = $("<input>");
				answerButtons.attr("id", questions[i].answers[k]);
				var answerText = $("<p>");
				answerButtons.addClass("form-check-input answers");
				answerButtons.attr("type", "radio");
				answerButtons.attr("name", questions[i].name);
				answerButtons.addClass(questions[i].name);
				answerText.html(questions[i].answers[k]);
				answers.append(answerButtons, answerText);
			};
			questionDiv.append(questionTitle, answers);
			$("#question-bank").append(questionDiv);
		};
		//hide start button
		$("#start").css("display", "none");
		timeLimit = 20;
	//add coundown timer
	var counter = setTimeout(timer, 1000);
	function timer() {
		timeLimit--;
		$("#timeRemaining").html(timeLimit);
		console.log(timeLimit);
		//when the time reaches zero clear questions and display correct answer count.
		if (timeLimit==0) {
			$("question-bank").empty();
			clearTimeout(counter);
		//show correct answers based off of id check on radio button selected
		//show total questions available
		//display button play again?
		}
	}

	});

	

});