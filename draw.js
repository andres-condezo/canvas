var text = document.getElementById("texto_lineas");
var boton = document.getElementById("bttn_enviar");

boton.addEventListener("click", drawperclick);

var d = document.getElementById("draw");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var color2 = "#FAA";

for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(color2, yi, 0, 300, xf);
  dibujarLinea(color2, 0, yi, xf, 300);
  console.log("Linea " + l);
}

dibujarLinea(color2, 1, 1, 299, 1);
dibujarLinea(color2, 299, 1, 299, 299);
dibujarLinea(color2, 1, 1, 1, 299);
dibujarLinea(color2, 1, 299, 299, 299);

function dibujarLinea(color, xin, yin, xfi, yfi) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xin, yin);
  lienzo.lineTo(xfi, yfi);
  lienzo.stroke();
  lienzo.closePath();
}

function drawperclick() {
  alert("No me toques ahi" + text.value);
}

