let count = 0;
const value = document.getElementById("value");
// const btnDec = document.getElementById("btnDec");
// const btnReset = document.getElementById("btnRes");
// const btnInc = document.getElementById("btnInc");
const btns = document.querySelectorAll(".btn");

// btnDec.addEventListener("click", function () {
//     count--;
//     value.textContent = count;
// });


// btnReset.addEventListener("click", function () {
//     count = 0;
//     value.textContent = count;
// });

// btnInc.addEventListener("click", function () {
//     count++;
//     value.textContent = count;
// });

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList.value;
        if (styles.indexOf("decrease") > -1) {
            count--;
        } else if (styles.indexOf("increase") > -1) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});