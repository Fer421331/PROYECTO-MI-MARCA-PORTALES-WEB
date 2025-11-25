document.getElementById("formContacto").addEventListener("submit", function(e){
    e.preventDefault();


    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;


    if(nombre && correo && mensaje){
        alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
        this.reset();
    } else {
        alert("Por favor completa todos los campos.");
    }
});



