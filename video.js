const playBtn = document.getElementById("playBtn");
const finalBox = document.getElementById("finalBox");
const videoBox = document.getElementById("videoBox");
const specialVideo = document.getElementById("specialVideo");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        finalBox.style.display = "none";
        videoBox.classList.remove("hidden");
        
        if(specialVideo) {
            specialVideo.play().catch(error => {
                console.log("Autoplay prevented by browser:", error);
            });
        }
    });
}