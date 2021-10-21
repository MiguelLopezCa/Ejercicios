function analizar(){
 var m =(document.getElementById('cadena').value);

 if( isNaN(m)==true){
   document.getElementById('r').innerHTML=(typeof m); 
   
 }else{
  document.getElementById('r').innerHTML=(typeof parseFloat(m));
 }

}
    