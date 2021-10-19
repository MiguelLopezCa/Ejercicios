function analizar(){
 var m =(document.getElementById('cadena2').value);

 if( isNaN(m)==true){
   console.log(typeof m); 
   
 }else{
   console.log(typeof parseFloat(m));
 }

}
    