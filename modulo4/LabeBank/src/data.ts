export type TypeCount = {
    nome: string,
    cpf: number | string,
    dataNascimento: string,
    balance: number,
    extract: payments[]
}
export type payments = {
    value: number,
    dataTransaction: string
    descritpion: string
}

export const users: TypeCount[] = [
    {
        nome:"Alê Moura",
        cpf:'654.321.258-71',
        dataNascimento:'21/12/2013',
        balance: 6000, 
        extract:[
            {
                value: 800,
                dataTransaction: "01/01/2022",
                descritpion: "Boleto"
            },
        ]
    }
]