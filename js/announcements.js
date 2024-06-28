document.addEventListener("DOMContentLoaded", function () {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      navBtns.forEach((b) => b.classList.remove("active", "rotated"));
      this.classList.add("active");
      if (this.id === "announcements") {
        this.classList.add("rotated");
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const navBtns = document.querySelectorAll(".nav-btn");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const carouselNumber = document.querySelector(".number-circle");
  const carouselContent = document.querySelector(".carousel-content2");
  const bottomContentTitle = document.querySelector(".bottom-content h1");
  const bottomContentDescription = document.querySelector(".bottom-content p");
  let currentIndex = 0;

  const carouselData = [
    { number: "1", title: "КИНОПОКАЗ", description: "CTRL Z приглашает вас на уникальный кинопоказ, где каждый зритель может стать режиссером и менять неудачные сюжетные повороты. На выбор будут три кинопоказа: ужасы, мультфильмы и комедии.", bottomTitle: "КИНОПОКАЗ", bottomDescription: "25.05 19.00" },
    { number: "1", title: "КИНОПОКАЗ", description: "CTRL Z приглашает вас на уникальный кинопоказ, где каждый зритель может стать режиссером и менять неудачные сюжетные повороты. На выбор будут три кинопоказа: ужасы, мультфильмы и комедии.", bottomTitle: "КИНОПОКАЗ", bottomDescription: "25.05 19.00" },
    { number: "1", title: "КИНОПОКАЗ", description: "CTRL Z приглашает вас на уникальный кинопоказ, где каждый зритель может стать режиссером и менять неудачные сюжетные повороты. На выбор будут три кинопоказа: ужасы, мультфильмы и комедии.", bottomTitle: "КИНОПОКАЗ", bottomDescription: "25.05 19.00" },
    { number: "2", title: "МАСТЕР-КЛАСС", description: "Вечер ностальгии не о том, чтобы исправлять прошлые ошибки, а скорее о том, чтобы ценить моменты. Мы используем технологии, чтобы оживить воспоминания.", bottomTitle: "МАСТЕР-КЛАСС", bottomDescription: "28.05 20.00" },
    { number: "2", title: "МАСТЕР-КЛАСС", description: "Вечер ностальгии не о том, чтобы исправлять прошлые ошибки, а скорее о том, чтобы ценить моменты. Мы используем технологии, чтобы оживить воспоминания.", bottomTitle: "МАСТЕР-КЛАСС", bottomDescription: "28.05 20.00" },
    { number: "2", title: "МАСТЕР-КЛАСС", description: "Вечер ностальгии не о том, чтобы исправлять прошлые ошибки, а скорее о том, чтобы ценить моменты. Мы используем технологии, чтобы оживить воспоминания.", bottomTitle: "МАСТЕР-КЛАСС", bottomDescription: "28.05 20.00" },
    { number: "2", title: "МАСТЕР-КЛАСС", description: "Вечер ностальгии не о том, чтобы исправлять прошлые ошибки, а скорее о том, чтобы ценить моменты. Мы используем технологии, чтобы оживить воспоминания.", bottomTitle: "МАСТЕР-КЛАСС", bottomDescription: "28.05 20.00" },
    { number: "3", title: "ВЕЧЕР НОСТАЛЬГИИ", description: "Мастер-класс по рисованию, на котором можно не бояться испортить белый лист бумаги. Это уникальное событие, где каждый участник может открыть в себе творческий потенциал без страха сделать ошибку.", bottomTitle: "ВЕЧЕР НОСТАЛЬГИИ", bottomDescription: "30.05 18.00" },
    { number: "3", title: "ВЕЧЕР НОСТАЛЬГИИ", description: "Мастер-класс по рисованию, на котором можно не бояться испортить белый лист бумаги. Это уникальное событие, где каждый участник может открыть в себе творческий потенциал без страха сделать ошибку.", bottomTitle: "ВЕЧЕР НОСТАЛЬГИИ", bottomDescription: "30.05 18.00" },
    { number: "3", title: "ВЕЧЕР НОСТАЛЬГИИ", description: "Мастер-класс по рисованию, на котором можно не бояться испортить белый лист бумаги. Это уникальное событие, где каждый участник может открыть в себе творческий потенциал без страха сделать ошибку.", bottomTitle: "ВЕЧЕР НОСТАЛЬГИИ", bottomDescription: "30.05 18.00" },
    { number: "3", title: "ВЕЧЕР НОСТАЛЬГИИ", description: "Мастер-класс по рисованию, на котором можно не бояться испортить белый лист бумаги. Это уникальное событие, где каждый участник может открыть в себе творческий потенциал без страха сделать ошибку.", bottomTitle: "ВЕЧЕР НОСТАЛЬГИИ", bottomDescription: "30.05 18.00" }
  ]
  function updateSlider() {
    sliderItems.forEach((item, index) => {
      item.classList.remove("active");
      if (index === currentIndex) {
        item.classList.add("active");
      }
    });


    carouselNumber.textContent = carouselData[currentIndex].number;
    const h1Element = carouselContent.querySelector("h1");
    h1Element.textContent = carouselData[currentIndex].title;
    const pElement = carouselContent.querySelector("p");
    pElement.innerHTML = carouselData[currentIndex].description;


    

    if (window.innerWidth <= 1366 && window.innerHeight <= 768) {
      if (carouselData[currentIndex].number === "2") {
        h1Element.style.width = "72%";
      } else if (carouselData[currentIndex].number === "3") {
        h1Element.style.width = "94%";
      } else {
        h1Element.style.width = "50%";
      }
    }

    else if (window.innerWidth === 1440 && window.innerHeight === 780) {
      if (carouselData[currentIndex].number === "2") {
        h1Element.style.width = "69%";
      } else if (carouselData[currentIndex].number === "3") {
        h1Element.style.width = "90%";
      } else {
        h1Element.style.width = "50%";
      }
    }

    else if (window.innerWidth <= 1440 && window.innerHeight <= 900) {
      if (carouselData[currentIndex].number === "2") {
        h1Element.style.width = "80%";
      } else if (carouselData[currentIndex].number === "3") {
        h1Element.style.width = "104%";
      } else {
        h1Element.style.width = "50%";
      }
    }
    else if (window.innerWidth <= 1920 && window.innerHeight <= 1080) {
    if (carouselData[currentIndex].number === "2") {
      h1Element.style.width = "70%";
    } else if (carouselData[currentIndex].number === "3") {
      h1Element.style.width = "91%";
    } else {
      h1Element.style.width = "50%";
    }}

    

 
    const bottomOverlay = document.querySelector(".bottom-overlay");
    if (window.innerWidth <= 768 && window.innerHeight <= 1024) {
      if (carouselData[currentIndex].number === "1") {
        bottomOverlay.style.width = "24vw";
        bottomOverlay.style.left = "57%";
        bottomOverlay.style.bottom = "41%";
      } else if (carouselData[currentIndex].number === "2") {
        bottomOverlay.style.width = "31vw";
        bottomOverlay.style.left = "58%";
        bottomOverlay.style.bottom = "41%";
      } else if (carouselData[currentIndex].number === "3") {
        bottomOverlay.style.width = "39vw";
        bottomOverlay.style.left = "60%";
        bottomOverlay.style.bottom = "41%";
      }
    }
    else if (window.innerWidth <= 1440 && window.innerHeight <= 900) {
      if (carouselData[currentIndex].number === "1") {
        bottomOverlay.style.width = "23vw";
        bottomOverlay.style.left = "46%";
      } else if (carouselData[currentIndex].number === "2") {
        bottomOverlay.style.width = "28vw";
        bottomOverlay.style.left = "48%";
      } else if (carouselData[currentIndex].number === "3") {
        bottomOverlay.style.width = "31vw";
        bottomOverlay.style.left = "51%";
        bottomOverlay.style.bottom = "24%";
      }
    }
    else if (window.innerWidth <= 1920 && window.innerHeight <= 1080) {
    if (carouselData[currentIndex].number === "1") {
      bottomOverlay.style.width = "20vw";
      bottomOverlay.style.left = "46%";
      bottomOverlay.style.bottom = "21%";
    } else if (carouselData[currentIndex].number === "2") {
      bottomOverlay.style.width = "24vw";
      bottomOverlay.style.left = "44%";
      bottomOverlay.style.bottom = "21%";
    } else if (carouselData[currentIndex].number === "3") {
      bottomOverlay.style.width = "31vw";
      bottomOverlay.style.left = "51%";
      bottomOverlay.style.bottom = "21%";
    }}

    

    if (window.innerWidth <= 768 && window.innerHeight <= 1024) {
      if (carouselData[currentIndex].number === "2") {
        h1Element.style.width = "61%";
      } else if (carouselData[currentIndex].number === "3") {
        h1Element.style.width = "80%";
      } else {
        h1Element.style.width = "50%";
      }
    }


    bottomContentTitle.textContent = carouselData[currentIndex].bottomTitle;
    bottomContentDescription.textContent = carouselData[currentIndex].bottomDescription;
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
