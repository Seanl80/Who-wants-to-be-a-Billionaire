// intro
const textElement = document.querySelector('.intro h1');
textElement.style.setProperty('--animate-duration', '2s');
const startScreen = document.querySelector('.start');
const mainBodyElement = document.getElementById('main-body');
const finishScreen = document.querySelector('.end');
const startSound = new Audio('assets/audio/lets-go.mp3');
// animate.style code
textElement.classList.add('animate__animated', 'animate__zoomInDown', 'animate__slow');
// load start screen
textElement.addEventListener('animationend', () => {
  document.querySelector('.intro').style.display = 'none';
  startScreen.style.display = 'block';
});
// load quiz after button click
function startQuiz() {
  startScreen.style.display = 'none';
  mainBodyElement.style.display = 'block';
  startSound.play();
  getQuestion();
}
// questions
const questions = [
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
    question: 'In which year did the Titanic sink?',
    choiceA: '1912',
    choiceB: '1907',
    choiceC: '1922',
    choiceD: '1933',
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
  const q = questions[runningQuestion];

  question.innerHTML = '<p>' + q.question + '</p';
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
// sounds
const correctSound = new Audio('assets/audio/right-answer.mp3');
const wrongSound = new Audio('assets/audio/wrong-answer.mp3');

// check if answers right or wrong
function checkAnswer(answer){
  const answerElement = document.getElementById(answer);
  if( answer === questions[runningQuestion].correct){
    answerIsCorrect(answerElement);
  } else {
    answerIsWrong(answerElement);
  }
}

function answerIsCorrect(answerElement){
  console.log('Answer is correct:', answerElement);
  answerElement.style.backgroundColor = 'green';
  correctSound.play();
  updateMoneyCount();
  setTimeout(loadNextQuestion, 1000);
}

function answerIsWrong(answerElement){
  console.log('Answer is wrong:', answerElement);
  answerElement.style.backgroundColor = 'red';
  wrongSound.play();
  setTimeout(function() {
    window.location.href = 'gameover.html';
  }, 1000);
}

function loadNextQuestion() {
  // Reset background colors of answer buttons
  document.getElementById('A').style.backgroundColor = '';
  document.getElementById('B').style.backgroundColor = '';
  document.getElementById('C').style.backgroundColor = '';
  document.getElementById('D').style.backgroundColor = '';
  // move to next question
  runningQuestion++; 

  if (runningQuestion <= lastQuestion) {
    getQuestion();
  } else {
    console.log('End of quiz');
    gameComplete();
  }
}

// money count
let moneyCount = 0;

function updateMoneyCount() {
  if (moneyCount === 0) {
      moneyCount = 1;
  } else {
      moneyCount *= 10;
  }
  document.getElementById('money-count').textContent ='Money Won £' + moneyCount;
}


// game completed
function gameComplete() {
  window.location.href = 'finish.html';
}

// restart game
function reset() {
  window.location.href = 'index.html';
}

