const nascimento:string = process.argv[2];
const emissaoRg:string = process.argv[3];

const rovacaoIdentidade = (dataNascimento:string, dataEmissao: string) => {
    const formatData:string[] = dataNascimento.split("/");
    const defIdade = Number(formatData[3]) - 2021;
    if(defIdade < 20){
        return `Você tem ${defIdade} anos e seu RG tem que ser renovada de 5 em 5 anos`
    }else if(defIdade > 20 && defIdade < 50){
        return `Você tem ${defIdade} anos e seu RG tem que ser renovado de 10 em 10 anos`
    }else if(defIdade > 50){
        return `Você tem ${defIdade} anos e seu RG tem que ser renovado de 15 em 15 anos`
    }
}
console.log(rovacaoIdentidade(nascimento,emissaoRg));