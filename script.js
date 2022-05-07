const slideBar = document.querySelector(".fa-bars");
const closeBar = document.querySelector(".fa-times");
const middleNav = document.querySelector(".middle-nav");

// let slideBarOpened = false;

slideBar.addEventListener("click", () => {
  middleNav.classList.toggle("slide-bar");
});

closeBar.addEventListener("click", () => {
  middleNav.classList.toggle("slide-bar");
});
