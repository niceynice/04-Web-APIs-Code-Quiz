var currentQuestionIndex = 0;
var startButton = document.getElementById("start");
var choicesEl = document.getElementById("choices");
var questionEL = document.getElementById("questions");
var feedbackEl = document.getElementById("feedback");
// Id time or timer?
// var timerEl = ducument.getElementById("timer");
var time = 60;
var timerID;
var initials;

function clockTick() {
    time--;
    timerEl.textContent = time

    if (time <+ 0) {
        endGame()
    }
}

function startQuiz() {
    for (var i =0; i < questions.length; i++) {
        console.log(questions[0].choices[i])
    }
    //hide start div button
    var startScreen = document.getElementById("start-screen")
    //startScreen.setAttribute("class", "hide");
    //timer code here
    timerId = setInterval(clockTick, 1000);
    getQuestion();
}

startButton.onclick = startQuiz;


function getQuestion() {
    var questionScreen = document.getElementById("questions");
    questionScreen.removeAttribute("class")
    var currentQuestion = questions[currentQuestionIndex];
    var titleEL = document.getElementById("question-title");
    titleEL.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(function(choice, i) {
        var optionButton = document.createElement("button")
        optionButton.setAttribute("class", "choice");
        optionButton.setAttribute("value", choice)
        optionButton.textContent = choice;
        optionButton.onclick = answerClick;
        choicesEl.appendChild(optionButton)

    })

}

function answerClick() {
    if (this.value !== questions[currentQuestionIndex]) {
        feedbackEl.textContent = "Wrong."
    }
    else {
        feedbackEl.textContent = "Correct"
    }
    currentQuestionIndex++
    if (currentQuestionIndex === questions.length) {
        console.log("Game Over");
        endGame();
    }
    else {
        getQuestion();
    }

}

// function endGame( {
//     feedbackEl.textContent = "game over";
//     clearInterval(timerID);
// })


function submitInitials() {
    var initials = initialsEl.value.trim();
    var highscores = [] || JSON.parse(window.localStorage.getItem("highscores"))
    highscores.push(userScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores))

    var endScreen = document.getElementById("end-screen");
    endScreen.setAttribute("class", "hide")

    var leaderboardScreen = document.getElementById()
}