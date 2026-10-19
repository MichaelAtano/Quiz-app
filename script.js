const questions = [
    {
        question: "Which club has won the most Premier League titles?",
        answers: [
            "Manchester United",
            "Liverpool",
            "Arsenal",
            "Chelsea"
        ],
        correctAnswer: "Manchester United"
    },

    {
        question: "Which club plays its home matches at Anfield?",
        answers: [
            "Liverpool",
            "Everton",
            "Manchester City",
            "Newcastle United"
        ],
        correctAnswer: "Liverpool"
    },

    {
        question: "Which player holds the Premier League record for most goals scored?",
        answers: [
            "Alan Shearer",
            "Wayne Rooney",
            "Harry Kane",
            "Thierry Henry"
        ],
        correctAnswer: "Alan Shearer"
    },

    {
        question: "Which club is nicknamed the 'Gunners'?",
        answers: [
            "Arsenal",
            "Chelsea",
            "Tottenham Hotspur",
            "West Ham United"
        ],
        correctAnswer: "Arsenal"
    },

    {
        question: "Which stadium is the home of Manchester United?",
        answers: [
            "Old Trafford",
            "Etihad Stadium",
            "Stamford Bridge",
            "Villa Park"
        ],
        correctAnswer: "Old Trafford"
    },

    {
        question: "Which club is known as the 'Blues' and plays at Stamford Bridge?",
        answers: [
            "Chelsea",
            "Everton",
            "Manchester City",
            "Leicester City"
        ],
        correctAnswer: "Chelsea"
    },

    {
        question: "Which club plays its home matches at the Etihad Stadium?",
        answers: [
            "Manchester City",
            "Manchester United",
            "Liverpool",
            "Aston Villa"
        ],
        correctAnswer: "Manchester City"
    },

   {
    question: "Which club did Thierry Henry play for in the Premier League?",
    answers: [
        "Arsenal",
        "Chelsea",
        "Liverpool",
        "Manchester United"
    ],
    correctAnswer: "Arsenal"
},

    {
        question: "Which club plays its home matches at St James' Park?",
        answers: [
            "Newcastle United",
            "Sunderland",
            "Leeds United",
            "Everton"
        ],
        correctAnswer: "Newcastle United"
    },

    {
        question: "Which Premier League club plays at Villa Park?",
        answers: [
            "Aston Villa",
            "West Ham United",
            "Crystal Palace",
            "Fulham"
        ],
        correctAnswer: "Aston Villa"
    }
];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answers button");
const nextButton = document.querySelector(".next-button");
const questionNumberElement = document.querySelector(".question-number");


let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false;

function showQuestion() {
    answerSelected = false;
const currentQuestion = questions[currentQuestionIndex];
questionNumberElement.textContent =
    "Question " + (currentQuestionIndex + 1) + " of " + questions.length;

    questionElement.textContent = currentQuestion.question;

    answerButtons.forEach(function(button, index) {
        button.textContent = currentQuestion.answers[index];

        button.disabled = false;
        button.style.backgroundColor = "white";
        button.style.color = "black";

        button.onclick = function() {
            answerSelected = true;
            if (button.textContent === currentQuestion.correctAnswer) {
                button.style.backgroundColor = "green";
                button.style.color = "white";
                score++;
            } else {
                button.style.backgroundColor = "red";
                button.style.color = "white";
            }

            answerButtons.forEach(function(answerButton) {
                answerButton.disabled = true;
            });
        };
    });
}

showQuestion();



nextButton.onclick = function() {
    if (!answerSelected) {
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent =
            "Quiz complete! Your score: " +
            score + " out of " + questions.length;

        questionNumberElement.textContent = "Quiz finished!";
        document.querySelector(".restart-button").style.display = "inline-block";

        answerButtons.forEach(function(button) {
            button.style.display = "none";
        });

        nextButton.style.display = "none";
    }
};


const restartButton = document.querySelector(".restart-button");

restartButton.onclick = function() {
    currentQuestionIndex = 0;
    score = 0;

    answerButtons.forEach(function(button) {
        button.style.display = "block";
    });

    nextButton.style.display = "inline-block";
    restartButton.style.display = "none";

    showQuestion();
};
