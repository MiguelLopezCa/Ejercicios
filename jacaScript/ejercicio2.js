function analizar(){
 var m =(document.getElementById('cadena2').value);

 if( isNaN(m)==true){
   document.getElementById('titulo')=(typeof m); 
   
 }else{
  document.getElementById('titulo')=(typeof parseFloat(m));
 }

}
    