/* eslint-disable */
import "bootstrap";
import "./style.css";

//El objeto con los arrays de contenido
let myCard = {
  suit: ["♦", "♥", "♠", "♣"],
  numbers: [Math.floor(Math.random() * 9) + 2, "J", "A", "queen", "king"]
};

//Función para generar el contenido de las cartas
function theContentOfTheCards() {
  //Las imagenes para poder renderizarlas más fácilmente
  let theQueen = document.createElement("img");
  theQueen.src = "https://i.postimg.cc/d0qVV7pg/reina.jpg";
  theQueen.classList.add("img-modificada");

  let theKing = document.createElement("img");
  theKing.src = "https://i.postimg.cc/vm3HgYdT/rey3-1.jpg";
  theKing.classList.add("img-modificada");

  //Genero un index random para elegir un palo random y luego dependiendo del index agrego un color
  let indexSuit = Math.floor(Math.random() * myCard.suit.length);
  let suitContent = myCard.suit[indexSuit];
  let mySuitSpan = document.createElement("span");
  mySuitSpan.textContent = suitContent;

  if (indexSuit === 0 || indexSuit === 1) {
    mySuitSpan.classList.add("red-text");
  } else {
    mySuitSpan.classList.add("black-text");
  }

  //Genero un index random para elegir un número o una imagen
  let indexNumbers = Math.floor(Math.random() * myCard.numbers.length);
  let numbersContent = myCard.numbers[indexNumbers];
  let myNumberSpan = document.createElement("span");

  let theQueenClone = theQueen.cloneNode();
  let theKingClone = theKing.cloneNode();

  //Y si el contenido es queen o king adjunto una imagen al span
  if (numbersContent === "queen") {
    myNumberSpan.appendChild(theQueenClone);
  } else if (numbersContent === "king") {
    myNumberSpan.appendChild(theKingClone);
  } else {
    myNumberSpan.textContent = numbersContent;
  }
  return [mySuitSpan, myNumberSpan];
}

//Función para la actualización del contenido de las cartas
function updateCardDisplay() {
  let theTop = document.getElementById("topCard");
  let theNumber = document.getElementById("theContent");
  let theBottom = document.getElementById("bottomCard");

  let contentFunction = theContentOfTheCards();

  let suitSpan = document.createElement("div");
  suitSpan.appendChild(contentFunction[0].cloneNode(true));
  let numberSpan = document.createElement("div");
  numberSpan.appendChild(contentFunction[1].cloneNode(true));

  theTop.innerHTML = "";
  theTop.appendChild(suitSpan);
  theNumber.innerHTML = "";
  theNumber.appendChild(numberSpan);
  theBottom.innerHTML = "";
  theBottom.appendChild(suitSpan.cloneNode(true));
}

// Ejecutar inicialmente al cargar la página para que no aparezca una carta en blanco
updateCardDisplay();

let myShuffleCards = document.getElementById("shuffleCards");
//Llamo dentro del shuffle a la función de actualización para que la función se ejecute cada vez que hago click
myShuffleCards.addEventListener("click", function() {
  updateCardDisplay();
});

//Función para añadir una carta o en el lado izquierdo o derecho según la clase css que se introduzca como parametro
function addNewCard(positionClass) {
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.classList.add(positionClass);
  let newTopCard = document.createElement("div");
  newTopCard.classList.add("top");
  let newNumberCard = document.createElement("div");
  newNumberCard.classList.add("number");
  let newBottomCard = document.createElement("div");
  newBottomCard.classList.add("bottom");
  newCard.appendChild(newTopCard);
  newCard.appendChild(newNumberCard);
  newCard.appendChild(newBottomCard);

  let contentFunction = theContentOfTheCards();

  let suitSpan = document.createElement("div");
  suitSpan.appendChild(contentFunction[0].cloneNode(true));
  let numberSpan = document.createElement("div");
  numberSpan.appendChild(contentFunction[1].cloneNode(true));

  newTopCard.innerHTML = "";
  newTopCard.appendChild(suitSpan);
  newNumberCard.innerHTML = "";
  newNumberCard.appendChild(numberSpan);
  newBottomCard.innerHTML = "";
  newBottomCard.appendChild(suitSpan.cloneNode(true));

  document.body.appendChild(newCard);
}
let myAddCard = document.getElementById("addCard");
myAddCard.addEventListener("click", function() {
  addNewCard("rightNewCard");
});

let myAddTimer = document.getElementById("addCardTimer");
let intervalId = null; // Variable para almacenar el ID del intervalo

myAddTimer.addEventListener("click", function() {
  if (intervalId === null) {
    intervalId = setInterval(function() {
      addNewCard("leftNewCard");
    }, 1000);
  } else {
    clearInterval(intervalId); // Detener el intervalo si ya está en marcha
    intervalId = null;
  }
});
