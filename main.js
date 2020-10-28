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

let shuffleQuetions, initialIndex
let score = 0;
restartButton.addEventListener("click", () => {
    location.reload()
})
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    if(initialIndex < questions.length-1){
    initialIndex++
    displayNextQuestion()
    const num = initialIndex + 1
    questionCount.innerText = "Question " + num +"/" + questions.length
    } else{
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
function startQuiz(){
console.log("start here");
startButton.classList.add('hide')
shuffleQuetions = questions.sort(() => Math.random() - .5)
initialIndex = 0
questionsSelector.classList.remove('hide')
nextButton.classList.remove('hide')
questionCount.innerText = "Question " + 1 +"/" + questions.length
restartButton.classList.add('hide')
showScore.classList.add('hide')
displayNextQuestion()
}

function displayNextQuestion(){
    resetQuestion()
    newQuestion(shuffleQuetions[initialIndex])
    
}

function newQuestion(question){
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

function resetQuestion(){
    // nextButton.classList.add('hide')
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
        
    }
}

function pickAnswer(e){
    const selectButton = e.target
    const corrected = selectButton.dataset.correct
    setStatusClass(document.body, corrected)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.corrected)
        button.style.backgroundColor = "#b0e0e6"
    })
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
        score++
        console.log(score)
    } else {
        score
    }
}

function clearStatusClass(element){
element.classList.remove('score')
}


const questions = [
    {
        question: "In which view Headers and Footers are visible?",
        options: [
        {opt: "Normal View", answer: false},
        {opt: "Page Layout View", answer: false},
        {opt: "Print Layout View", answer: true},
        {opt: "Draft View", answer: false}
        ]

    },
    {
        question: "Text-styling feature of MS word is:",
        options: [
            {opt: 'WordColor', correct: false},
            {opt: 'WordFont', correct:false},
            {opt: 'WordArt', correct: true},
            {opt: 'WordFill', correct: false}
        ]
        
    },
    {
        question: "Name of the screen that recognizes touch input is:",
        options: [
            {opt: 'Recog screen', correct: false},
            {opt: 'Touch Screen', correct:true},
            {opt: 'Point Screen', correct: false},
            {opt: 'Android Screen', correct: false}
        ]
        
    },
    {
        question: "Computer Monitor is also known as:",
        options: [
            {opt: 'UVD', correct: false},
            {opt: 'CCTV ', correct:false},
            {opt: 'DVU', correct: false},
            {opt: 'VDU', correct: true}
        ]
        
    },
    {
        question: "Eight Bits make up a:",
        options: [
            {opt: 'Bite', correct: true},
            {opt: 'Megabite', correct:false},
            {opt: 'Kilobite ', correct: false},
            {opt: 'non', correct: false}
        ]
        
    },
    {
        question: "Which one is the result of the output given by a computer? ",
        options: [
            {opt: 'data', correct: false},
            {opt: 'information ', correct:true},
            {opt: 'instruction', correct: false},
            {opt: 'execution', correct: false}
        ]
        
    },
    {
        question: "The printed output from a computer is called: ",
        options: [
            {opt: 'Copy', correct: false},
            {opt: 'Soft copy', correct:false},
            {opt: 'WordArt', correct: false},
            {opt: 'Hard copy', correct: true}
        ]
        
    },
    {
        question: "Which one of these also known as read/write memory? ",
        options: [
            {opt: 'ROM', correct: false},
            {opt: 'RAM', correct:true},
            {opt: 'DVD', correct: false},
            {opt: 'Hard Disc', correct: false}
        ]
        
    },
    {
        question: "The Process of erasing a disk is called: ",
        options: [
            {opt: 'Wiping', correct: false},
            {opt: 'Formatting', correct:true},
            {opt: 'Cleaning', correct: false},
            {opt: 'Defragmentation', correct: false}
        ]
        
    },
    {
        question: "Which one is not an Image file? ",
        options: [
            {opt: '.bmp', correct: false},
            {opt: '.png', correct:false},
            {opt: '.jpg', correct: false},
            {opt: '.wmv ', correct: true}
        ]
        
    }
]



