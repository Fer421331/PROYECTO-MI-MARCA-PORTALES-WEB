const servicios = [
    { titulo: "Activaciones de Marca", descripcion: "Creamos experiencias que conectan con el público mediante dinámicas, demostraciones y eventos interactivos." },
    { titulo: "Publicidad POP", descripcion: "Displays, banners, roll-ups y exhibidores que aumentan la presencia de tu marca." },
    { titulo: "Merchandising Personalizado", descripcion: "Tazas, botellas, textiles y más artículos promocionales personalizados." },
    { titulo: "Diseño y Creatividad", descripcion: "Desarrollo de branding, concepts y piezas gráficas estratégicas." },
    { titulo: "Eventos Corporativos", descripcion: "Organización de eventos empresariales, ferias y lanzamientos." },
    { titulo: "Producción Publicitaria", descripcion: "Impresión, montaje y fabricación de piezas visuales para campañas." }
];


const cards = document.querySelectorAll(".cliente-card");
cards.forEach((card, i) => {
    card.querySelector("h3").textContent = servicios[i].titulo;
    card.querySelector("p").textContent = servicios[i].descripcion;
});
