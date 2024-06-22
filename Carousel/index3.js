// (function () {
//   const pictures = ["1", "2", "3", "4", "5"];
//   const buttons = document.querySelectorAll(".btn");
//   // const ImgDiv = document.querySelector(".img-container");
//   const ImgDiv = document.getElementsByClassName("img-container")[0];
//   let counter = 0;
//   buttons.forEach(function (e) {
//     e.addEventListener("click", function (b) {
//       if (e.classList.contains("btn-left")) {
//         counter--;
//         if (counter < 0) {
//           counter = pictures.length - 1;
//         }
//         ImgDiv.style.background = `url("Img/${pictures[counter]}.jpeg")`;
//       }

//       if (e.classList.contains("btn-right")) {
//         counter++;
//         if (counter > pictures.length - 1) {
//           counter = 0;
//         }
//         ImgDiv.style.background = `url('Img/${pictures[counter]}.jpeg')`;
//       }
//     });
//   });
// })();
//REPEATED CODE:-

(function () {
  const ImgDiv = document.querySelector(".img-container");
  const pic = ["1", "2", "3", "4", "5"];
  let counter = 0;
  const btns = document.querySelectorAll(".btn");
  btns.forEach((b) => {
    b.addEventListener("click", () => {
      if (b.classList.contains("btn-right")) {
        counter++;
        if (counter > pic.length - 1) {
          counter = 0;
        }
        ImgDiv.style.background = `url("Img/${pic[counter]}.jpeg")`;
      } else if (b.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pic.length - 1;
        }
      }
      ImgDiv.style.background = `url("Img/${pic[counter]}.jpeg")`;
    });
  });
})();
