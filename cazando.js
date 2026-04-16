const canvas = document.getElementById("areaJuego");
const ctx = canvas.getContext("2d");
 
const ANCHO_GATO  = 60;
const ALTO_GATO   = 60;
 
let gatoX   = 0;
let gatoY   = 0;
 
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "orange");
}