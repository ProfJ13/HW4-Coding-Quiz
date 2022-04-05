var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var time = questions.length * 10;
var timerId;

function beginQuiz() {
    var landingPage = document.getElementById("landing-page");
    landingPage.setAttribute("class", "landing hide");
  
    questionsEl.setAttribute("class", " ");

    timerId = setInterval(function(){
      countdown();
    }, 1000);

    timerEl.textContent = time;
  
  }
  
  function countdown() {
    timerEl.textContent = time;
    time--;
  
  }
  