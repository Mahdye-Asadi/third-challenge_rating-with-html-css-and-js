const mainContainer = document.querySelector(".container");
const thankContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector(".submit");
const tryAgain = document.querySelector(".back");

submitButton.addEventListener('click', () => {
    mainContainer.style.display = "none";
    thankContainer.classList.remove("hidden");
});

tryAgain.addEventListener('click', () => {
    mainContainer.style.display = "block";
    thankContainer.classList.add("hidden");
});

function btn(num) {
    var select;
    for (let i = 0; i < 6; i++) {
        if (i == num) {
            select = i;
        }
    }
    document.getElementById('select-num').innerHTML = select;
}