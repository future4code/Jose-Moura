//A) -
type Post= {
    autor: string,
    texto: string
} 
const Posts = [
    { autor: "Alvo Dumbledore", texto: "Não vale a pena viver sonhando e se esquecer de viver" },
    { autor: "Severo Snape", texto: "Menos 10 pontos para Grifinória!"},
    { autor: "Hermione Granger", texto: "É levi-ô-sa, não levio-sá!" },
    { autor: "Dobby", texto: "Dobby é um elfo livre!" },
    { autor: "Lord Voldemort", texto: "Avada Kedavra!" }
  ]
console.log(Posts);

//B) -
function buscarPostsPorAutor(posts:string[], autorInformado:string) {
    return posts.filter(
      (post:string) => {
       // return post.autor === autorInformado //RETORNA ERRO - A propriedade 'autor' não existe no tipo 'string'.
      }
    )
  }
  //console.log(buscarPostsPorAutor(Posts, "Dobby"));
//ENTRADA: buscarPostsPorAutor(Posts, "Severo Snape");
//SAIDA: ARRAY DE OBJETO
