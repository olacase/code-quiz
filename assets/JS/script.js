// create start quiz button
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('content')
const questionElement = document.getElementById('ans-btn')

const ansButtonElements = document.getElementById('answer-buttons')
var shuffledQuestions, currentQuestion

startButton.addEventListener('Click', startQuiz)

function startQuiz(){
    startButton.classList.add('hide')
    shuffledQuestions = ans-btn.sort(() => Math.random() - 0.5)
    currentQuestion = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestion])
}


function showQuestion(ans-btn) {
    questionElement,innerText = question.question
    question.answers.forEach(ans => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswers )
        ansButtonElements.appendChild(button)
    })

}
function resetState() {
    nextButton.classList.add(hide)
    while (ansButtonElements.firstChild) {
        ansButtonElements.removeChild
        (ansButtonElements.firstChild)
    }
}

function selectAnswers(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
}

const questions = [
    {
        question:'',
        answers:[

        ]
    }
]