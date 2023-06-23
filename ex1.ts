const entrada =require('readline-sync'); 
let letra: string = entrada.question ("Digite uma letra: "); 
if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    console.log("Isso e uma vogal");
}
else{
    console.log("Isso nao e uma vogal");
}