function onClickCrear(){
   var nombre = document.getElementById('nombre').value;
   var asignatura = document.getElementById('materia').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
 promedio( nombre, asignatura,nota1,nota2,nota3);

}
function promedio(nn, aa,n1, n2, n3){
   if(n1<0 ||n2<0 ||n3<0 || n1>5 ||n2>5 ||n3>5 ){
      document.getElementById('res').innerHTML = 'Existe una o mas notas invalidas'
   }else{
      let resul = (n1+n2+n3)/3;  
      if (resul<3){
         document.getElementById('res').innerHTML ='Lo siento '+nn+ ', su nota es '+resul +' No pasaste la materia '+aa;
     }
      if(resul>=3){
        document.getElementById('res').innerHTML ='Felicitaciones '+nn+ ', su nota es '+resul+' Pasaste la materia '+aa;
     }
      if(resul>5){
        document.getElementById('res').innerHTML = 'la nota mas alta es de 5 Por favor verificar las notas'
     } 
   }
}