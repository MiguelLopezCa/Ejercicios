function analizar(){
   var num = parseFloat( document.getElementById('numero').value);
   if (num<0){
       if ( Number.isInteger(num)){
        document.getElementById ('res').innerHTML= 'Debe ingresar números positivos.';
       }else{
        document.getElementById ('res').innerHTML= 'Debe ingresar números enteros positivos.';
       }
        
   }else{
        if(Number.isInteger(num)){
            if(num % 2==0){
                document.getElementById ('res').innerHTML= 'Par';
            }else{
                document.getElementById ('res').innerHTML= 'Impar';
            }
            
        }else {
            document.getElementById ('res').innerHTML= 'Debe ingresar números enteros.';
         }
   } 
}
   
