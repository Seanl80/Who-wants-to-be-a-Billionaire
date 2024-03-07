let textElement = document.querySelector('.intro h1');
textElement.style.setProperty('--animate-duration', '3s');
let startScreen = document.querySelector('.start');
let mainBodyElement = document.getElementById('main-body');

textElement.classList.add('animate__animated', 'animate__zoomInDown', 'animate__slower');

textElement.addEventListener('animationend', () => {
  document.querySelector('.intro').style.display = 'none';
  startScreen.style.display = 'block';
});

function startQuiz() {
  startScreen.style.display = 'none';
  mainBodyElement.style.display = 'block';
  getQuestion();
}

const questions = [
  {
      question: 'What is the capital of France?',
      choiceA: 'London',
      choiceB: 'Berlin',
      choiceC: 'Paris',
      choiceD: 'Amsterdam',
      correct: 'C'
  },
  {
      question: 'Who painted the Mona Lisa?',
      choiceA: 'Leonardo da Vinci',
      choiceB: 'Pablo Picasso',
      choiceC: 'Vincent van Gogh',
      choiceD: 'Michelangelo',
      correct: 'A'
  },
  {
      question:'What is the chemical symbol for water?',
      choiceA: 'CO2',
      choiceB: 'H2O',
      choiceC: 'NaC1',
      choiceD: 'O2',
      correct: 'B'
  },
  {
      question: 'What is the largest planet in our solar system?',
      choiceA: 'Earth',
      choiceB: 'Saturn',
      choiceC: 'Mars',
      choiceD: 'Jupiter',
      correct: 'D'
  },
  {
      question: 'What is the square root of 64?',
      choiceA: '4',
      choiceB: '6',
      choiceC: '10',
      choiceD: '8',
      correct: 'D'
  },
  {
      question: 'In which year did the Titanic sink?',
      choiceA: '1912',
      choiceB: '1907',
      choiceC: '1922',
      choiceD: '1933',
      correct: 'A'
  },
  {
      question: 'Who wrote the play "Romeo and Juliet"?',
      choiceA: 'Jane Austen',
      choiceB: 'Charles Dickens',
      choiceC: 'William Shakespeare',
      choiceD: 'Emily Brontë',
      correct: 'C'
  },
  {
      question: 'What is the tallest mammal in the world?',
      choiceA: 'Giraffe',
      choiceB: 'Elephant',
      choiceC: 'Hippopotamus',
      choiceD: 'Blue whale',
      correct: 'A'
  },
  {
      question: 'What is the official language of Brazil?',
      choiceA: 'Spanish',
      choiceB: 'Portuguese',
      choiceC: 'English',
      choiceD: 'French',
      correct: 'B'
  },
  {
      
      question: 'What is the primary ingredient in guacamole?',
      choiceA: 'Celery',
      choiceB: 'Tomato',
      choiceC: 'Onion',
      choiceD: 'Avocado',
      correct: 'D'
  },
  {
      question: 'Which country is the largest by land area?',
      choiceA: 'Russia',
      choiceB: 'China',
      choiceC: 'United States',
      choiceD: 'Canada',
      correct: 'A'
  },
  {
      question: "What is the main component of the Earth's atmosphere?",
      choiceA: 'Oxygen',
      choiceB: 'Argon',
      choiceC: 'Nitrogen',
      choiceD: 'Carbon dioxide',
      correct: 'C'
  },
  { 
      question: 'Who was the first woman to win a Nobel Prize?',
      choiceA: 'Mother Teresa',
      choiceB: 'Marie Curie',
      choiceC: 'Rosalind Franklin',
      choiceD: 'Florence Nightingale',
      correct: 'B'
  },
  {
      question: 'In which year was the first iPhone released?',
      choiceA: '2006',
      choiceB: '2005',
      choiceC: '2008',
      choiceD: '2007',
      correct: 'D'
  },
  {
      question: 'What is the smallest bone in the human body?',
      choiceA: 'Femer',
      choiceB: 'Stapes',
      choiceC: 'Tibia',
      choiceD: 'Humerus',
      correct: 'B'
  }
]

const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function getQuestion(){
  let q = questions[runningQuestion];

  question.innerHTML = "<p>"+ q.question +"</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function checkAnswer(answer){
  let answerElement = document.getElementById(answer);
  if( answer === questions[runningQuestion].correct){
    answerIsCorrect(answerElement);
  } else {
    answerIsWrong(answerElement);
  }
}

function answerIsCorrect(answerElement){
  console.log("Answer is correct: ", answerElement);
  answerElement.style.backgroundColor = "green";
  setTimeout(loadNextQuestion, 1000);
}

function answerIsWrong(answerElement){
  console.log("Answer is wrong: ", answerElement);
  answerElement.style.backgroundColor = "red";
}

function loadNextQuestion() {
  // Reset background colors of answer buttons
  document.getElementById('A').style.backgroundColor = '';
  document.getElementById('B').style.backgroundColor = '';
  document.getElementById('C').style.backgroundColor = '';
  document.getElementById('D').style.backgroundColor = '';

  runningQuestion++; // Move to the next question
  // Check if there are more questions
  if (runningQuestion <= lastQuestion) {
    getQuestion(); // Load the next question
  } else {
    console.log("End of quiz");
  }
}





