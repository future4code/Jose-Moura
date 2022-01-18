/*
1 - 
a)- ultilizando o process.argv

b)-
const yourName = process.argv[2];
const yourAge = Number(process.argv[3]);
console.log(`Olá, ${yourName}! Você tem ${yourAge} anos.`);

c)-
const newAge = yourAge + 7;
console.log(`Olá, ${yourName}! Você tem ${yourAge} anos. Em sete anos você terá ${newAge}`);
*/

/*
2 - 
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
*/

/*
3- 
const newTask = process.argv[2]
const tasks = [];
tasks.push(newTask)
console.log(tasks)
*/