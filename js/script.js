console.log("Conectado");

const contenedor = document.querySelector(".contenedorGrilla");
const boton = document.querySelector(".pizarra");
const limpiar = document.querySelector(".borrar");

function crearCuadrado() {
    let grilla = document.createElement("div");
    grilla.classList.add("cuadradito");

     // Pintando cada vez que pasa el mouse
    grilla.addEventListener("mousemove", function() {
        grilla.setAttribute("style", "background-color: gray");
    })
    contenedor.appendChild(grilla);
}

// iterando para que se creen los divs
let tamañoPizarra = "";
function iterarCuadrados() {
    for (let i = 0; i < 100000; i++) {
        crearCuadrado();
    }
}


let pizarra = boton.addEventListener("click", function () {
    tamañoPizarra = prompt("Inserte el tamaño de pixeles para la pizarra:", "64");

    contenedor.style.gridTemplateColumns = `repeat(${tamañoPizarra}, 1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${tamañoPizarra}, 1fr)`;
    contenedor.innerHTML = "";
    iterarCuadrados();
});

let limpiarPizarra = limpiar.addEventListener("click", function () {
    contenedor.innerHTML = "";
})


