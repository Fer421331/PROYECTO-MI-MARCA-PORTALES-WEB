/* ===============================
   LISTA DE CLIENTES CON LOGOS
================================*/
const clientes = [
    { nombre: "Diunsa", logo: "../imagenes/Diunsa.jpg" },
    { nombre: "Pepsi", logo: "../imagenes/Pepsi.jpg" },
    { nombre: "BAC", logo: "../imagenes/BAC.jpg" },
    { nombre: "Tigo", logo: "../imagenes/Tigo.jpg" },
    { nombre: "Honduras Maya", logo: "../imagenes/HM.jpg" }
];

/* ===============================
   CONTENEDOR DEL GRID
================================*/
const contenedor = document.getElementById("clientesContainer");

/* ===============================
   GENERAR TARJETAS DE CLIENTES
================================*/
clientes.forEach(cliente => {
    const card = document.createElement("div");
    card.classList.add("cliente-card");

    card.innerHTML = `
        <img src="${cliente.logo}" alt="logo ${cliente.nombre}">
        <h3>${cliente.nombre}</h3>
    `;

    contenedor.appendChild(card);
});