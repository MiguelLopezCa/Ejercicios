function analizar(){
   var num = parseFloat( document.getElementById('numero').value);
   if (num<0){
       if ( Number.isInteger(num)){
        document.getElementById ('titulo').innerHTML= 'Debe ingresar números positivos.';
       }else{
        document.getElementById ('titulo').innerHTML= 'Debe ingresar números enteros positivos.';
       }
        
   }else{
        if(Number.isInteger(num)){
            if(num % 2==0){
                document.getElementById ('titulo').innerHTML= 'Par';
            }else{
                document.getElementById ('titulo').innerHTML= 'Impar';
            }
            
        }else {
            document.getElementById ('titulo').innerHTML= 'Debe ingresar números enteros.';
         }
   } 
}
   
