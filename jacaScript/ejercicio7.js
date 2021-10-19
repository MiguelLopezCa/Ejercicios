function analizar(){
    num1=  parseFloat(document.getElementById('numero1').value);
    num2=  parseFloat(document.getElementById('numero2').value);

    if(num1<0 ||num2<0){
        if (Number.isInteger(num1)&&Number.isInteger(num2)){
            document.getElementById('titulo').innerHTML='los numeros'+num1 +' y '+ num2 +' No son positivos';
        }
        if (Number.isInteger(num1)&& num2!=Number.isInteger(num2) ){

        }
        
    }else{
        if (Number.isInteger(num1&&Number.isInteger(num2)) ){
            if(Number.isInteger(num1/num2)){
                document.getElementById('titulo').innerHTML='El número ' + num1+' es divisible entre el número '+num2;
            }else{
                document.getElementById('titulo').innerHTML='El número ' + num1+' no es divisible entre el número '+num2;
            }
    }

    }
}