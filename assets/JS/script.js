// create start quiz button

var questions = [
        {title:'Commonly used data types DO Not include',
        choices:  ['alerts', 'strings', 'booleans', 'numbers'],
        answers: "alerts"
        },
        {title:'Commonly used data types DO Not include',
        choices:  ['alerts', 'strings', 'booleans', 'numbers'],
        answers: "alerts"
}

]
            


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

const ansButtonElements = document.getElementById('answer-buttons')
var shuffledQuestions, currentQuestion

// ?variables to track quiz state
var currentQuestionsIndex = 0;
var time = questions.length * 15;
var timerId;

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById("timer");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;

    getQuestion();
}


function getQuestion() {
    var currentQuestion = questions
    [currentQuestionIndex];
}

var titleEl = document.getElementById("question-title");
titleEl.textContent = currentQuestion.title;

choicesEl.innerHTML = "";

currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode>setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
});

function questionClick() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;

        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    },1000);

    if (currentQuestionIndex === questions.length) {
        quizEnd();

    } else {
        getQuestion();
    }
}


function quizEnd() {
    clearInterval(timerId);

    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    questionsEl.setAttribute("class", "hide");
}









function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}


submitBtn.onclick = saveHighscore;
startBtn.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter;



// startButton.addEventListener('Click', startQuiz)
// nextButton.addEventListener('click', () => {
//     currentQuestion++
//     setNextQuestion()
// })

// function startQuiz(){
//     startButton.classList.add('hide')
//     shuffledQuestions = ans-btn.sort(() => Math.random() - 0.5)
//     currentQuestion = 0
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }
// function setNextQuestion() {
//     resetState()
// showQuestion(shuffledQuestions[currentQuestion])
// }


// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswers )
//         ansButtonElements.appendChild(button)
//     })

// }
// function resetState() {
//     nextButton.classList.add('hide')
//     while (ansButtonElements.firstChild) {
//         ansButtonElements.removeChild
//         (ansButtonElements.firstChild)
//     }
// }

// function selectAnswers(e) {
// const selectedButton = e.target
// const correct = selectedButton.dataset.correct
// setStatusClass(document.body, correct)
// Array.from(ansButtonElements.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
// })
// if (shuffledQuestions.length> currentQuestion + 1)
// nextButton.classList.remove('hide')
// }

// function setStatusClass(element, correct){
//     clearStatusClass(element)
//     if (correct){
//         element.classList.add('correct')
//     }else {
//         element.classList.add('wrong')
//     }
// }
// function clearStatusClass(element){
//     element.classList.remove('correct')
//     element,classList.remove('wrong')
// }

// const questions = [
//     {
//         question:'Commonly used data types DO Not include',
//         answers: [
//             { text: 'alerts', correct: true},
//             { text: 'strings', correct: false}
//             { text: 'booleans', correct: false}
//             { text: 'numbers', correct: false}

//         ]
//     }
// ]