//A) -
// ENTRADA: obterEstatisticas([21, 18, 65, 44, 15, 18]);
//SAÍDA: { maior: 65, menor: 15, media: 30.166666666666668 }

    //RESPOSTA DO ITEM C - NÃO TERMINADO
    const amostraDeIdades  = {
        numeros: [21, 18, 65, 44, 15, 18]
    }

function obterEstatisticas(numeros:Array<number>) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))

//B) -
//SOMA = NUMBER - RECEBE O NUMERO 0
//ESTATISTICAS = OBJETO - RECEBE UM OBJETO CONTENDO O MAIOR, MENOR E A MÉDIA DOS NUMEROS.

//C) -
