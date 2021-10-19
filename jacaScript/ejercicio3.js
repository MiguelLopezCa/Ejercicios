function analizar(){
var edad= document.getElementById ('edad').value; 
var nombre= document.getElementById('nombre').value;
var edada= parseFloat(document.getElementById('edad').value);
    if (edada <18 && edada>0){
    document.getElementById('resultado').innerText='hola '+ nombre+', eres menor de edad'
    }else if(edada >=18){
    document.getElementById('resultado').innerText='hola '+ nombre+', eres mayor de edad '
    } else {
    document.getElementById('resultado').innerHTML='<strong> No es una edad válida </strong> '
    }
}