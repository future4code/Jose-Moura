// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
/*
// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  altura = prompt("Digite a altura:");
  largura = prompt("Digite a largura:");
  //return (Number(altura) * Number(largura));
  console.log(Number(altura) * Number(largura))
}
calculaAreaRetangulo(3,5);
// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  anoAtual = prompt("Digite o ano atual:");
  anoNascimento = prompt("Digite o ano que você nasceu:");
  console.log(Number(anoAtual) - Number(anoNascimento))
  //return Number(anoAtual) - Number(anoNascimento);
}
imprimeIdade(2020,1990);
*/
/*
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return (Number(peso) / (Number(altura) * Number(altura)));
}
 let peso = prompt("Digite seu peso:");
 let altura = prompt("Digite sua altura:");
let mostrarImc = calculaIMC(peso,altura)
console.log(mostrarImc);
*/
/*
// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  nome = prompt("Digite seu nome:");
  idade = prompt("Digite sua idade:");
  email = prompt("Digite seu email:");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
*/
/*
// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  let cores = [];
  cor1 = prompt("Digite sua primeira cor:");
  cor2 = prompt("Digite sua segunda cor:");
  cor3 = prompt("Digite sua terceira cor:");

  cores[0] = cor1;
  cores[1] = cor2;
  cores[2] = cor3;

  console.log(cores);

}
*/
/*

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}
let retString = retornaStringEmMaiuscula("oi");
console.log(retString);
*/
/*
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (Number(custo) / Number(valorIngresso));
}
let custoTotal = (calculaIngressosEspetaculo(3000,100));
console.log(custoTotal);
*/
/*
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}
let tamanhoString = (checaStringsMesmoTamanho("abcd","abc"));
console.log(tamanhoString);
*/

// EXERCÍCIO 09
vetor = "ola,abc"
function retornaPrimeiroElemento(array) {
  array = vetor.split(",");
  return(array[0]);
}
let retornoNumero = retornaPrimeiroElemento(vetor)
console.log(retornoNumero)

// EXERCÍCIO 10
vetor = "ola,abc"
function retornaUltimoElemento(array) {
  array = vetor.split(",").pop();
  return array;
}
let arrayFinal = retornaUltimoElemento(vetor);
console.log(arrayFinal);

// EXERCÍCIO 11
numerosTroca = [1,2,3,4,5]
function trocaPrimeiroEUltimo(array) {
  array = numerosTroca;
  return (array[0],array[3],array[2],array[1],array[4]);
}
verficaNumeros = trocaPrimeiroEUltimo(numerosTroca);
console.log(verficaNumeros)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  return (string1.includes(string2));
}
let verifString = (checaIgualdadeDesconsiderandoCase("ola","Ola"));
console.log(verifString);


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}