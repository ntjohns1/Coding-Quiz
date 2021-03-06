/* ToDO:
-Quiz ends but... feedback doesn't appear for last question. Figure out how to create or show a feedbackEl and only display for half a second. Also you need code for the following...
-grab initials and score from form 
-store players initials and score in local storage
-there is a problem where it is reading event listeners for save and high scores buttons as null
-button to start over or clear high scores at quizEnd.
*/
var card = document.querySelector(".card");
var introEl = document.querySelector("#quiz-start")
var questionContainer = document.querySelector("#card-header");
var choiceField = document.querySelector(".card-body");
var startButton = document.querySelector("#start-button");
var timerEl = document.getElementById("timer");
var feedbackEl = document.querySelector(".feedbackEl");
var quizEnd = document.getElementById("quiz-end")
var scoreDisplay = document.getElementById("score")
var secondsLeft = 75;
var choiceA = document.getElementById("choice-A");
var choiceB = document.getElementById("choice-B");
var choiceC = document.getElementById("choice-C");
var choiceD = document.getElementById("choice-D");
var scoreEL = document.getElementById("score")
var formEl = document.getElementById("initials")
var saveBtn = document.getElementById("save-btn")
var highScoreBtn = document.getElementById("high-scores-btn")
var highScoresList = document.getElementById("score-list")
var scoreObject = new Array();

function init() {
  var lastScore = JSON.parse(localStorage.getItem("scoreCard"));
  if (lastScore !== null) {
  scoreObject = lastScore;
  console.log(scoreObject);
  }
}

function gameStart() {
// Hide intro card and show first question
  card.removeAttribute("hidden");
  introEl.setAttribute("hidden", true);
  renderQuestion();
// Set timer
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.innerHTML = secondsLeft;

    if(timerEl.innerHTML === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      gameOver();
    if (secondsLeft < 0) {
    secondsLeft = 0;
      }
    }
  }, 1000);
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
function answerClick (event) {
    var guess = event.target.innerHTML;
    console.log(event.target.innerHTML);
  // conditionals for answer clicks, check if user guessed wrong
  if (guess === questions[currentQuestionIndex].correctAnswer) {
    timerEl.textContent = secondsLeft;
    // flash right/wrong feedback on page for half a second
    feedbackEl.textContent = "Last Answer: Correct!";
    setTimeout(function() {
      feedbackEl.textContent = ""
    }, 2000);
  } else {
    feedbackEl.textContent = "Last Answer: Wrong!"
    setTimeout(function() {
      feedbackEl.textContent = ""
    }, 2000);
     // penalize time
     secondsLeft -= 10;
  }

  function gameOver() {
    quizEnd.removeAttribute("hidden");
    card.setAttribute("hidden", true);
    timerEl.setAttribute("hidden", true);
  }

// advances to next question and choices
  currentQuestionIndex++;
// check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
  gameOver();
// grab value from timerEl  
    var score = timerEl.innerHTML;
    scoreDisplay.innerHTML = score;
  } else {
    renderQuestion();
  }
};
// these are commented out because event listeners are being read as null

saveBtn.addEventListener("click", function(save) {
  save.preventDefault();
  var scoreCard = {
    initials: formEl.value,
    score: scoreEL.innerHTML
  };
  addScore(scoreCard); 
  formEl.value = "";
});

function addScore(score) {
  scoreObject.push(score);
  localStorage.setItem("scoreCard", JSON.stringify(scoreObject));
}



highScoreBtn.addEventListener("click", function(event) {
  event.preventDefault();
  formEl.textContent = '';
  for (let i = 0; i < scoreObject.length; i++) {
    const scores = scoreObject[i];
    var listEl = document.createElement('li');
    listEl.textContent = "Initials: " + scores.initials + " --- Score: " + scores.score;
    highScoresList.prepend(listEl);
  } 
});

choiceA.addEventListener("click", answerClick);
choiceB.addEventListener("click", answerClick);
choiceC.addEventListener("click", answerClick);
choiceD.addEventListener("click", answerClick);  
startButton.addEventListener("click", gameStart);
init();

// Figure out why these event listeners get error message "Uncaught TypeError: Cannot read property 'addEventListener' of null"

// highScoreBtn.addEventListener("click", renderMessage);


