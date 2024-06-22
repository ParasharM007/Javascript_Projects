(function () {
  const btns = document.querySelectorAll(".counterBtn");
  let count = 0;
  btns.forEach(function (b) {
    b.addEventListener("click", function (e) {
      if (b.classList.contains("prevBtn")) {
        count--;
      } else if (b.classList.contains("nextBtn")) {
        count++;
      }
      const counter = document.querySelector(".counter");
      counter.textContent = count;
      if (count < 0) {
        counter.style.color = "orange";
      } else if (count > 0) {
        counter.style.color = "yellow";
      } else {
        counter.style.color = "black";
      }
    });
  });
})();

