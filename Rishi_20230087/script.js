let currentScreen = 'topic-selection';
let currentTopic = '';
let currentQuestionIndex = 0;
let score = 0;

const questions = {
  Physics: [
    { text: 'Magnetic field lines exits in circular loop', correct: true },
    { text: 'Nuclear reaction are the zeroth order reactions', correct: false }
  ],
  Chemistry: [
    { text: 'SN1 reaction is favourable in tertiary Alkyl halide', correct: true },
    { text: 'AgCl ppt is blue in colour', correct: false }
  ],
  Computer: [
    { text: 'this keyword in java is used to diiferentiate between actual parameters and formal parameters', correct: true },
    { text: 'Method overloading amd method overriding are same ', correct: false }
  ]
};

function showScreen(screen) {
  document.querySelector(`#${currentScreen}`).classList.remove('active');
  document.querySelector(`#${screen}`).classList.add('active');
  currentScreen = screen;
}

function selectTopic(topic) {
  currentTopic = topic;
  currentQuestionIndex = 0;
  score = 0;
  showScreen('quiz-questions');
  showQuestion();
}

function showQuestion() {
  const question = questions[currentTopic][currentQuestionIndex];
  document.querySelector('#question-text').innerText = question.text;
  document.querySelector('#question-number').innerText = `Question ${currentQuestionIndex + 1} of ${questions[currentTopic].length}`;
}

function answerQuestion(answer) {
  const question = questions[currentTopic][currentQuestionIndex];
  if (question.correct === answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentTopic].length) {
    showQuestion();
  } else {
    document.querySelector('#score').innerText = score;
    showScreen('final-score');
  }
}

function retry() {
  selectTopic(currentTopic);
}

function goHome() {
  showScreen('topic-selection');
}

// Initial setup
showScreen('topic-selection');
