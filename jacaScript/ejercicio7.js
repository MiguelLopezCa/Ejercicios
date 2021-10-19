function analizar(){
    num1=  parseFloat(document.getElementById('numero1').value);
    num2=  parseFloat(document.getElementById('numero2').value);

    if(num1<0 &&num2<0){
        if (Number.isInteger(num1)&&Number.isInteger(num2)){
            document.getElementById('titulo').innerHTML='los numeros'+num1 +' y '+ num2 +' No son positivos';
        }else{
            document.getElementById('titulo').innerHTML='los numeros'+num1 +' y '+ num2 +' No son enteros positivos';
        }
        if (Number.isInteger(num1)&& num2!=Number.isInteger(num2) ){
            document.getElementById('titulo').innerHTML='El número'+num1 +' no es positivo y el número '+ num2 +'  no es entero positivo';
        }
        if (Number.isInteger(num2)&& num1!=Number.isInteger(num1) ){
            document.getElementById('titulo').innerHTML='El número'+num1 +' no es entero positivo y el número '+ num2 +'  no es positivo';
        }
        
    }else{
        if (Number.isInteger(num1)&&Number.isInteger(num2)){
            if(Number.isInteger(num1/num2)){
                document.getElementById('titulo').innerHTML='El número ' + num1+' es divisible entre el número '+num2;
            }else{
                document.getElementById('titulo').innerHTML='El número ' + num1+' no es divisible entre el número '+num2;
            }
        }else{
            if (Number.isInteger(num1)&& num2!=Number.isInteger(num2) ){
                document.getElementById('titulo').innerHTML='El número'+ num2 +'  no es entero';
            }
            if (Number.isInteger(num2)&& num1!=Number.isInteger(num1) ){
                document.getElementById('titulo').innerHTML='El número'+num1 +' no es entero';
            }
        }
    }
    if(num1<0 &&num2>0){
        if (Number.isInteger(num1)&&Number.isInteger(num2)){
            document.getElementById('titulo').innerHTML='El número '+num1+' No es positivo';
        }else{
            document.getElementById('titulo').innerHTML='El número '+num1+' No es entero positivo y el número '+num2+' No es entero';
        }
        if (Number.isInteger(num1)&& num2!=Number.isInteger(num2) ){
            document.getElementById('titulo').innerHTML='El número'+num1 +' no es positivo y el número '+ num2 +'  no es entero ';
        }
    }
    if(num1>0 && num2 <0){
        if (Number.isInteger(num1) && Number.isInteger(num2)){
            document.getElementById('titulo').innerHTML='El número '+num2+' No es positivo';
        }else{
            document.getElementById('titulo').innerHTML='El número '+num1+' No es positivo y el número '+num2+' No es entero positivo';
        }
         if (Number.isInteger(num1)&& num2 != Number.isInteger(num2) ){
            document.getElementById('titulo').innerHTML='el número '+ num2 +'  no es entero positivos xd';
        }
    }

}