let textElement = document.querySelector('.intro h1');
textElement.style.setProperty('--animate-duration', '3s');
let mainBodyElement = document.getElementById('main-body');

textElement.classList.add('animate__animated', 'animate__zoomInDown', 'animate__slower');

textElement.addEventListener('animationend', () => {
  // Hide intro screen
  document.querySelector('.intro').style.display = 'none';
  // Show main-body screen
  mainBodyElement.style.display = 'block';
});


let question = document.getElementById('question');
let choices = Array.from(document.getElementById('choice-text'));

let currentQuestion = 0;
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];