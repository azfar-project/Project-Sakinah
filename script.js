function showSection() {
    document.getElementById("messageBox").classList.remove("hidden");
}

function showFinal() {
    
    const finalText = document.getElementById("finalText");

    document.getElementById("finalBox").classList.remove("hidden");
    document.getElementById("messageBox").style.display = "none";
    finalText.classList.add("hidden");
}

const finalBtn = document.getElementById("finalNext");

finalBtn.addEventListener("click", () => {
    const finalText = document.getElementById("finalText");

    finalText.classList.remove("hidden");
    finalBtn.style.display = "none";
});

function hideButton(btn) {
    btn.style.display = "none";
}

function start() {
    document.getElementById("introBox").style.display = "none";
    showSection();
}

const items = document.querySelectorAll("#reasonList li");
const nextBtn = document.getElementById("nextBtn");
let index = 0;

nextBtn.addEventListener("click", () => {
    if (index < items.length) {
        items[index].style.display = "block";
        items[index].style.opacity = 1;
        index++;

        if (index === items.length) {
            nextBtn.innerText = "And...";
        }
    } else {
        showFinal();
    }
});

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#noBtn");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});