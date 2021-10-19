function analizar(){
let varCadena = document.getElementById('cadena').value;
let resultado = varCadena.length; 
document.getElementById('titulo').innerHTML = '<strong> La cantidad de caracteres es: </strong>'+resultado;
}