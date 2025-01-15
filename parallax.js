const card1 = document.querySelector(".craft-card-section-1");
const card2 = document.querySelector(".craft-card-section-2");
const card3 = document.querySelector(".craft-card-section-3");

const initialRotations = {
  card1: 15,
  card2: -15,
  card3: 5,
};

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  card1.style.transform = `rotate(${
    initialRotations.card1 + scrollPosition * 0.01
  }deg)`;
  card2.style.transform = `rotate(${
    initialRotations.card2 + scrollPosition * -0.01
  }deg)`;
  card3.style.transform = `rotate(${
    initialRotations.card3 + scrollPosition * 0.01
  }deg)`;
});
