var d = document.getElementById("draw");
var lienzo = d.getContext("2d");

dibujarLinea("#AAF", 0, 0, 10, 300);
dibujarLinea("#AAF", 0, 10, 20, 300);


function dibujarLinea(color, xin, yin, xfi, yfi)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xin, yin);
lienzo.lineTo(xfi, yfi);
lienzo.stroke();
lienzo.closePath();
}