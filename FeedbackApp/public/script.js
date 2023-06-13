const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the largest species of shark?',
    answers: [
      { text: 'Great white shark', correct: false },
      { text: 'Hammerhead shark', correct: false },
      { text: 'Whale shark', correct: true },
      { text: 'Tiger shark', correct: false }
    ]
  },
  {
    question: 'Which animal has the longest lifespan?',
    answers: [
      { text: 'Elephant', correct: false },
      { text: 'Galapagos tortoise', correct: true },
      { text: 'Bowhead whale', correct: false },
      { text: 'Macaw parrot', correct: false }
    ]
  },
  {
    question: 'Which of these birds is known for its ability to mimic human speech?',
    answers: [
      { text: 'Bald eagle', correct: false },
      { text: 'Ostrich', correct: false },
      { text: 'African grey parrot', correct: true },
      { text: 'Flamingo', correct: false }
    ]
  },
  {
    question: 'What is the worlds tallest land animal?',
    answers: [
      { text: 'African elephant', correct: false },
      { text: 'Giraffe', correct: true },
      { text: 'Hippopotamus', correct: false },
      { text: 'Polar bear', correct: false }
    ]
  },
  {
    question: 'Which animal is known for its distinctive black and white markings?',
    answers: [
      { text: 'Zebra', correct: true },
      { text: 'Cheetah', correct: false },
      { text: 'Kangaroo', correct: false },
      { text: 'Sloth', correct: false }
    ]
  },
  {
    question: 'Which creature is capable of regenerating its lost tail?',
    answers: [
    { text: 'Starfish', correct: true },
    { text: 'Octopus', correct: false },
    { text: 'Lizard', correct: false },
    { text: 'Turtle', correct: false }
    ]
},
{
    question: 'Which animal has the ability to glide through the air using its "wings"?',
    answers: [
    { text: 'Penguin', correct: false },
    { text: 'Bat', correct: true },
    { text: 'Dolphin', correct: false },
    { text: 'Kangaroo', correct: false }
    ]
    },
    {
            question: 'What is the fastest land animal?',
            answers: [
            { text: 'Cheetah', correct: true },
            { text: 'Lion', correct: false },
            { text: 'Gazelle', correct: false },
            { text: 'Rhinoceros', correct: false }
            ]
            },
            {
                question: 'Which animal is known for its exceptional memory?',
                answers: [
                { text: 'Elephant', correct: true },
                { text: 'Gorilla', correct: false },
                { text: 'Orangutan', correct: false },
                { text: 'Hippopotamus', correct: false }
                ]
                },
                {
                    question: 'What is the largest species of penguin?',
                    answers: [
                    { text: 'Emperor penguin', correct: true },
                    { text: 'King penguin', correct: false },
                    { text: 'Adelie penguin', correct: false },
                    { text: 'Gentoo penguin', correct: false }
                    ]
                    }      
]