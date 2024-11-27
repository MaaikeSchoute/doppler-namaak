// JavaScript Document
console.log("hi");

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
});