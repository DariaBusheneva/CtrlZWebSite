document.addEventListener("DOMContentLoaded", function () {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      navBtns.forEach((b) => b.classList.remove("active", "rotated"));
      this.classList.add("active");
      if (this.id === "about-us")  {
        this.classList.add("rotated");
      }
    });
  });
});

// карусель

document.addEventListener("DOMContentLoaded", function () {
  const navBtns = document.querySelectorAll(".nav-btn");
  const items = document.querySelectorAll(".carousel-item");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const carouselNumber = document.querySelector(".number-circle");
  const carouselContent = document.querySelector(".carousel-content");
  let currentIndex = 0;

  const carouselData = [
    {
      number: "1",
      title: "СДЕЛАЙТЕ ШАГ НАЗАД, ЧТОБЫ НАЧАТЬ СНАЧАЛА",
      description: "ИСПРАВЛЯЙТЕ ОШИБКИ ЛЮБОГО УРОВНЯ СЛОЖНОСТИ С CTRL Z",
    },
    {
      number: "2",
      title: "КАК РАБОТАЕТ?",
      description: `КАК РАБОТАЕТ НАШ СЕРВИС <a href="https://dariabusheneva.github.io/CtrlZWebPoster/" target="_blank">
                    <img src="images/Link.svg" alt="info" style="width: 4.5vw; height: auto; vertical-align: middle;
                    margin-left: 10%">
                    </a>`,
    },
    {
      number: "3",
      title: "ЗАПИСЬ НА ПРИЕМ В ЦЕНТР",
      description:
        "ДЛЯ ПРОВЕДЕНИЯ ПРОЦЕДУРЫ ОТМЕНЫ НУЖНО ЗАПИСАТЬСЯ НА ПРИЁМ В ЦЕНТР CTRL Z",
    },
    {
      number: "4",
      title: "ПОДГОТОВКА К ПРОЦЕДУРЕ И ЕЕ ПРОВЕДЕНИЕ",
      description:
        "В НАШЕМ ЦЕНТРЕ ВАМ СДЕЛАЮТ ПРОЦЕДУРУ ПОДКЛЮЧЕНИЯ ПОДПИСКИ ДЛЯ ОТМЕНЫ ОШИБОК",
    },
    {
      number: "5",
      title: "ПОДРОБНАЯ ИНСТРУКЦИЯ ПРОЦЕССА ШАГА НАЗАД",
      description: `<a href="https://dariabusheneva.github.io/CtrlZWebPoster/" target="_blank">
                    <img src="images/Link.svg" alt="info" style="width: 4.5vw; height: auto;">
                    </a>`,
    },
  ];

  navBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      navBtns.forEach((b) => b.classList.remove("active", "rotated"));
      this.classList.add("active");
      if (this.id === "about-us") {
        this.classList.add("rotated");
      }
    });
  });

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove("prev", "next", "active");
      if (index === currentIndex) {
        item.classList.add("active");
      } else if (index === (currentIndex - 1 + items.length) % items.length) {
        item.classList.add("prev");
      } else if (index === (currentIndex + 1) % items.length) {
        item.classList.add("next");
      }
    });

    // Обновление текста и номера
    carouselNumber.textContent = carouselData[currentIndex].number;
    const h1Element = carouselContent.querySelector("h1");
    h1Element.textContent = carouselData[currentIndex].title;
    const pElement = carouselContent.querySelector("p");
    pElement.innerHTML = carouselData[currentIndex].description;

    // Изменение ширины блока h1 для number 2
    if (carouselData[currentIndex].number === "2") {
      h1Element.style.width = "30%";
      h1Element.style.marginLeft = "36%";
      pElement.style.marginTop = "24%";
    } else {
      h1Element.style.width = "50%";
      h1Element.style.marginLeft = "25%";
      pElement.style.marginTop = "20%";
    }

    if (carouselData[currentIndex].number === "5") {
      pElement.style.width = "8%";
      pElement.style.padding = "0%";
      pElement.style.marginLeft = "46.5%";
    } else if (carouselData[currentIndex].number === "2") {
      pElement.style.padding = "0%";
    } else {
      pElement.style.width = "50%";
      pElement.style.marginLeft = "25%";
      pElement.style.padding = "1%";
      // pElement.style.marginTop = "15%";
    }

    if (carouselData[currentIndex].number === "3") {
      pElement.style.width = "38%";
      pElement.style.marginLeft = "31%";
    }

  }


  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  updateCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
  const navBtns = document.querySelectorAll(".nav-btn");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  let currentIndex = 0;

  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      item.classList.remove("prev", "next", "active");
      if (index === currentIndex) {
        item.classList.add("active");
      } else if (
        index ===
        (currentIndex - 1 + carouselItems.length) % carouselItems.length
      ) {
        item.classList.add("prev");
      } else if (index === (currentIndex + 1) % carouselItems.length) {
        item.classList.add("next");
      }
    });
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });

  navBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      navBtns.forEach((b) => b.classList.remove("active", "rotated"));
      this.classList.add("active");
      if (this.id === "about-us") {
        this.classList.add("rotated");
      }
    });
  });

  updateCarousel();
});
