// Exercício de interpretação de código
/*
 1) - 
a. True
b. True
c. False
d. Boolean
*/
//---------------------------------------------
/*
2) - 
> O usuário esta digitando Strings. Logo não será somado e sim cocatenado. 
  Deveria coverter de String para número usando a função Number.
  
    IMPRIMIR:
    39
*/
//---------------------------------------------
/*
3) -
>   ANTERIOR - const soma = primeiroNumero + segundoNumero;
>   SOLUÇÃO - const soma = Number(primeiroNumero) + Number(segundoNumero);
>>  SOMENTE EFETUAR A CONVERSÃO PARA NUMERO.
*/
//---------------------------------------------

//Exercícios de escrita de código
/*
1) - 
a) -
let idadeUsuario = prompt("Digite sua idade:");
b) -
let idadeAmigo = prompt("Digite sua idade do seu amigo(a):");
c) -
console.log("Sua idade é maior que a do seu amigo(a):", idadeUsuario > idadeAmigo);
d) -
console.log("A diferenca de idade é:", Number(idadeUsuario) - Number(idadeAmigo),"anos");
*/
//------------------------------------------------------------------
/*
2) -
a) -
let numeroPar = prompt("Digite um numero par:");
b) -
console.log(Number(numeroPar)%2);
c) -
> O resto da divisão de um numero par com 2 é sempre 0.
d) -
> Se colocar umm numero ímpar nunca retorna 0, pois a divisão não é exata.
*/
//------------------------------------------------------------------
/*
3) - 
let idadeUsuario = prompt("Digite sua idade em anos:");
a) -
console.log("Você tem", Number(idadeUsuario)*12,"meses");
b) -
console.log("Você tem", Number(idadeUsuario)*365,"dias");
c) -
console.log("Você tem", Number(idadeUsuario)*(24*365),"horas");
*/
//------------------------------------------------------------------
/*
4) -
let primeiroNumero = prompt("Digite o primeiro numero:");
let segundoNumero = prompt("Digite o segundo numero:");

console.log("O primeiro numero é maior que segundo?", Number(primeiroNumero) > Number(segundoNumero));
console.log("O primeiro numero é igual ao segundo?", Number(primeiroNumero) === Number(segundoNumero));
console.log("O primeiro numero é divisível pelo segundo?", Number(primeiroNumero) % Number(segundoNumero) === 0);
console.log("O segundo numero é divisível pelo primeiro?", Number(segundoNumero) % Number(primeiroNumero) === 0);
*/
//------------------------------------------------------------------

// DESAFIO
/*
1) -
let fahrenheit = 77;
let celsius = 80;
let novoCelsius = 30;
let celsiusUsuario = prompt("Digite a temperatura em celsius:")

let formKelvin = (fahrenheit - 32)*(5/9) + 273.15;
let formfahrenheit = (celsius) * (9/5) + 32;
let formfahrenheit2 = (novoCelsius) * (9/5) + 32;
let formKelvin2 = (novoCelsius + 273.15);
let usuarioCelsius = (celsiusUsuario) * (9/5) + 32;

console.log("A conversão de temperatura de Fahrenheit / Kelvin: ", formKelvin);
console.log("A conversão de temperatura de Celsius / Fahrenheit: ", formfahrenheit);
console.log("A conversão de temperatura de Celsius / Fahrenheit: ", formfahrenheit2);
console.log("A conversão de temperatura de Celsius / Kelvin: ", formKelvin2);
console.log("Você digitou a temperatura",celsiusUsuario,"°C em Fahrenheit é: ",usuarioCelsius);
*/
//------------------------------------------------------------------

/*
2) -
let quilowattHora = 280;
let novoQuilowattHora = 300;
let calcQuilowattHora = quilowattHora * 0.05;
let calcNovoQuilowattHora = novoQuilowattHora * 0.05;
let descQuilowattHora = ((novoQuilowattHora * 0.05) * 15) / 100;
let totalDesconto = calcNovoQuilowattHora - descQuilowattHora;

console.log("Essa residencia irá pagar - R$:",calcQuilowattHora);
console.log("Essa residencia irá pagar - R$:",calcNovoQuilowattHora);
console.log("Essa residencia irá pagar com desconto - R$:",totalDesconto);
*/
//------------------------------------------------------------------
/*
3) -
let libra = 20;
let oz = 10.5;
let milha = 100;
let pes = 50;
let galao = 103.56;
let xicara = 450;
let convUsuario = prompt("Digite a quantidade de xicaras:");

let calcLibra = libra / 2.205;
let calcOz = oz / 35.274;
let calcMilha = milha * 1609;
let calcPes = pes / 3.281;
let calcGalao = galao * 3.785;
let calcXicara = xicara / 3.52;
let calcUsuario = convUsuario / 3.52;

console.log("20lb equivalem a ", calcLibra,"Kg");
console.log("10.5oz equivalem a", calcOz,"kg");
console.log("100mi equivalem a",calcMilha, "m");
console.log("50ft equivalem a", calcPes, "m");
console.log("103.5gal equivalem a", calcGalao, "l");
console.log("450xic equivalem a", calcXicara, "l");
console.log(convUsuario ,"xic equivalem a", calcUsuario, "l");
*/