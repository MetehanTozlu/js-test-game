const quizForm = document.getElementById('quiz-form');
const questionElement = document.getElementById('question');
const labels = document.querySelectorAll('label');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const errorText = document.getElementById('errorText');

const questions = [
  {
    question: "JavaScript'te IIFE, ne anlama gelir?",
    options: [' İşlev içi ifade etkileşimi ', ' İç içe geçmiş fonksiyon ifadesi', 'Hemen çağrılan fonksiyon ifadesi', 'İteratif fonksiyon ifadesi'],
    answer: "C"
  },

  {
    question: "JavaScript'te bir döngüden çıkmak için hangi anahtar kelimeyi kullanabilirsiniz?",
    options: ['break', 'exit', 'continue', 'stop'],
    answer: "A"
  },

  {
    question: "HTML de Javascript hangi kod blokları arasına yazılır?",
    options: ['<javascript>', '<scripting>', '<js>', '<script>'],
    answer: "D"
  },

  {
    question: "Hangi teknoloji Facebook tarafından geliştirilmektedir?",
    options: ['Django', 'Angular', 'JQuery', 'React'],
    answer: "D"
  },

  {
    question: "JavaScript'te değişken tanımlamak için hangi anahtar kelime kullanılır?",
    options: ['var', 'let', 'const', 'Hepsi'],
    answer: "D"
  },

  {
    question: "JavaScript'te bir dizinin uzunluğunu almak için hangi yöntem kullanılır?",
    options: ['size()', 'length()', 'count()', 'index()'],
    answer: "B"
  },

  {
    question: "Hangisinde while döngüsü doğru kullanılmıştır?",
    options: ['while (i<10;i++)', 'while (i<10)', 'while (i=10)', 'while i=1 to 10'],
    answer: "B"
  },

  {
    question: "Aşağıdakilerden hangisi değişken ismi olabilir?",
    options: ['case', '2adJava', 'ad soyad', 'adSoyad'],
    answer: "D"
  },

  {
    question: "Hangi operatör eşitlik kontrolü yapmak için kullanılır?",
    options: ['==', '<>', '**', '++'],
    answer: "A"
  },

  {
    question: "JavaScript'te bir fonksiyon tanımlamak için hangi sözdizelini kullanırız?",
    options: ['function myFunction()', 'def myFunction()', 'sub myFunction()', 'void myFunction()'],
    answer: "A"
  }

];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQ = questions[currentQuestion];
  questionElement.textContent = currentQ.question;
  labels[0].textContent = currentQ.options[0];
  labels[1].textContent = currentQ.options[1];
  labels[2].textContent = currentQ.options[2];
  labels[3].textContent = currentQ.options[3];
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      errorText.textContent = 'Lütfen soruyu boş bırakmayınız.';
      return;
    }
  
    const userAnswer = selectedOption.value;
    const currentQ = questions[currentQuestion];
    const correctAnswer = currentQ.answer;
  
    if (userAnswer === correctAnswer) {
      score += 10;
    }
  
    currentQuestion++;
    selectedOption.checked = false;
    errorText.textContent = '';
  
    if (currentQuestion === questions.length) {
      showResult();
    } else {
      loadQuestion();
    }
  }
  
  loadQuestion();
  submitBtn.addEventListener('click', checkAnswer);
  
  
  function showResult() {
    quizForm.style.display = 'none';
    result.style.display = 'block';
  
    scoreElement.textContent = `Puanınız: ${score}`;
  
    if (score >= 70) {
      messageElement.textContent = 'Testi Geçtiniz!';
    } else {
      messageElement.textContent = 'Testi Geçemediniz.';
    }
  }
  
  loadQuestion();
  submitBtn.addEventListener('click', checkAnswer);