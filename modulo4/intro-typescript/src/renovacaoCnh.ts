function checaRenovacaoRG(anoAtual:string,anoNascimento:string, anoEmissao:string):boolean {
    anoAtual = process.argv[2];
    anoNascimento= process.argv[3]
    anoEmissao = process.argv[4]
 
    const idade:number = parseInt(anoAtual) - parseInt(anoNascimento)
    const tempoCarteira:number = parseInt(anoAtual) - parseInt(anoEmissao)
 
    const cond1:boolean = idade <= 20 && tempoCarteira >= 5
    const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3:boolean = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 console.log(checaRenovacaoRG('2022', '1992', '2020'))
 