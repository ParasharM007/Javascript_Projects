const button = document.querySelector("button");
const color = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
document.body.style.backgroundColor = "violet";

// button.addEventListener("click", changeBg);
// function changeBg() {
//   const color_index = parseInt(Math.random() * color.length);
//   document.body.style.backgroundColor = color[color_index];
// }


button.addEventListener("click",() => {
  color_index=parseInt(Math.random()*color.length);
  document.body.style.backgroundColor=color[color_index];
});