type definicao = {

}
function definirTipo(frase:string | number | boolean | any){
    if(typeof frase === 'string'){
        return 'string'
    }else if(typeof frase === 'number'){
        return 'number'
    }else if(typeof frase === 'boolean'){
        return 'boolean'
    }else {
        return 'undefined'
    }

}

console.log(definirTipo(25));