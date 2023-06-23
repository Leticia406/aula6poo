const entrada2 =require('readline-sync'); 
let ano: number = (parseFloat( entrada2.question ("Digite um ano: "))); 
if(ano % 4 == 0 )  {
    console.log("Esse ano e bissexto");
}
else{
    console.log("Esse ano nao e bissexto");
}