const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const tituloProducto = document.getElementById("titulo-producto");
const formCotizar = document.getElementById("form-cotizar");

// Abrir modal y cambiar el título
document.querySelectorAll(".btn-cotizar").forEach(btn => {
    btn.addEventListener("click", () => {
        const producto = btn.getAttribute("data-producto");
        tituloProducto.textContent = "Cotizar: " + producto;
        modal.style.display = "flex";
    });
});

// Cerrar modal con la X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal haciendo clic afuera
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Evento de envío del formulario
formCotizar.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar

    alert("Su cotización se envió con éxito ✔️");

    formCotizar.reset();       // Limpia el formulario
    modal.style.display = "none"; // Cierra el modal
});
