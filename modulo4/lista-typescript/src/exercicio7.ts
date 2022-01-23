type Estoque = {
    nome: string,
    quantidade:number,
    valorUnitario: string | number
}

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const DadosEstoque: Estoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ordenaEstoque = (DadosEstoque: Estoque[])=> {
    for(let i of DadosEstoque){
        if(i.valorUnitario === "number"){
            //const novoValor = ajustaPreco(i.valorUnitario);
            //return {...[i], valorUnitario: novoValor}
        }
    }
}//.sort((a:Estoque, b:Estoque) => { return (a.quantidade > b.quantidade) ? -1 : ((b.quantidade > a.quantidade) ? 1 : 0) });

console.log();

//ajustaPreco(ordenaEstoque);