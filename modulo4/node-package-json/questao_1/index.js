//a)- ultilizando o process.argv

//b)-
const yourName = process.argv[2];
const yourAge = Number(process.argv[3]);
console.log(`Olá, ${yourName}! Você tem ${yourAge} anos.`);

//c)-
const newAge = yourAge + 7;
//console.log(`Olá, ${yourName}! Você tem ${yourAge} anos. Em sete anos você terá ${newAge}`);