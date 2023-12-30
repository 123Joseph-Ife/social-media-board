const cards = document.querySelectorAll(".card");
const overviews = document.querySelectorAll(".overview");
const heading = document.querySelector(".heading");
const overviewHeading = document.querySelector(".overview-heading");
const nums = document.querySelectorAll(".num");
const overviewNums = document.querySelectorAll(".overview-num");
const toggle = document.querySelector(".toggle label");
const body = document.body;
const overviewHeadings = document.querySelectorAll(".overview h3");
const followers = document.querySelectorAll(".followers");
const icons = document.querySelectorAll(".icon");
const mode = document.querySelector(".toggle");
const text = document.querySelector(".text p")

toggle.addEventListener("click", changeBackground);

function changeBackground() {
  cards.forEach((card) => {
    card.classList.toggle("active");
  });
  overviews.forEach((overview) => {
    overview.classList.toggle("active");
  });
  heading.classList.toggle("active");
  nums.forEach((num) => {
    num.classList.toggle("active");
  });
  overviewNums.forEach((overviewNum) => {
    overviewNum.classList.toggle("active");
  });
  body.classList.toggle("active");
  overviewHeading.classList.toggle("active");
  overviewHeadings.forEach((header) => {
    header.classList.toggle("active");
  });
  followers.forEach((follower) => {
    follower.classList.toggle("active");
  });
  icons.forEach((icon) => {
    icon.classList.toggle("active");
  });
  mode.classList.toggle("active");
  text.classList.toggle("active")
}
