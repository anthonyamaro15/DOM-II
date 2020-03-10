// Your code goes here

const logoH1 = document.querySelector(".logo-heading");
const header = document.querySelector(".main-navigation");
const links = document.querySelectorAll(".nav a");
const intro = document.querySelector(".intro p");
const body = document.querySelector("body");
const img1 = document.querySelector(".intro img");
const img2 = document.querySelectorAll(".img-content img");
const destination = document.querySelectorAll(".destination");

gsap.from(".nav-link", {
  duration: 1,
  opacity: 0,
  delay: 0.3,
  y: -100,
  stagger: 0.25
});

function navLinks(e) {
  e.preventDefault();
  e.stopPropagation();
}
/// event listeners
logoH1.addEventListener("mouseover", () => {
  logoH1.style.color = "red";
});

header.addEventListener("click", navLinks);

links.forEach(link => {
  link.addEventListener("click", navLinks);
});

intro.addEventListener("mouseout", () => {
  intro.style.backgroundColor = "lightblue";
});

img1.addEventListener("mouseenter", () => {
  img1.style.transform = "scale(1.2, 1.2)";
});

img1.addEventListener("mouseleave", () => {
  img1.style.transform = "scale(1,1)";
});

body.addEventListener("keydown", () => {
  body.style.backgroundColor = randomColor();
});

img2.forEach(im => {
  im.addEventListener("dblclick", () => {
    im.style.transform = "scale(1.3)";
  });
});

window.addEventListener("load", () => {
  body.style.transition = "all 0.5s ease";
});

destination.forEach(des => {
  des.addEventListener("click", () => {
    des.style.backgroundColor = randomColor();
  });
});

function random(num) {
  return Math.floor(Math.random() * num);
}

function randomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}
