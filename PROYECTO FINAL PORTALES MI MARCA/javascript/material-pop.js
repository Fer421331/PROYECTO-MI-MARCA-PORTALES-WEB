const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const tituloProducto = document.getElementById("titulo-producto");
const formCotizar = document.getElementById("form-cotizar");

document.querySelectorAll(".btn-cotizar").forEach(btn => {
    btn.addEventListener("click", () => {
        const producto = btn.getAttribute("data-producto");
        tituloProducto.textContent = "Cotizar: " + producto;
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

formCotizar.addEventListener("submit", (e) => {
    e.preventDefault(); 

    alert("Su cotización se envió con éxito ✔️");

    formCotizar.reset();     
    modal.style.display = "none"; 
});
