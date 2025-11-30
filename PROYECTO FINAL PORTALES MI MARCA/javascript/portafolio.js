
document.addEventListener("scroll", () => {
    const grid = document.querySelector(".grid-proyectos");
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        grid.classList.add("visible");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid-proyectos");
    if (grid && grid.getBoundingClientRect().top < window.innerHeight - 100) {
        grid.classList.add("visible");
    }
});

