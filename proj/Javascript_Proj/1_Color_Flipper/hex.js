const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexRandom = "#";
    for (i = 0; i < 6; i++) {
        hexRandom += hex[getRandomValue()];
    }
    document.body.style.backgroundColor = hexRandom;
    color.textContent = hexRandom;
});

function getRandomValue() {
    return Math.floor(Math.random() * hex.length);
}