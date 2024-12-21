const cards = document.getElementById("card-list");
const infoList = document.getElementById("info-list");
const card = document.querySelector(".card");
const cardInfo = document.querySelector(".card-info");
const backButton = document.getElementById("carosel-back");
const nextButton = document.getElementById("carosel-next");

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
