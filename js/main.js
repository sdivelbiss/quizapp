answerArray = [

	{
		answer: "obama"
	},

	{
		answer: 4
	},
	{
		answer: "asia"
	},
	{
		answer: "antarctica"
	},
	{
		answer: "prague"
	},
	{
		answer: "washington dc"
	},
	{
		answer: "sacramento"
	},
]

function getAnswers() {
	var correct = 0
	var incorrect = 0

		

	for (var i = 0; i < answerArray.length; i++) {
		var answer = document.getElementById("answer" + [i]).value.toLowerCase()
		var question = document.getElementById("question" + [i])

		if (answerArray[i].answer == answer) {
			correct.className = "correct"
			question.className = "correct"
			document.getElementById("question" + [i]).className = "correct";
			correct++
		}
		else {
			question.className = "incorrect"
			incorrect.className = "incorrect"
			incorrect++
		}

	}
	
	document.getElementById("correct").innerHTML = correct
	document.getElementById("incorrect").innerHTML = incorrect


}








