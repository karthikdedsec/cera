document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye-ret");
  eyes.forEach((eye) => {
    const pupil = eye.querySelector(".eye-pupil");
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    // Calculate angle between mouse pointer and eye center
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

    // Define max movement for the pupil to stay inside the eye-ret
    const maxMovementX = rect.width / 2 - pupil.offsetWidth / 2;
    const maxMovementY = rect.height / 2 - pupil.offsetHeight / 2;

    // Calculate new pupil position within the clamped range
    const pupilX = Math.cos(angle) * Math.min(maxMovementX, maxMovementY);
    const pupilY = Math.sin(angle) * Math.min(maxMovementX, maxMovementY);

    // Apply the new position to the pupil
    pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
  });
});
