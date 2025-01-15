// Select the card sections
const card1 = document.querySelector(".craft-card-section-1");
const card2 = document.querySelector(".craft-card-section-2");
const card3 = document.querySelector(".craft-card-section-3");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  card1.style.transform = `rotate(${scrollPosition * 0.01}deg) `;
  card2.style.transform = `rotate(${scrollPosition * -0.01}deg)`;
  card3.style.transform = `rotate(${scrollPosition * 0.01}deg)`;
});
