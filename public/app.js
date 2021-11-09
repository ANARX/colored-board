const board = document.querySelector("#board");
const colors = [
  "#6aa19b",
  "#c95fd6",
  "#a3e02d",
  "#e3e6d4",
  "#7b3260",
  "#847066",
  "#b6baeb",
  "#afbbd0",
  "#2c6f63",
  "#415e63",
  "#8ead5a",
  "#a2c2f4",
  "#f5c8e1",
  "#e5afbd",
  "#4ddcb8",
  "#b1eecb",
  "#7e6b86",
  "#e05167",
  "#a3c49d",
  "#81b1ea",
  "#c96b31",
];
const SQUARES_NUMBER = 945;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
