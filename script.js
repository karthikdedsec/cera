const burgerBtn = document.querySelector(".burger-nav-btn");
const navigation = document.querySelector(".burger-nav");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  if (burgerBtn.classList.contains("active")) {
    navigation.style.transform = `translateX(0) translateY(-50%)`;
    burgerBtn.style.position = `fixed`;
    burgerBtn.style.top = `3rem`;
    burgerBtn.style.right = `10.7rem`;
    document.body.style.overflow = "hidden";
  } else {
    navigation.style.transform = `translateX(-100%) translateY(-50%)`;
    burgerBtn.style.position = `relative`;
    burgerBtn.style.top = `0`;
    burgerBtn.style.right = `0`;
    document.body.style.overflow = "auto";
  }
});
