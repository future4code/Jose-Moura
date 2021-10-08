//Exercícios de interpretação de código
/*
1) -
a)-
> 10
> 50
b)-
> Console em branco
> Console em branco
-----------------------------------------
2) -
a)-
> A função transforma o texto digitado em minúsculo e retorna True ou False se tiver a palavra cenoura
na frase.
b)-
> i. True
> ii. True
> iii. False
*/
//----------------------------------------------

//Exercícios de escrita de código
/*
1)-
a)-
function criandoFrase(){
	console.log("Eu sou Augusto,tenho 29 anos, moro no Ceará e sou estudante.");
}
criandoFrase();
b)-
function criandoPerfil(nome,idade,cidade,profissao){
	console.log(`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou ${profissao}`);
}
console.log(criandoPerfil('Augusto',29,'Fortaleza','Estudante'));
-----------------------------------------------------------------------------------------------------
2)-
a)-
function somarNumeros(numero1,numero2){
	return numero1 + numero2;
}
let totalSoma = somarNumeros(800,120);
console.log(totalSoma);
b)-
function maiorNumero(numero1,numero2){
	return numero1 >= numero2;
}
let maior = maiorNumero(100,120);
console.log(maior);
c)-
function numeroPar(numero){
	return numero % 2 == 0;
}
let par = numeroPar(121);
console.log(par);
d)-
function frase(frase){
	
	return (`${frase.toUpperCase()}, Essa frase possui ${frase.length} letras`);
}
let tamanhoFrase = frase("Bom dia Carver");
console.log(tamanhoFrase);
----------------------------------------------------------------------------------
3)-
function saberNumeros(numero1, numero2){
	return (`Número inseridos: ${Number(numero1)} e ${Number(numero2)}`);
}
function somar(numero1, numero2){
	return (`Soma: ${Number(numero1) + Number(numero2)}`);
}
function multiplicar(numero1, numero2){
	return (`Multiplicação:  ${Number(numero1) * Number(numero2)}`);
}
function subtrair(numero1, numero2){
	return (`Diferença: ${Number(numero1) - Number(numero2)}`);
}
function dividir(numero1, numero2){
	return (`Divisão:  ${Number(numero1) / Number(numero2)}`);
}

let numeros = (saberNumeros(30,10));
let soma = somar(30,10);
let multiplicacao = multiplicar(30,10);
let subtracao = subtrair(30,10);
let divisao = dividir(30,10);

console.log(numeros);
console.log(soma);
console.log(multiplicacao);
console.log(subtracao);
console.log(divisao);
*/
//-------------------------------------------------------------------------------

//Desafios
/*
1) -
a)-
const fraseSaudacao = (frase) => {
	console.log("Bom dia! Carver");
}
fraseSaudacao();
b)-

const somaNumeros = (numero1,numero2) => {
	let soma = numero1 + numero2;
	console.log(soma);
}
somaNumeros(20,20);
-------------------------------------------------------
2) -
const calculoHipotenusa = (cateto1,cateto2) => {
	return ((Number(cateto1) * Number(cateto1)) + (Number(cateto2) * Number(cateto2)));
}
let hipotenusa = (calculoHipotenusa(20,10));
console.log(Math.sqrt(hipotenusa));
*/