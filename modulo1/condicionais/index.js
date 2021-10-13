//Exercícios de interpretação de código
/*
1) - 
a) - 
> Ele pede que o usuário digite um numero, e verifica se o resto da divisão desse numero é igual a zero.
    / Ele verifica se o numero é PAR.
b) -
> Numero Pares
c) - 
> Numeros Ímpares
----------------------------------------------------------------------------------------------------------
2)-
a)- 
> Serve para mostrar o preço da fruta digitada pelo usuario, caso ela esteja na lista, se não tiver ele 
mostra um valor padrão por default.
b) - 
> O preço da fruta Maçã,  é  R$ 2.25
c)- 
> O preço da fruta Pêra,  é  R$ 5.5
> 5
------------------------------------------------------------------------------------------------------------
3)-
a)-
> Está pedindo para o usuario digitar no prompt, e convertendo tudo que ele digitar para numero.
b)-
> Esse número passou no teste
> Essa mensagem é secreta!!!
> undefined
c)-
> Haverá se a condição não for atendida. A variavel mensagem não será executada. Pois ela esta dentro do bloco IF.
*/

//Exercícios de escrita de código
/*
1)-
a), b) -  
const ageUser = Number(prompt("Digite sua idade:"));
c) -
if(ageUser >= 18){
    console.log("Você pode dirigir");
}else{
    console.log("Você não pode dirigir");
}
-------------------------------------------------------------------------------------------
2)-

const dayShift = prompt("Em qual turno você estuda (M,V,N):");
const dayShiftUper = dayShift.toUpperCase();

if(dayShiftUper === "M"){
    console.log("Bom dia!")
}else if(dayShiftUper === "V"){
    console.log("Boa Tarde!")
}else if(dayShiftUper === "N"){
    console.log("Boa Noite!")
}
----------------------------------------------------------------------------------------------
3)-
const dayShift = prompt("Em qual turno você estuda (M,V,N):");
const dayShiftUper = dayShift.toUpperCase();

switch(dayShiftUper){
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Noite!");
        break;
    default:
        console.log("Turno não encontrado");
        break;
}
-------------------------------------------------------------------------------------------------
4)-
const genreMovie = prompt("Qual o gênero do filme?");
const priceTicket = Number(prompt("Qual o preço do ingresso?"))

const uppergenreMovie = genreMovie.toUpperCase();

if((uppergenreMovie === "FANTASIA") && (priceTicket < 15)){
    console.log("Bom filme!");
}else{
    console.log("Escolha outro filme :(");
}
*/

//  Desafios
/*
1)-

const genreMovie = prompt("Qual o gênero do filme?");
const priceTicket = Number(prompt("Qual o preço do ingresso?"))

const uppergenreMovie = genreMovie.toUpperCase();

if((uppergenreMovie === "FANTASIA") && (priceTicket < 15)){
    let lunch = prompt("Quer lanche? escolha(pipoca, chocolate, doces):");
    let choicelunch = ["pipoca","chocolate","doces"];
    if(choicelunch.includes(lunch,choicelunch)){
        console.log("Bom filme!");
        console.log(`Aproveite o seu ${lunch}`);
    }else{
        console.log("Bom filme!");
    }
}else{
    console.log("Escolha outro filme :(");
    }
-----------------------------------------------------------------------------------------------
2)-

    // FALTAR FINALIZAR
const nameUser = prompt("Digite seu nome:");
const typeGame = prompt("Digite o tipo de jogo (IN,DO):");
const stageGame = prompt("Digite qual a etapa do jogo (SF,DT,FI):");
const category = prompt("Escolha uma categoria (1,2,3,4):");
const ticket = Number(prompt("Quer quantos ingressos? "));

const salesTicket = {
    tipo_jogo: ["IN","DO"],
    etapa_jogo: ["SF","DT","FI"]
}

console.log("---Dados da compra---");
console.log(`Nome do cliente: ${nameUser}`);
if(typeGame.toUpperCase() === salesTicket.tipo_jogo[1]){
    console.log(`Nome do cliente: Nacional`);
    if(stageGame.toUpperCase() === salesTicket.etapa_jogo[0]){
        console.log(`Etapa do jogo:  ${stageGame} `);
        console.log(`Categoria: ${category}`);
        console.log(`Quantidade de ingressos: ${ticket}`);
        if(category === 1){
            const cat1 = 1980;
            console.log(`Valor do ingresso: R$ ${cat1}`);
            console.log(`Valor total: R$ ${cat1 * ticket}`);
        }
    }else if(stageGame.toUpperCase() === salesTicket.etapa_jogo[1]){
        console.log(`Etapa do jogo:  ${stageGame} `);
        console.log(`Categoria: ${category}`);
        console.log(`Quantidade de ingressos: ${ticket}`);
        if(category === 1){
            const cat2 = 1980;
            console.log(`Valor do ingresso: R$ ${cat2}`);
            console.log(`Valor total: R$ ${cat2 * ticket}`);
        }
    }else if(stageGame.toUpperCase() === salesTicket.etapa_jogo[2]){
        console.log(`Etapa do jogo:  ${stageGame} `);
        console.log(`Categoria: ${category}`);
        console.log(`Quantidade de ingressos: ${ticket}`);
        if(category === 1){
            const cat1 = 1980;
            console.log(`Valor do ingresso: R$ ${cat3}`);
            console.log(`Valor total: R$ ${cat3 * ticket}`);
        }
    }
    
}else if(typeGame.toUpperCase === salesTicket.tipo_jogo[0]){

}
*/