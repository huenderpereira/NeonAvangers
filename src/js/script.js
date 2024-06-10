const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
let currentCard = 0;
const charactersList = document.getElementById("characters-list");

characters.forEach((character, index) => {
  const card = document.createElement("li");
  card.className = `card background-${index + 1}`;
  card.innerHTML = `
	  <h2 class="name">${character.name}</h2>
	  <img class="character-image" src="${character.image}" alt="${character.name}" />
	  <div class="description">
		<h3 class="title">Descrição</h3>
		<p class="text">${character.description}</p>
	  </div>
	`;
  charactersList.appendChild(card);
});

const cards = document.querySelectorAll(".card");
cards[currentCard].classList.add("selected");

btnNext.addEventListener("click", function () {
  const isLastCard = currentCard === cards.length - 1;
  if (isLastCard) return;
  cards[currentCard].classList.remove("selected");
  currentCard++;
  cards[currentCard].classList.add("selected");
});

btnBack.addEventListener("click", function () {
  const isFirstCard = currentCard === 0;
  if (isFirstCard) return;
  cards[currentCard].classList.remove("selected");
  currentCard--;
  cards[currentCard].classList.add("selected");
});
