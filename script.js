// Generate a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20; // Initialize the score
let highscore = 0;

const lblMessage = document.querySelector(".message");
const lblNumber = document.querySelector(".number");
const lblScore = document.querySelector(".score");
const lblHighscore = document.querySelector(".highscore");
const inpGuess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

// Function to display a message
function displayMessage(message) {
    lblMessage.textContent = message;
}

// Function to update the score
function updateScore() {
    lblScore.textContent = score;
}

// Function to reset the game
function resetGame() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    lblNumber.textContent = "?";
    lblMessage.textContent = "Start guessing...";
    lblScore.textContent = score;
    inpGuess.value = "";
    btnCheck.disabled = false;
}

// Event listener for the Check button
btnCheck.addEventListener("click", function () {
    const guess = Number(inpGuess.value);

    // Check if the guess is correct
    if (!guess) {
        displayMessage("Please enter a valid number!");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        lblNumber.textContent = secretNumber;
        btnCheck.disabled = true;
        // Update highscore if needed
        if (score > highscore) {
            highscore = score;
            lblHighscore.textContent = highscore;
        }
    } else {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        updateScore();
    }
});

// Event listener for the Again button
btnAgain.addEventListener("click", function () {
    resetGame();
    btnCheck.disabled = false;
});

// Initial setup
updateScore();
lblHighscore.textContent = highscore;


