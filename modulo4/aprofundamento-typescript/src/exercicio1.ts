//A) -
//const minhaString:string = 1;
//console.log(minhaString);
// RETORNA UM ERRO O tipo 'number' não pode ser atribuído ao tipo 'string'

//B) -
const meuNumero:number | string = "AUGUSTO";
console.log(meuNumero);
//PODEMOS USAR O '|' PODEMOS UM TIPO DE VARIAVEL OU OUTRO.

//C) - E D) - 
type Person = {
    nome: string,
    idade: number,
    corFavorita: string
}
enum CorFavorita {
    Preta = "Preta",
    Rosa = "Rosa",
    Vermelho = "Vermelho"
}
const PersonInfo: Person = {
    nome: "Jose",
    idade: 29,
    corFavorita: CorFavorita.Preta
}
const PersonInfo1: Person = {
    nome: "Ale",
    idade: 7,
    corFavorita: CorFavorita.Rosa
}
const PersonInfo2: Person = {
    nome: "Lenne",
    idade: 40,
    corFavorita: CorFavorita.Rosa
}
console.log([PersonInfo,PersonInfo1,PersonInfo2]);

