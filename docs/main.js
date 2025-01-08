//Variables for the project carosel
const cards = document.getElementById("card-list");
const infoList = document.getElementById("info-list");
const card = document.querySelector(".card");
const cardInfo = document.querySelector(".card-info");
const backButton = document.getElementById("carosel-back");
const nextButton = document.getElementById("carosel-next");

//Variables for typing animation
const welcome = document.getElementById("welcome-header");

//Variables for green toggle
var tTerm = document.getElementsByClassName("text-terminal");
var bTerm = document.getElementsByClassName("t-border");
var tTermW = document.getElementsByClassName("text-white");
var bTermW = document.getElementsByClassName("t-border-white");
const greenCheck = document.getElementById("green-switch");

//Functions for green toggle
greenCheck.addEventListener("change", () => {
  if (!greenCheck.checked) {
    [...tTerm].forEach((c) => {
      c.className += " text-white";
      c.classList.remove("text-terminal");
    });
    [...bTerm].forEach((c) => {
      c.className += " t-border-white";
      c.classList.remove("t-border");
    });
  } else {
    [...tTermW].forEach((c) => {
      c.className += " text-terminal";
      c.classList.remove("text-white");
    });
    [...bTermW].forEach((c) => {
      c.className += " t-border";
      c.classList.remove("t-border-white");
    });
  }
});

//Functions for typing animation
welcome.addEventListener("animationend", () => {
  welcome.classList.remove("animate-typing");
  welcome.classList.add("animate-blinking");
});

//Project carosel functions
backButton.addEventListener("click", () => {
  const cardWidth = card.clientWidth;
  const infoWidth = cardInfo.clientWidth;
  cards.scrollLeft -= cardWidth;
  infoList.scrollLeft -= infoWidth;
});

nextButton.addEventListener("click", () => {
  const cardWidth = card.clientWidth;
  const infoWidth = cardInfo.clientWidth;
  cards.scrollLeft += cardWidth;
  infoList.scrollLeft += infoWidth;
});
