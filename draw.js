var d = document.getElementById("draw");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  console.log("Linea " +l)
  l = l + 1;
}



function dibujarLinea(color, xin, yin, xfi, yfi)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xin, yin);
lienzo.lineTo(xfi, yfi);
lienzo.stroke();
lienzo.closePath();
}