document.addEventListener("DOMContentLoaded", function () {
    const navBtns = document.querySelectorAll(".nav-btn");

    navBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            navBtns.forEach((b) => b.classList.remove("active", "rotated"));
            this.classList.add("active");
            if (this.id === "center") {
                this.classList.add("rotated");
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let startY = 0;


    window.addEventListener("wheel", function (event) {
        if (event.deltaY < 0) {
            window.location.href = "center.html"; 
        }
    });


    window.addEventListener("touchstart", function (event) {
        startY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", function (event) {
        let endY = event.changedTouches[0].clientY;
        if (startY < endY - 50) {
            window.location.href = "center.html"; 
        }
    });
});

// слайдер

document.addEventListener("DOMContentLoaded", function () {
    const navBtns = document.querySelectorAll(".nav-btn");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    let currentIndex = 0;
  
    function updateSlider() {
      sliderItems.forEach((item, index) => {
        if (index === currentIndex) {
          item.style.transform = 'translateX(0)';
          item.style.zIndex = 2;
        } else if (index < currentIndex) {
          item.style.transform = 'translateX(-100%)';
          item.style.zIndex = 1;
        } else {
          item.style.transform = 'translateX(100%)';
          item.style.zIndex = 0;
        }
      });
    }
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      updateSlider();
    });
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      updateSlider();
    });
  
    updateSlider();
  
    navBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        navBtns.forEach((b) => b.classList.remove("active", "rotated"));
        this.classList.add("active");
        if (this.id === "center") {
          this.classList.add("rotated");
        }
      });
    });
  });
  