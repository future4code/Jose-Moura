````function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

   newAnimals = animais.map((item, index, array) => {
      return `${item.nome}`
   });
   console.log(newAnimals);

}
criarArrayNomesAnimais()```
