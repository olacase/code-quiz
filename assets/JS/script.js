// create start quiz button

var questions = [
        {title:'Commonly used data types DO Not include',
        choices:  ['alerts', 'strings', 'booleans', 'numbers'],
        answers: "alerts"
        },
        {title:'The condition in an if / else statement is enclosed with _____________',
        choices:  ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answers: "parenthesis"
        },
        {title:'Arrays in JavaScript can be used to store ___________________',
        choices:  ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answers: "all of the above"
        },
        {title:'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices:  ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answers: "console.log"
}
]
            

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const ansButtonElements = document.getElementById('answer-buttons')
var shuffledQuestions, currentQuestion
// variables to track quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start-btn");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
// This function hides the "start-screen" div and shows the "questions" div. Starts timer.
function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    getQuestion();
}
function getQuestion() {
    // Getting current question object from array
    var currentQuestion = questions
    [currentQuestionIndex];
    // Updating title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    // Looping through choices and creating new "button" element for each
    currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    // Create event listener and append child
    choiceNode.onclick = questionClick;
  
    choicesEl.appendChild(choiceNode);
});
}
function questionClick() {
  // console.log("question-click")
  // console.log(this.value, questions[currentQuestionIndex].answers)
    if(this.value !== questions[currentQuestionIndex].answers) {
        time -= 15;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    // This moves to the next question
    currentQuestionIndex++;
    // If no more questions in the array end quiz
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}
function quizEnd() {
    // Stopping the clock and showing "end-screen" section by removing "class" attribute
    clearInterval(timerId);
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
    // Show final score and hide questions section
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    // Hiding "questions" div
    questionsEl.setAttribute("class", "hide");
}
function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }
  function saveHighscore() {
    //   Getting value of initials input box
      var initials = initialsEl.value.trim();
      if (initials !== "") {
        initialsEl.value="";
        //   Getting saved scores from local storage if exists or setting empty array
          var highscores =
          JSON.parse(window.localStorage.getItem("highscores")) || [];
        //  This creates a new score object with users initials and their time as key/value pairs
          var newScore = {
              score: time,
              initials: initials
          };
        //   Pushing new score object to highscores array and parsing object to a string and saving to local storage
          highscores.push(newScore);
          window.localStorage.setItem("highscores", JSON.stringify(highscores));
          printHighscores();
          submitBtn.setAttribute("class", "hide");
      }
  }
  saveHighscore();

  function printHighscores() {
    //   Getting scores form local storage and parsing data from string to an object or setting an empty array if no scores exist
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    //   If scores exist, loop through each and create a "li" element
    var olEl = document.getElementById("highscores");

    olEl.innerHTML = '';
      highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.initials;
    //   Append each "li" child to an "ol"
      
      olEl.appendChild(liTag);
    });
  }
printHighscores();
submitBtn.onclick = saveHighscore;
startBtn.onclick = startQuiz;