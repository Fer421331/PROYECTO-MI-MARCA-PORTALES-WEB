document.addEventListener("DOMContentLoaded", () => {

    const testimonios = [
        {
            nombre: "Diunsa",
            mensaje: "Mi Marca superó nuestras expectativas. La activación fue todo un éxito."
        },
        {
            nombre: "BAC",
            mensaje: "Excelente organización, creatividad y resultados impresionantes en nuestras campañas."
        },
        {
            nombre: "Tigo",
            mensaje: "Un equipo profesional que entiende las marcas y las conecta con las personas."
        },
        {
            nombre: "Honduras Maya",
            mensaje: "Estamos muy satisfechos con el trabajo realizado por Mi Marca."
        }
    ];

    const contenedor = document.getElementById("testimoniosContainer");

    testimonios.forEach(testimonio => {

        const card = document.createElement("div");
        card.classList.add("testimonio-card");

        card.innerHTML = `
            <p>"${testimonio.mensaje}"</p>
            <h3>- ${testimonio.nombre}</h3>
        `;

        contenedor.appendChild(card);

    });

});
