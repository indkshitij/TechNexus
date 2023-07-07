// Scroll Progress Bar
const progressBar = document.querySelector(".progressBar");

window.onscroll = function () {
  const totalHeight = document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  let percentageScroll = (scrollY / (totalHeight - clientHeight)) * 100;
  if (percentageScroll <= 1) {
    progressBar.style.width = "100%";
  } else {
    progressBar.style.width = percentageScroll + "%";
  }
};

// Responsive Navbar
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const navLink = document.querySelector(".navlink");

menuBtn.addEventListener("click", () => {
  navLink.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLink.classList.remove("active");
});

