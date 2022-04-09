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
  
    // Questions and answers
    var questions = [
      {
        question: "C-3P0 is fluent in how many languages?",
        options: ["3 million", "10 million", "60 million", "100 million"],
        answer: "60 million"
      },
      {
        question:
          "What is the name of the Wookiee homeworld?",
          options: ["Jakku", "Kashyyyk", "Tatooine", "Yavin 4"],
        answer: "Kashyyyk"
      },
      {
        question: "What species stole the plans to the Death Star?",
        options: ["Bothans", "Quarren", "Ewoks", "Rodians"],
        answer: "Bothans"
      },
      {
        question:
          "Who was Count Dooku’s padawan before he left the Jedi?",
          options: ["Yoda", "Obi-Wan Kenobi", "Qui-Gon Jinn", "Mace Windu"],
        answer: "Qui-Gon Jinn"
      },
      {
        question: "What is the substance that powers the lightsabers?",
        options: ["Kyber Crystals", "Durablast", "Cerlin", "Carbonite"],
        answer: "Kyber Crystals"
      },
      {
        question:
          "What alien race does Admiral Ackbar belong to?",
          options: ["Duros", "Ithorian", "Gungan", "Mon Calamari"],
        answer: "Mon Calamari"
      },
      {
        question: "What is the name of Anakin’s step brother?",
        options: ["Bib Fortuna", "Owen Lars", "Dexter Jettster", "Bail Organa"],
        answer: "Owen Lars"
      },
      {
        question: "What odds does C-3P0 give Han for successfully navigating the asteroid field?",
        options: ["3,720 to 1", "12,436 to 1", "58,940 to 1", "1.36 million to 1"],
        answer: "3,720 to 1"
      },
      {
        question: "What did George Lucas originally name the hero of his space fantasy movie?",
        options: ["Deak Starkiller", "Ben Quadrinaros", "Anakin Solo", "Tyber Zann"],
        answer: "Deak Starkiller"
      },
      {
        question: "What character did Carrie Fisher’s daughter Billie Lourd play in Star Wars?",
        options: ["Queen Jamillia", "Aurra Sing", "Chirrut Îmwe", "Lieutenant Kaydel Connix"],
        answer: "Lieutenant Kaydel Connix"
      }
    ];