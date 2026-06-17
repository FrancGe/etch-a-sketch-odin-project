console.log("Conectado");

const contenedor = document.querySelector(".contenedorGrilla");
const boton = document.querySelector(".pizarra");
const limpiar = document.querySelector(".limpiar");
const borrar = document.querySelector(".borrar");
const dibujar = document.querySelector(".dibujar");

let clickIzquierdo = false;
window.addEventListener("mousedown", function() {
    clickIzquierdo = true;
});
window.addEventListener("mouseup", function() {
    clickIzquierdo = false;
});

let modoBorrador = false;
borrar.addEventListener("click", function() {
    modoBorrador = true;    
});

let modoDibujo = false;
dibujar.addEventListener("click", function() {
    modoBorrador = false;
});

function crearCuadrado() {
    let grilla = document.createElement("div");
    grilla.classList.add("cuadradito");

     // Pintando cada vez que pasa el mouse
    grilla.addEventListener("mousemove", function() {
        if(clickIzquierdo) {
            grilla.setAttribute("style", "background-color: black");

            if(modoBorrador) {
                grilla.setAttribute("style", "background-color: transparent");
            }
        }
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




