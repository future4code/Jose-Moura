// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
// -------       No console funcionou
function retornaArrayOrdenado(array) {
  return array.sort();
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let newArray;
  let novoArray = [];
  const nameProducts = array.filter((item, index, array) => {
    if (item % 2 === 0) {
      newArray = item;
      console.log(newArray);
    }
  });
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maxValue = Math.max(...array);
  return maxValue;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let entreNumeros = {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
    diferenca: Math.max(num1, num2) - Math.min(num1, num2),
  };
  return entreNumeros;
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    return "Isósceles";
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
//---------     No console funcionou
function retornaSegundoMaiorESegundoMenor(array) {
  let newTotal;
  let newMax = Math.max(...array) - 1;
  let newMin = Math.min(...array) + 1;
  return (newTotal = [newMax, newMin]);
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let newPerson = {
    nome: "ANÔNIMO",
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco,
  };

  return newPerson;
}

// EXERCÍCIO 13A
//---------     No console funcionou
function retornaPessoasAutorizadas(pessoas) {
  const newPeople = pessoas.filter((item, index, array) => {
    if (item.altura >= 1.5 && item.idade > 14 && item.idade < 60) {
      return true;
    }
  });
  console.log(newPeople);
}

// EXERCÍCIO 13B
//---------     No console funcionou
function retornaPessoasNaoAutorizadas(pessoas) {
  const newPeople = pessoas.filter((item, index, array) => {
    if (item.altura >= 1.5 && (item.idade > 14 || item.idade < 60)) {
      return true;
    }
  });
  console.log(newPeople);
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
//--------  No console funcionou
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function (n1, n2) {
    if (n1.nome < n2.nome) {
      return -1;
    } else {
      return true;
    }
  });
  console.log(consultas);
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
