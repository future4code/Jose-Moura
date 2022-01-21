const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

if(operation === "add"){
    console.log(`RESPOSTA: ${number1 + number2}`)
}else if(operation === "sub"){
    console.log(`RESPOSTA: ${number1 - number2}`)
}else if(operation === "mult"){
    console.log(`RESPOSTA: ${number1 * number2}`)
}else if(operation === "div"){
    console.log(`RESPOSTA: ${number1 / number2}`)
}