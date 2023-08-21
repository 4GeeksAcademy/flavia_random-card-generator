/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let myShuffleCards = document.getElementById("shuffleCards");

function theContentOfTheCards() {
  //Las imagenes para poder renderizarlas más fácilmente
  let theQueen = document.createElement("img");
  theQueen.src = "https://i.postimg.cc/d0qVV7pg/reina.jpg";
  theQueen.classList.add("img-modificada");

  let theKing = document.createElement("img");
  theKing.src = "https://i.postimg.cc/vm3HgYdT/rey3-1.jpg";
  theKing.classList.add("img-modificada");

  //El objeto con los arrays de contenido
  let myCard = {
    suit: ["♦", "♥", "♠", "♣"],
    numbers: [Math.floor(Math.random() * 9) + 2, "J", "A", "queen", "king"]
  };

  //Genero un index random para elegir un contenido random en cada array
  let indexSuit = Math.floor(Math.random() * myCard.suit.length);
  let suitContent = myCard.suit[indexSuit];
  let indexNumbers = Math.floor(Math.random() * myCard.numbers.length);
  let numbersContent = myCard.numbers[indexNumbers];

  //Declaro los elementos top y bottom para los iconos y le agrego el contenido random anterior
  let topCard = document.getElementById("topCard");
  topCard.textContent = suitContent;
  let bottomCard = document.getElementById("bottomCard");
  bottomCard.textContent = suitContent;
  if (indexSuit === 0 || indexSuit === 1) {
    topCard.style.color = "red";
    bottomCard.style.color = "red";
  } else {
    topCard.style.color = "black";
    bottomCard.style.color = "black";
  }

  //Declaro el elemento del medio donde irá el contenido. Utilizo el condicional para agregar de forma específica si es una imagen.
  let middleCard = document.querySelector(".number");
  middleCard.innerHTML = "";
  if (indexNumbers === 3) {
    middleCard.appendChild(theQueen.cloneNode());
  } else if (indexNumbers === 4) {
    middleCard.appendChild(theKing.cloneNode());
  } else {
    middleCard.textContent = numbersContent;
  }
}
window.onload = theContentOfTheCards;
myShuffleCards.addEventListener("click", theContentOfTheCards);

/* CÓDIGO ANTERIOR. EL DE ARRIBA ES EL MEJORADO
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const cardClasses = ["♦", "♥", "♠", "♣"];
  const randomIndex = Math.floor(Math.random() * cardClasses.length);
  const randomContent = document.createTextNode(cardClasses[randomIndex]);

  let topCard = document.querySelector(".top");
  topCard.textContent = randomContent.textContent;
  let bottomCard = document.querySelector(".bottom");
  bottomCard.textContent = randomContent.textContent;

  if (randomIndex === 0 || randomIndex === 1) {
    topCard.classList.add("red-text");
    bottomCard.classList.add("red-text");
  } else {
    topCard.classList.add("black-text");
    bottomCard.classList.add("black-text");
  }

  const cardNumbers = [
    Math.floor(Math.random() * 9) + 2,
    "rey",
    "reina",
    "J",
    "A"
  ];
  const indexNumber = Math.floor(Math.random() * cardNumbers.length);
  const randomNumber = document.createTextNode(cardNumbers[indexNumber]);

  let numberCard = document.querySelector(".number");
  if (indexNumber === 1) {
    let imgElement = document.createElement("img");
    imgElement.src = "src/img/rey.jpg";
    imgElement.classList.add("img-modificada");
    numberCard.appendChild(imgElement);
  } else if (indexNumber === 2) {
    let imgElement = document.createElement("img");
    imgElement.src = "src/img/reina.jpg";
    imgElement.classList.add("img-modificada");
    numberCard.appendChild(imgElement);
  } else {
    numberCard.textContent = randomNumber.textContent;
  }
};

window.addCard = function addCard() {
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.classList.add("theNewCard");
  let topCard = document.createElement("div");
  topCard.classList.add("top");
  let numberCard = document.createElement("div");
  numberCard.classList.add("number");
  let bottomCard = document.createElement("div");
  bottomCard.classList.add("bottom");

  newCard.appendChild(topCard);
  newCard.appendChild(numberCard);
  newCard.appendChild(bottomCard);

  document.body.appendChild(newCard);
};
*/
