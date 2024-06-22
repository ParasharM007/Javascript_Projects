(function () {
  const buttons = document.querySelectorAll(".btn");
  const storeImg = document.querySelectorAll(".store-item");

  buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log(e.type);
      const f = e.target.dataset.filter;

      storeImg.forEach((item) => {
        if (f === "all") {
          item.style.display = "block";
        } else if (item.classList.contains(f)) {
          item.style.display = "block";
        }
         else item.style.display = "none";
      });
    });
  });
})();
