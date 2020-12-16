var text = document.getElementById("texto_lineas");
var boton = document.getElementById("bttn_enviar");

boton.addEventListener("click", drawperclick);

var d = document.getElementById("draw");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xin, yin, xfi, yfi) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xin, yin);
  lienzo.lineTo(xfi, yfi);
  lienzo.stroke();
  lienzo.closePath();
}

function drawperclick() {
  var lineas = parseInt(text.value);
  var l = 0;
  var yi, xf;
  var color2 = "#FAA";
  var espacio = ancho / lineas;

  d.width = d.width;

  for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(color2, yi, 0, 300, xf);
    dibujarLinea(color2, 0, yi, xf, 300);
    console.log("Linea " + l);
  }

  dibujarLinea(color2, 1, 1, 299, 1);
  dibujarLinea(color2, 299, 1, 299, 299);
  dibujarLinea(color2, 1, 1, 1, 299);
  dibujarLinea(color2, 1, 299, 299, 299);
}
