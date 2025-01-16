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
    initialRotations.card1 + scrollPosition * 0.04
  }deg)`;
  card2.style.transform = `rotate(${
    initialRotations.card2 + scrollPosition * -0.04
  }deg)`;
  card3.style.transform = `rotate(${
    initialRotations.card3 + scrollPosition * 0.04
  }deg)`;
});

// cup section
document.addEventListener("scroll", () => {
  const container = document.querySelector(
    ".crafter-universe-right--image-container"
  );
  const yellowCup = document.querySelector(".crafter-universe-right--image-2");

  const containerRect = container.getBoundingClientRect();

  if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
    const scrollProgress =
      (window.innerHeight - containerRect.top) / window.innerHeight;

    yellowCup.style.transform = `translate(-${scrollProgress * 50}px, -${
      scrollProgress * 50
    }px) rotate(-${scrollProgress * 50}deg)`;
  } else {
    yellowCup.style.transform = "translateY(0)";
  }
});
