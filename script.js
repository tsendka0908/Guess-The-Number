let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

checkBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

function checkGuess() {
    const userGuess = Number(input.value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Enter a number between 1 and 100";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `Correct You guessed it in ${attempts} tries!`;
        disableGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high";
    } else {
        message.textContent = "Too low";
    }
}

function disableGame() {
    input.disabled = true;
    checkBtn.disabled = true;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    input.value = "";
    message.textContent = "";
    input.disabled = false;
    checkBtn.disabled = false;
}
