let firstCard = getRadonmCard();
let secondCard = getRadonmCard();
const cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

function getRadonmCard() {
  return Math.floor(Math.random() * 11) + 1;
}

function startGame() {
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
  const card = getRadonmCard();
  cards.push(card);
  sum += card;

  renderGame();
}
