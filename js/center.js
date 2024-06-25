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
  const cross1 = document.getElementById('cross1');
  const cross2 = document.getElementById('cross2');
  const cross3 = document.getElementById('cross3');
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');

  // Установите начальное состояние для всех текстовых блоков
  text1.style.display = 'none';
  text2.style.display = 'none';
  text3.style.display = 'none';

  cross1.addEventListener('click', () => {
    if (text1.style.display === 'none' || text1.style.display === '') {
      text1.style.display = 'block';
      setTimeout(() => text1.classList.add('show'), 10);
      cross1.classList.remove('rotate-back');
      cross1.classList.add('rotate');
    } else {
      text1.classList.remove('show');
      setTimeout(() => text1.style.display = 'none', 300);
      cross1.classList.remove('rotate');
      cross1.classList.add('rotate-back');
    }
  });

  cross2.addEventListener('click', () => {
    if (text2.style.display === 'none' || text2.style.display === '') {
      text2.style.display = 'block';
      setTimeout(() => text2.classList.add('show'), 10);
      cross2.classList.remove('rotate-back');
      cross2.classList.add('rotate');
    } else {
      text2.classList.remove('show');
      setTimeout(() => text2.style.display = 'none', 300);
      cross2.classList.remove('rotate');
      cross2.classList.add('rotate-back');
    }
  });

  cross3.addEventListener('click', () => {
    if (text3.style.display === 'none' || text3.style.display === '') {
      text3.style.display = 'block';
      setTimeout(() => text3.classList.add('show'), 10);
      cross3.classList.remove('rotate-back');
      cross3.classList.add('rotate');
    } else {
      text3.classList.remove('show');
      setTimeout(() => text3.style.display = 'none', 300);
      cross3.classList.remove('rotate');
      cross3.classList.add('rotate-back');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let startY = 0;

  // Отслеживание события прокрутки мыши
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      window.location.href = "center2.html"; // Замените на ваш путь к следующей странице
    }
  });

  // Отслеживание событий сенсорного экрана
  window.addEventListener("touchstart", function (event) {
    startY = event.touches[0].clientY;
  });

  window.addEventListener("touchend", function (event) {
    let endY = event.changedTouches[0].clientY;
    if (startY > endY + 50) {
      // Свайп вниз
      window.location.href = "center2.html"; // Замените на ваш путь к следующей странице
    }
  });
});





