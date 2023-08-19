/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
    '<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHdR-DiLOvADl0me4JGJOhsPZEgNVMogG53a48eNi8W3DanH72">',
    "J",
    "A"
  ];
  const indexNumber = Math.floor(Math.random() * cardNumbers.length);
  const randomNumber = document.createTextNode(cardNumbers[indexNumber]);

  let numberCard = document.querySelector(".number");
  if (indexNumber === 1) {
    let imgElement = document.createElement("img");
    imgElement.src =
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHdR-DiLOvADl0me4JGJOhsPZEgNVMogG53a48eNi8W3DanH72";
    numberCard.appendChild(imgElement);
  } else {
    numberCard.textContent = randomNumber.textContent;
  }
};
