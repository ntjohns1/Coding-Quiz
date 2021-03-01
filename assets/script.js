var card = document.querySelector(".card");
var introEl = document.querySelector("#quiz-start")
var questionContainer = document.querySelector("#card-header");
var choiceField = document.querySelector(".card-body");
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer");

var choiceA = document.getElementById("choice-A");
var choiceB = document.getElementById("choice-B");
var choiceC = document.getElementById("choice-C");
var choiceD = document.getElementById("choice-D");

var quizEnd = document.getElementById("quiz-end");

function gameStart () {
    card.removeAttribute("hidden");
    introEl.setAttribute("hidden", true);
    renderQuestion();
}
 
// store questions in an arrray of objects
var questions = [
    {
        questionText: "1. Which of the following is NOT a primitive data type?",
        answers: ["A. Booleans", "B. Numbers", "C. Undefined", "D. None of the above."],
        correctAnswer: "D. None of the above.",
    },
    {
        questionText: "2. The math.floor() method:",
        answers: ["A. Returns the largest integer greater than or equal to a given number.", "B. Returns the largest integer less than or equal to a given number.", "B. Rounds to the nearest integer of a given number.", "D. None of the above."],
        correctAnswer: "B. Returns the largest integer less than or equal to a given number.",
    },
    {
        questionText: "3. An array can contain:",
        answers: ["A. Booleans", "B. Numbers", "C. Undefined", "D. All of the above."],
        correctAnswer: "D. All of the above.",
    }
]
// get current question object from array
var currentQuestionIndex = 0

// Populate page with currentQuestion
function renderQuestion() {
    var currentQuestion = questions[currentQuestionIndex].questionText;
  console.log(currentQuestion)
  questionContainer.innerHTML = currentQuestion;
  
  choiceA.innerHTML = questions[currentQuestionIndex].answers[0];
  choiceB.innerHTML = questions[currentQuestionIndex].answers[1];
  choiceC.innerHTML = questions[currentQuestionIndex].answers[2];
  choiceD.innerHTML = questions[currentQuestionIndex].answers[3];

// clear out any old question choices
// loop over choices
// create new button for each choice
// attach click event listener to each choice
// display on the page (edited) 

}
// logic for Next button 
function nextClick () {
    // logic for next button goes here
  currentQuestionIndex++
  renderQuestion()
}

startButton.addEventListener("click", gameStart)


/*
1. Which of the following is NOT a primitive data type:

A. Booleans
B. Numbers
C. Undefined
D. None of the above.

2. The math.floor() method:

A. Returns the largest integer greater than or equal to a given number.
B. Returns the largest integer less than or equal to a given number.
B. Rounds to the nearest integer of a given number.
D. None of the above.

3. An array can contain:

A. Primitive data types
B. Objects
C. 
D. none of the above
*/