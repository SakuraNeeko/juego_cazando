const canvas = document.getElementById("areaJuego");
const ctx = canvas.getContext("2d");
 
const ANCHO_GATO  = 60;
const ALTO_GATO   = 60;
const ANCHO_COMIDA = 30;
const ALTO_COMIDA  = 30;
 
let gatoX   = 0;
let gatoY   = 0;
let comidaX = 0;
let comidaY = 0;
let puntos = 0;
let tiempoMax = 15;
let tiempo = tiempoMax;
let intervalo;
 
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "white");
}

function graficarComida() {
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}

function limpiarCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    gatoX -= 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    gatoX += 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
 
function moverArriba() {
    gatoY -= 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
 
function moverAbajo() {
    gatoY += 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision() {
    if (
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ) {
        puntos = puntos + 1;
        tiempoMax = tiempoMax - 1;
        tiempo = tiempoMax;
        document.getElementById("puntos").textContent = puntos;

        clearInterval(intervalo);
        intervalo=setInterval(restarTiempo, 1000);

        comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

        if (puntos == 6) {
        alert("Ganaste");
        reiniciarJuego();
        }
    }
}


function restarTiempo() {
    tiempo = tiempo -  1;
    document.getElementById("tiempo").textContent = tiempo;

    if (tiempo == 0) {
      clearInterval(intervalo);
        alert("Game Over");
        reiniciarJuego();
    }
}


function iniciarJuego() {
  gatoX = (canvas.width  - ANCHO_GATO)  / 2;
  gatoY = (canvas.height - ALTO_GATO)   / 2;
 
  comidaX = canvas.width  - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
 
  graficarGato();
  graficarComida();
  intervalo = setInterval(restarTiempo, 1000);

}

function reiniciarJuego() {
  puntos = 0;
  tiempoMax = 15;
  tiempo = tiempoMax;

  document.getElementById("puntos").textContent = puntos;
  document.getElementById("tiempo").textContent = tiempoMax;

  gatoX = (canvas.width  - ANCHO_GATO) / 2;
  gatoY = (canvas.height - ALTO_GATO) / 2;

  comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
  comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

  limpiarCanva();
  graficarGato();
  graficarComida();

  clearInterval(intervalo);
  intervalo = setInterval(restarTiempo, 1000);

}
