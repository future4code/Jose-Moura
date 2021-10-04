// Exercicio de interpretação de código:
/*
Questão 1:
> 10
> 10 5
 */

/*
Questão 2:
> 20 10 10
*/

/*
Questão 3:
let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let pagamento = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${pagamento/horasTrabalhadas} por hora`);
*/

//Exercício de escrita do código
// > QUESTÃO 1:
//a)
let nome;
//b)
let idade;
//c)
console.log(typeof nome, typeof idade);
//d) - RETORNOU UNDEFINED PORQUE AS VARIAVEIS ESTAVAM VAZIAS
//e) 
nome = prompt("Qual é o seu nome:");
idade = prompt("Qual sua idade:");
//f)
console.log(typeof nome, typeof idade);
// String String - MESMO IDADE SENDO NUMERO, O JAVASCRIPT LÊ COMO STRING, SERÁ NECESSÁRIO FAZER A CONVERSÃO PARA NUMERO
//g)
console.log("ola",nome,"você tem",idade,"anos");

// > QUESTÃO 2

let pergunta1 = prompt("Você está usando uma roupa azul hoje?");
let pergunta2 = prompt("Você está usando uma roupa preta hoje?");
let pergunta3 = prompt("Você está usando uma roupa verde hoje?");

console.log("Você está usando uma roupa azul hoje? -",pergunta1);
console.log("Você está usando uma roupa preta hoje? -",pergunta2);
console.log("Você está usando uma roupa verde hoje? -",pergunta3);


// > QUESTÃO 3
let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;


console.log("O novo valor de A é:",a);
console.log("O novo valor de B é:",b);


//SEÇÃO OPCIONAL: 
let numero1 = prompt("Digite o primeiro numero:");
let numero2 = prompt("Digite o segundo numero:");
soma = Number(numero1) + Number(numero2);
multiplicar = Number(numero1) * Number(numero2);


console.log("O primeiro numero somado ao segundo número resulta em: ", soma);
console.log("O primeiro numero multiplicado pelo segundo número resulta em: ", multiplicar);
