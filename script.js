function showSection() {
    document.body.className = "bg-page2"
    document.getElementById("messageBox").classList.remove("hidden");
}

function showFinal() {
    const finalText = document.getElementById("finalText");

    document.body.className = "bg-page3";
    document.getElementById("finalBox").classList.remove("hidden");
    document.getElementById("messageBox").style.display = "none";
    finalText.classList.add("hidden");
}

const finalBtn = document.getElementById("finalNext");
if (finalBtn) {
    finalBtn.addEventListener("click", () => {
        const finalText = document.getElementById("finalText");
        finalText.classList.remove("hidden");
        finalBtn.style.display = "none";
    });
}

function start() {
    document.getElementById("introBox").style.display = "none";
    showSection();
}

const items = document.querySelectorAll("#reasonList li");
const nextBtn = document.getElementById("nextBtn");
let index = 0;

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (index < items.length) {
            items[index].style.display = "flex";
            items[index].style.opacity = 1;
            index++;

            if (index === items.length) {
                nextBtn.innerText = "And...";
            }
        } else {
            showFinal();
        }
    });
}

function moveRandomEl(elm) {
    elm.style.position = "fixed";
    elm.style.top = Math.floor(Math.random() * 75 + 10) + "%";
    elm.style.left = Math.floor(Math.random() * 75 + 10) + "%";
}

const moveRandom = document.querySelector("#noBtn");

if (moveRandom) {
    // Desktop hover
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });

    // Mobile touch tap
    moveRandom.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveRandomEl(e.target);
    });
}