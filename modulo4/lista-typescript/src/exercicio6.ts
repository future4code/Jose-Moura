type DadosClientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const contaClientes: DadosClientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const liberarEmprestimos = (contaClientes:DadosClientes[]) => {
	for(let i of contaClientes){
		const countDebitos = i.debitos.reduce(((acum, vlr) => acum + vlr), 0);

		if(i.saldoTotal < countDebitos){
			i.saldoTotal = i.saldoTotal - countDebitos;
			i.debitos = [];
			console.table([i])
		}
	}
	
}
	
	
liberarEmprestimos(contaClientes);