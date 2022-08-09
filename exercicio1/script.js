const num = Number(prompt("Digite um número aqui.")) //seu numero aqui

if(num%2===0){
    console.log("Este número é divisível por 2")
   
} else if(num%3===0){
    console.log("Este número  é divisível por 3")
}

if(num%2===0 || num%3===0){
    console.log("Este número é divisível por 2 ou por 3")
}