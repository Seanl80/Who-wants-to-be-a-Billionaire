let questions = [];
let lastQuestion;
let runningQuestion = 0;

const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');

fetch('assets/js/questions.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    questions = data;
    lastQuestion = questions.length - 1;
    getQuestion();
  })
  .catch(error => {
    console.error('There was a problem fetching the questions:', error);
  });

const textElement = document.querySelector('.intro h1');
const startScreen = document.querySelector('.start');
const mainBodyElement = document.getElementById('main-body');
const finishScreen = document.querySelector('.end');
const failScreen = document.querySelector('.gameover');
const startSound = new Audio('assets/audio/lets-go.mp3');
const correctSound = new Audio('assets/audio/right-answer.mp3');
const wrongSound = new Audio('assets/audio/wrong-answer.mp3');
const laughSound = new Audio('assets/audio/laugh.mp3');
const congratSound = new Audio('assets/audio/congratulations.mp3');
const myAudio = [startSound, correctSound, wrongSound, laughSound, congratSound];
const soundToggles = document.querySelectorAll('.sound-btn');
let soundEnabled = false;

// animate.style code
textElement.style.setProperty('--animate-duration', '2s');
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

window.onload = function() {
  soundEnabled = false;
  toggleSound();
};

function toggleSound() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    myAudio.forEach(audio => {
      audio.muted = false;
    });
    soundToggles.forEach(button => {
      button.textContent = 'Sound Is On';
    });
  } else {
    myAudio.forEach(audio => {
      audio.muted = true;
    });
    soundToggles.forEach(button => {
      button.textContent = 'Sound Is Off';
    });
  }
}

function getQuestion(){
  const q = questions[runningQuestion];

  question.innerHTML = '<p>' + q.question + '</p';
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

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
  answerElement.style.backgroundColor = 'green';
  correctSound.play();
  updateMoneyCount();
  setTimeout(loadNextQuestion, 1000);
}

function answerIsWrong(answerElement){
  answerElement.style.backgroundColor = 'red';
  wrongSound.play();
  setTimeout(function() {
    mainBodyElement.style.display = 'none';
    failScreen.style.display = 'block';
  }, 1000);
  laughSound.play();
}

function loadNextQuestion() {
  // Reset background colors of answer buttons
  document.getElementById('A').style.backgroundColor = '';
  document.getElementById('B').style.backgroundColor = '';
  document.getElementById('C').style.backgroundColor = '';
  document.getElementById('D').style.backgroundColor = '';

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    getQuestion();
  } else {
    mainBodyElement.style.display = 'none';
    finishScreen.style.display = 'block';
    congratSound.play();
  }
}

let moneyCount = 0;

function updateMoneyCount() {
  if (moneyCount === 0) {
      moneyCount = 1;
  } else {
      moneyCount *= 10;
  }
  document.getElementById('money-count').textContent ='Money Won £' + moneyCount;
}

function restartGame() {
  window.location.href = 'index.html';
}
