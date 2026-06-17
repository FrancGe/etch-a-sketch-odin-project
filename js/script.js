console.log("Conectado");



function crearCuadrado() {
    const contendor = document.querySelector(".contendorGrilla");
    let grilla = document.createElement("div");
    grilla.classList.add("cuadradito");

     // Pintando cada vez que pasa el mouse
    grilla.addEventListener("mousemove", function() {
        grilla.setAttribute("style", "background-color: gray");
    })
    contendor.appendChild(grilla);
}

// iterando para que se creen los divs
for (let i = 0; i < 10000; i++) {
    crearCuadrado();
}
