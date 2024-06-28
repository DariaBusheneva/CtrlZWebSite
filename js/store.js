document.addEventListener("DOMContentLoaded", function () {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      navBtns.forEach((b) => b.classList.remove("active", "rotated"));
      this.classList.add("active");
      if (this.id === "shop") {
        this.classList.add("rotated");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const closeBtn = product.querySelector('.close-btn');
    const overlay = product.querySelector('.product-overlay');

    closeBtn.addEventListener('click', function () {
      product.classList.toggle('product-blurred');
      if (product.classList.contains('product-blurred')) {
        closeBtn.classList.remove('rotate-back');
        closeBtn.classList.add('rotate');
        overlay.style.opacity = '1'; 
      } else {
        closeBtn.classList.remove('rotate');
        closeBtn.classList.add('rotate-back');
        overlay.style.opacity = '0'; 
      }
    });
  });
});





