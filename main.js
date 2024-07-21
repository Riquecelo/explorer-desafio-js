/*
Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

//1.Res
alert("Hello World!")

//2.Resp
let numb1 = 2;
let numb2 = 3;

alert(`O resultado da soma das variáveis é: ${numb1 + numb2}`);

//3.Resp
let result = numb1 + numb2;

if(typeof result === "number"){
    alert("É um número")
}else{
    alert("Não é um número")
}

//4.Resp
let msg = prompt("Digite sua mensage:")
if(typeof msg === "string"){
    alert("É uma string")
}else{
    alert("Não é uma string")
}

//5.Resp
let bool = true;

if(typeof bool === "boolean"){
    alert("É um booleano")
}else{
    alert("Não é um booleano")
}

//6.Resp
let numA = 8;
let numB = 2;
let sub = numA - numB;
alert(`O resultado da subtração entra as variáveis ${numA} e ${numB} é: ${sub}`)

//7.Resp
let mult = numA * numB;
alert(`O resultado da multiplicação entra as variáveis ${numA} e ${numB} é: ${mult}`)

//8.Resp
let div = numA / numB;
alert(`O resultado da divisão entra as variáveis ${numA} e ${numB} é: ${div}`)

//9.Resp
let resto = numA % numB;
alert(`O resto da divisão entra as variáveis ${numA} e ${numB} é: ${resto}`)

if(resto == 0){
    alert("É um número par")
}else{
    alert("Não é número par")
}

//10.Resp
if(resto == 1){
    alert("É um número ímpar")
}else{
    alert("Não é número ímpar")
}