//	Exercícios de interpretação de código
/*
1)-
a)-
> 1 [nome: "Amanda Rangel", apelido: "Mandi"]
> 2 [nome: "Laís Petra", apelido: "Laura"]
> 3 [nome: "Letícia Chijo", apelido: "Chijo"]
------------------------------------------------
2)-
a)-
> ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
----------------------------------------------------
3)-
a)-
> [  
    nome: "Amanda Rangel", apelido: "mandi",
    nome: "Laís Petra", apelido: "Laura"
]
*/

//	Exercícios de escrita de código
/*
1)-
a)-
> const nameDogs = pets.map((item, index, array) => {
    return item.nome;
 })
 console.log(nameDogs);
 --------------------------------------------------------------
 b)-
> const nameDogs = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 console.log(nameDogs);
 --------------------------------------------------------------
c) - 
> const nameDogs = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
 })
 const namePoodle = nameDogs.map((item, index, array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
 })
 console.log(namePoodle);
------------------------------------------------------------------------------------
2)-
a)-
>  const nameProducts = produtos.map((item, index, array) => {
    return item.nome
 })
 console.log(nameProducts);
 --------------------------------------------------------------------------
 b)-
 >  const nameProducts = produtos.map((item, index, array) => {
    return `nome: ${item.nome}, preço ${((item.preco)-((item.preco * 5) / 100).toFixed(2))}`
 })
 console.log(nameProducts);
 ---------------------------------------------------------------------------------
 c)-
 >  const nameProducts = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })
 console.log(nameProducts);
 ---------------------------------------------------------------------------------------
 d) - 
>  const nameProducts = produtos.filter((item, index, array) => {
    if(item.nome.includes('Ypê')){
        return true;
    } 
})
console.log(nameProducts)
----------------------------------------------------------------------------------------
e)-
>  const nameProducts = produtos.filter((item, index, array) => {
    if(item.nome.includes('Ypê')){
        return true;
    } 
})
 const nameProdutos = nameProducts.map((item, index, array) => {
    return `Compre ${item.nome} por ${item.preco}`
 })
 console.log(nameProdutos);
*/