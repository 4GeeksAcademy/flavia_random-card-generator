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

  return [mySuitSpan.textContent, myNumberSpan.innerHTML];
}

let theTop, theNumber, theBottom, contentFunction;

window.onload = function() {
  theTop = document.getElementById("topCard");
  theNumber = document.getElementById("theContent");
  theBottom = document.getElementById("bottomCard");
  contentFunction = theContentOfTheCards();

  myShuffleCards.addEventListener("click", function() {
    let suitSpan = document.createElement("div");
    suitSpan.textContent = contentFunction[0];
    console.log(suitSpan);
    let numberSpan = document.createElement("div");
    numberSpan.innerHTML = contentFunction[1];
    console.log(numberSpan);

    theTop.appendChild(suitSpan);
    theNumber.appendChild(numberSpan);
    theBottom.appendChild(suitSpan.cloneNode());
  });
};
