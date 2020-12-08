const startButton = document.querySelector('#start')
const restartButton = document.querySelector(".restart")
const questionsSelector = document.querySelector('.questions')
const nextButton = document.querySelector('.next-button')
const questionButton = document.querySelector(".question")
const answerButton = document.querySelector(".answers")
const questionCount = document.querySelector(".question-counter")
const showScore = document.querySelector(".t-scores")
const finalScore = document.querySelector(".a-score")
const clickButton = document.querySelector(".btn")
const missedQuestions = document.querySelector("missed")

let shuffleQuetions, initialIndex
let score = 0;
restartButton.addEventListener("click", () => {
    location.reload()
})
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    if (initialIndex < questions.length - 1) {
        initialIndex++
        displayNextQuestion()
        const num = initialIndex + 1
        questionCount.innerText = "Question " + num + "/" + questions.length
    } else {
        resetQuestion()
        finalScore.innerText = "Your Score: " + score + "/" + questions.length
        showScore.classList.remove('hide')
        nextButton.classList.add('hide')
        questionButton.classList.add('hide')
        questionCount.classList.add('hide')
        restartButton.classList.remove('hide')
    }
});

// start button handler
function startQuiz() {
    console.log("start here");
    startButton.classList.add('hide')
    shuffleQuetions = questions.sort(() =>  Math.random() - .5)
    initialIndex = 0
    questionsSelector.classList.remove('hide')
    nextButton.classList.remove('hide')
    questionCount.innerText = "Question " + 1 + "/" + questions.length
    restartButton.classList.add('hide')
    showScore.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetQuestion()
    newQuestion(shuffleQuetions[initialIndex])
}

function newQuestion(question) {
    questionButton.innerText = question.question
    questionButton.style.width = "220px"
    question.options.forEach(option => {
        const button = document.createElement("button")
        button.innerText = option.opt
        button.classList.add("btn")
        if (option.correct) {
            button.dataset.correct = option.correct
        }
        button.addEventListener('click', pickAnswer)
        answerButton.appendChild(button)
    });
}

function resetQuestion() {
    // nextButton.classList.add('hide')
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function pickAnswer(e) {
    const selectButton = e.target
    const corrected = selectButton.dataset.correct
    setStatusClass(document.body, corrected)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.corrected)
        button.style.backgroundColor = "#b0e0e6"
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        score++
        console.log(score)
    } else {
        score
    }
}

function clearStatusClass(element) {
    element.classList.remove('score')
}

 fetch("./questions.json")
    .then(function(res) {
        return res.json();
    })
    .then( function(data) {
       // console.log(data)
        questions = data;
        return questions
        //console.log(questions)    
            } 
    );
    
 /* let array = [{c: 'blue'}, {c: 'green'}, {c: 'yellow'}];
 let questi;
for (i = 0; i < array.length; i++){
    questi = array[i];
  console.log(questi)
} */


