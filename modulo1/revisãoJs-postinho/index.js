
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!== ${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a} === ${b} é  ${a === b}`
}
console.log(checarIgualdade(1, 2));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a,b){
	return `No comparador de igualdade ${a} > ${b} é  ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = (nomeDoUsuario,anoDeNascimento,senhaDoUsuario,nacionalidade) => {
     usuario = []

    nomeDoUsuario = prompt("Digite seu nome: ");
	anoDeNascimento = Number(prompt("Digite seu ano de nascimento: "));
	senhaDoUsuario = prompt("Digite sua senha: ");
	nacionalidade = prompt("Digite sua nacionalidade: ");
	
	usuario = [nomeDoUsuario,anoDeNascimento,senhaDoUsuario,nacionalidade];
	
	let validacaoUsuarios = usuario.filter((item, index, array) => {
		if((2021 - anoDeNascimento > 18) && (senhaDoUsuario.length > 6) && (nacionalidade === "brasileira")){
			return true
		}
	})
	console.log(validacaoUsuarios);
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
	const senha = prompt("Digite sua senha: ");
	if(senha.toLowerCase() === login.toLowerCase()){
		console.log("Usuario Logado");
	}else{
		console.log("Senha Inválida");
	}
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
		nome = prompt("Digite seu nome: ");
	vacina = prompt("Digite sua vacina: ");

	let data = new Date('2021-10-19');

	if(vacina === "Coronavac"){
		data.setDate(data.getDate() + 28)
	}else if(vacina === "Astrazenica"){
		data.setDate(data.getDate() + 90)
	}else if(vacina === "Pfizer"){
		data.setDate(data.getDate() + 90)
	}

	let tempo = {
		Coronavac: '28 dias',
		Astrazenica: '90 dias',
		Pfizer: '90 dias'
	}

	if(vacina === "Coronavac"){
		console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo.Coronavac} dias. Compareça no posto na data ${data.toDateString()}.`)
	}else if(vacina === "Astrazenica"){
		console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo.Astrazenica} dias. Compareça no posto na data ${data.toDateString()}.`)
	}else if(vacina === "Pfizer"){
		console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo.Pfizer} dias. Compareça no posto na data ${data.toDateString()}.`)
	}

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
	
	function segundaDose(usuarios){
  let nomeUsuario = usuarios.filter((item, index, array) => {
	  if(item.imunizacao.includes("incompleta")){
		  return true
	  }
  })
let listaUsuario = nomeUsuario.map((item, index, array) =>{
	return `nome:${item.nome}, imunizacao: completa`
	});
  
  console.log(listaUsuario);
}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

	function saberImunizacao(usuario){
	let resumoUsuario = usuario.filter((item, index, array) => {
		if(item.imunizacao.includes("incompleta")){
			return true;
		}
	})
	let listaIncompleta = resumoUsuario.map((item, index, array) =>{
		return `Olá ${item.nome}! Sua imunização está ${item.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
	});
	console.log(listaIncompleta);

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());
