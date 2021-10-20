function analizar(){
 var m =(document.getElementById('cadena2').value);

 if( isNaN(m)==true){
   document.getElementById('titulo').innerHTML=(typeof m); 
   
 }else{
  document.getElementById('titulo').innerHTML=(typeof parseFloat(m));
 }

}
    