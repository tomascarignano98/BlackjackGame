let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
  const number = Math.floor(Math.random() * 13) + 1;

  if (number > 10) return 10;
  if (number === 1) return 11;
  return number;
}

function startGame() {
  isAlive = true;

  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  cards = [firstCard, secondCard];

  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = "Cards: " + cards.join(" ");

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  const card = getRandomCard();
  cards.push(card);
  sum += card;

  renderGame();
}
