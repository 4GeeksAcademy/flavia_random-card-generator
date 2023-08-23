/* eslint-disable */
import "bootstrap";
import "./style.css";

let myShuffleCards = document.getElementById("shuffleCards");

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

// Ejecutar inicialmente al cargar la página
updateCardDisplay();

//Llamo dentro del shuffle a la función de actualización para que la función se ejecute cada vez que hago click
myShuffleCards.addEventListener("click", function() {
  updateCardDisplay();
});
