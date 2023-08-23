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
    mySuitSpan.style.color = "red";
  } else {
    mySuitSpan.style.color = "black";
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
  console.log(mySuitSpan.textContent);
  console.log(myNumberSpan.innerHTML);
  return [mySuitSpan.textContent, myNumberSpan.innerHTML];
}

//Función para la actualización del contenido de las cartas
function updateCardDisplay() {
  let theTop = document.getElementById("topCard");
  let theNumber = document.getElementById("theContent");
  let theBottom = document.getElementById("bottomCard");

  let contentFunction = theContentOfTheCards();

  let suitSpan = document.createElement("div");
  suitSpan.textContent = contentFunction[0];
  let numberSpan = document.createElement("div");
  numberSpan.innerHTML = contentFunction[1];

  theTop.innerHTML = "";
  theTop.textContent = suitSpan.textContent;
  theNumber.innerHTML = "";
  theNumber.appendChild(numberSpan);
  theBottom.innerHTML = "";
  theBottom.textContent = suitSpan.textContent;
}

// Ejecutar inicialmente al cargar la página
updateCardDisplay();

//Llamo dentro del shuffle a la función de actualización para que la función se ejecute cada vez que hago click
myShuffleCards.addEventListener("click", function() {
  updateCardDisplay();
});
