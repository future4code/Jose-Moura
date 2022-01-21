function dataNascimento(nome:string, nascimento:string){
    const formatData:string[] = nascimento.split("/");
    return `Olá me chamo ${nome}, nasci no dia ${formatData[0]} do mês de ${formatData[1]} do ano de ${formatData[2]}`;
}
console.log(dataNascimento("Alê","01/12/2012"));
