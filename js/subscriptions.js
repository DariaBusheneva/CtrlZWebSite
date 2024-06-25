document.addEventListener("DOMContentLoaded", function () {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      navBtns.forEach((b) => b.classList.remove("active", "rotated"));
      this.classList.add("active");
      if (this.id === "subscriptions") {
        this.classList.add("rotated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    'images/first_change.png',
    'images/second_change.png',
    'images/third_change.png'
  ];

  let currentIndex = 0;
  const backgroundImageElement = document.getElementById('background-image');

  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundImageElement.style.backgroundImage = `url(${images[currentIndex]})`;
  }

  setInterval(changeBackgroundImage, 500);
});
