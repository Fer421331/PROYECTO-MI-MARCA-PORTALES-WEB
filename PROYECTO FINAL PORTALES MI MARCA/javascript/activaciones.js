
const modal = document.getElementById("modal");
const btnInfo = document.getElementById("btn-info");
const closeBtn = document.querySelector(".close");

btnInfo.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});