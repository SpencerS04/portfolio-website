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
const greenClass = document.querySelectorAll('.text-terminal, .border-terminal');

//Functions for green toggle



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
