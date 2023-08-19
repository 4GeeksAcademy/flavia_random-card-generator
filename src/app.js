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
};
