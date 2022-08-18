let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, pcGuess, secretNumber) => {
  let compareHuman = Math.abs(secretNumber - humanGuess);
  let comparePC = Math.abs(secretNumber - pcGuess);
  if (compareHuman <= comparePC) return true;
  else return false;
};

const updateScore = (winner) => {
  if (winner === "human") humanScore += 1;
  else if (winner === "computer") computerScore += 1;
  return;
};

const advanceRound = () => {
  currentRoundNumber += 1;
  return;
};

const alert = (humanNumber) => {
  if (humanNumber >= 0 && humanNumber <= 9) return humanNumber;
  else return;
};
