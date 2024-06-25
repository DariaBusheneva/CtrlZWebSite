document.addEventListener("DOMContentLoaded", function () {
    const navBtns = document.querySelectorAll(".nav-btn");
  
    navBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        navBtns.forEach((b) => b.classList.remove("active", "rotated"));
        this.classList.add("active");
        if (this.id === "announcements")  {
          this.classList.add("rotated");
        }
      });
    });
  });