//	Exercícios de interpretação de código
/*
1)-
a)-
> 12345
-----------------------------------------------------------
2) -
a)-
> [19,20,21,23,25,27,30]
b)-
> Não é suficiente, ele imprime o elemento inteiro. 
------------------------------------------------------------
3)- 
> ****
*/

//	Exercícios de escrita de código
/*
1)-
> const animalsUser = Number(prompt("Tem quantos animais de estimação?"));
a)-
> if(animalsUser == 0){
    console.log("Que pena! Você pode adotar um pet!");
}
b)-
> else {
    let nameAnimals = [];
    let contAnimal = 1;
    while(contAnimal <= animalsUser ){
        const whatsAnimal = prompt("Quais os nomes dos bichinhos?");
        nameAnimals.push(whatsAnimal);
        contAnimal++;
    }
c)-
>    console.log(nameAnimals)
}
---------------------------------------------------------------------------------------
2)-
a)-
> let allElements = (arrayOriginal) => {
    for(let allNumbers of arrayOriginal){
        console.log(allNumbers);
    }
}
b)-
> let allElements = (arrayOriginal) => {
    for(let i = 0; i < arrayOriginal.length;i++){
        let contElements = arrayOriginal[i] / 10;
        console.log(contElements);
    }
}
c)-
> let allElements = (arrayOriginal) => {
    for(let i = 0; i < arrayOriginal.length;i++){
        if(arrayOriginal[i] % 2 == 0) {
            newArray = arrayOriginal[i];
        }
        console.log(newArray);
    }
}
d)-
> let allElements = (arrayOriginal) => {
    let newArray = [];
    for(let i = 0; i < arrayOriginal.length;i++){
        let frase = (`O elemento do índex ${[i]} é ${arrayOriginal[i]}`);
            newArray[i] = frase
    }
    console.log(newArray);
}
e)-
> let allElements = (arrayOriginal) => {
for(let i = 0; i < arrayOriginal.length;i++){
    let biggerNumber = Math.max(...arrayOriginal);
    let smallerNumber = Math.min(...arrayOriginal);
    console.log(`O maior número é ${biggerNumber} e o menor é ${smallerNumber}`);
}
}
*/

