const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
// Imp dot is needed for query selector
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[getRandomValue()];
    color.textContent = colors[getRandomValue()];
});

function getRandomValue() {
    return Math.floor(Math.random() * colors.length);
}

// Improvement in this to avoid the same random number being generated