var card = document.querySelector(".card");
var introEl = document.querySelector("#quiz-start")
var questionContainer = document.querySelector("#card-header");
var choiceField = document.querySelector(".card-body");
var startButton = document.querySelector("#start-button");
var timerEl = document.getElementById("timer");
var secondsLeft = 75;

var choiceA = document.getElementById("choice-A");
var choiceB = document.getElementById("choice-B");
var choiceC = document.getElementById("choice-C");
var choiceD = document.getElementById("choice-D");

var quizEnd = document.getElementById("quiz-end");

function gameStart () {
  card.removeAttribute("hidden");
  introEl.setAttribute("hidden", true);
  renderQuestion();
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.innerHTML = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    }

  }, 1000);
}


function setTime() {
  // Sets interval in variable

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
];

// get current question object from array
var currentQuestionIndex = 0;

// Populate page with currentQuestion
function renderQuestion() {
    var currentQuestion = questions[currentQuestionIndex].questionText;
  console.log(currentQuestion);
  questionContainer.innerHTML = currentQuestion;

  // create new button for each choice
  choiceA.innerHTML = questions[currentQuestionIndex].answers[0];
  choiceB.innerHTML = questions[currentQuestionIndex].answers[1];
  choiceC.innerHTML = questions[currentQuestionIndex].answers[2];
  choiceD.innerHTML = questions[currentQuestionIndex].answers[3];
}
// logic for answer button clicks 
function answerClick () {
  // conditionals for answer clicks 
      // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].correctAnswer) {
    // penalize time
    secondsLeft -= 10;

    if (secondsLeft < 0) {
      secondsLeft = 0;
    }

    // display new time on page
    timerEl.textContent = secondsLeft;
 feedbackEl.textContent = "Wrong!";
  } else {
    
    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);
// advances to next question and choices
  currentQuestionIndex++;
  
  renderQuestion();
}

choiceA.addEventListener("click", answerClick);
choiceB.addEventListener("click", answerClick);
choiceC.addEventListener("click", answerClick);
choiceD.addEventListener("click", answerClick);  
startButton.addEventListener("click", gameStart);


