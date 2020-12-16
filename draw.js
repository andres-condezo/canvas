var d = document.getElementById("draw");
var lienzo = d.getContext("2d");

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("red", 300, 10, 10, 220);

function dibujarLinea(color, xin, yin, xfi, yfi)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xin, yin);
lienzo.lineTo(xfi, yfi);
lienzo.stroke();
lienzo.closePath();
}