// Define an array of quiz questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Madrid", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Who is the creator of JavaScript?",
      options: ["Brendan Eich", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
      answer: "Brendan Eich"
    },
    // Add more questions here...
  ];
  
  // Define variables
  let currentQuestion = 0;
  let score = 0;
  
  // Get question and options elements
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  
  // Function to display the question and options
  function displayQuestion() {
    // Clear previous options
    optionsElement.innerHTML = '';
  
    // Display current question
    questionElement.textContent = questions[currentQuestion].question;
  
    // Display options
    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', checkAnswer);
      optionsElement.appendChild(button);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    // Check if quiz is finished
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      // Display final score
      const resultElement = document.getElementById('result');
      resultElement.textContent = `You scored ${score} out of ${questions.length} points.`;
    }
  }
  
  // Display the first question
  displayQuestion();
  