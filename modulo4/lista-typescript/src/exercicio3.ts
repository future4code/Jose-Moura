type catalogo = {
    nomeFilme : string | number,
    anoLancamento: number | string,
    genero:GENERO,
    nota?: number | string
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const  listFilmes:catalogo[]=[
    {
        nomeFilme: "007",
        anoLancamento: 2021,
        genero: GENERO.ACAO,
    },
    {
        nomeFilme: "O touro Ferdinando",
        anoLancamento: 2019,
        genero: GENERO.COMEDIA,
        nota:5
    }
]
console.table(listFilmes);