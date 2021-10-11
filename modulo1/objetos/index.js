//Exercícios de interpretação de código
/*
1) -
a) -
> Matheus Nachtergaele
> 3
> {canal: "Globo", horario: "14h"}
------------------------------------------------
2) -
a) -
> {nome: "Juca", idade: 3, raca: "SRD"}
> {nome: "Juba", idade: 3, raca: "SRD"}
> {nome: "Jubo", idade: 3, raca: "SRD"}
b) -
> Copia os dados do objeto.
--------------------------------------------
3) -
a)
> [backender, altura]
> Pelo que eu entendi. A função retorna um objeto[propriedade], mas vi que não está
adicionada ao objeto. Então os elementos só foram adicionadas ao array. Nada que vem 
depois do Return é interpretado.
*/

// Exercícios de escrita de código
/*
1) -
a) -
const pessoa = {
    nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`);
b) -
const newPerson = pessoa;

const novaPessoa = {
    nome: "Amanda", 
  ...newPerson,apelidos: ["Manduca","Manda","Amands"]
}
console.log(novaPessoa)
------------------------------------------------------------------------------------------------
2) -
a) -
const profileOne = {
    nome: "Edilene",
    idade: 40,
    profissao: "Service-Desk"
}
const profileTwo = {
    nome: "ale",
    idade: 27,
    profissao: "cozinheira"
}
//b) -
let person = (profiles) => {
    const arrayPerson = [profiles.nome,profiles.nome.length,
    profiles.idade,
    profiles.profissao,
    profiles.profissao.length]
    console.log(arrayPerson);
}
person(profileOne);
-------------------------------------------------------------------------------
3)- 
a)-
let array = [];
b) -
const fruitsOne = {
    nome: "Manga",
    diponibilidade: true
}
const fruitsTwo = {
    nome: "Caju",
    diponibilidade: true
}
const fruitsThree = {
    nome: "Jaca",
    diponibilidade: true
}
c) -
let fruits = (carrinho) => {
    carrinho = []
    carrinho.push(fruitsOne);
    carrinho.push(fruitsTwo);
    carrinho.push(fruitsThree);

    console.log(carrinho);
}
d) -
fruits(fruitsOne);
*/

// Desafios
/*
1) -
let profile = (nome, idade, profissao) => {
    profile = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(`nome: ${profile.nome}, profissao: ${profile.profissao}, idade: ${profile.idade}, 
    tipo: ${typeof(profile)}`);
}
profile("lais",26,"Instrutora");
--------------------------------------------------------------------------------------------------------
2)-
let movieOne = {
        ano_lancamento: 2000,
        nome : "O Auto da Compadecida"
    }
let movieTwo = {
        ano_lancamento: 2007,
        nome : "O Auto da Compadecida"
    }

function movies(movieOne,movieTwo) {
    
    return (`O primeiro filme foi lançado antes do segundo? ${movieOne < movieTwo},
    O primeiro filme foi lançado no mesmo ano do segundo? ${movieOne == movieTwo}`)

}

let dataMovies = (movies(movieOne.ano_lancamento,movieTwo.ano_lancamento));
console.log(dataMovies);
---------------------------------------------------------------------------------------------------------

3) -
let array = [];
const fruitsOne = {
    nome: "Manga",
    diponibilidade: true
}
const fruitsTwo = {
    nome: "Caju",
    diponibilidade: true
}
const fruitsThree = {
    nome: "Jaca",
    diponibilidade: true
}
let fruits = (carrinho) => {
    carrinho = []
    carrinho.push(fruitsOne);
    carrinho.push(fruitsTwo);
    carrinho.push(fruitsThree);

    console.log(carrinho);
}
let disponibilidade = (frutas) =>{
    frutas = !frutas;
    console.log(`${fruitsOne.nome}, ${fruitsOne.frutas}`);
}
fruits(fruitsOne);
let notFruits = fruitsOne.diponibilidade;
disponibilidade(notFruits);
*/