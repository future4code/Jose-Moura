# Relações SQL

## Exercicio 1
a)- É aquela que faz referência a uma chave primária (PK) ou candidata em outra tabela. Mas se aplica a tabelas do mesmo banco. </br>
b)- ````
    INSERT INTO Rating values(001, "Muito bom", 8.9, 004);
    INSERT INTO Rating values(002, "Gostei demais", 9.9, 001);  
    ````</br>
c)- ````
    INSERT INTO Rating values(003, "Errei", 9.5, 007);
    ````</br>
    ErroCode: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha - A LINHA FILHA DEPENDE DA PK, MAS A REFERENCIA NÃO FOI ENCONTRADA. </br>
d)-````
    ALTER TABLE filmes CHANGE avaliacao notas float not null;
    ````</br>
e)-````
    DELETE FROM filmes WHERE id = 001;
    ````</br>
<hr/>

## Exercicio 2
a)- Essa tabela faz referencia as duas tabelas com o PK id.</br>
b)-````
    INSERT INTO MovieCast values(001,"001");
    INSERT INTO MovieCast values(002,"002");
    INSERT INTO MovieCast values(002,"005");
    INSERT INTO MovieCast values(001,"003");
    INSERT INTO MovieCast values(002,"007");
    INSERT INTO MovieCast values(001,"005");
    INSERT INTO MovieCast values(002,"001");
    INSERT INTO MovieCast values(002,"006");
    ````</br>
c)-````
    INSERT INTO MovieCast values(003,"002");
    ````</br>
ErrorCode: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha - Não existe uma chave primária para fazer referencia</br>
d)-````
    DELETE FROM Actor WHERE id = "007";
    ````</br>
ErrorCode: Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha - Não é possivel excluir um ator pois ele está sendo referencia para outra chave primaria. </br>

<hr/>

## Exercicio 3
a)-Ele seleciona todos os filmes em que o ID do filme for igual ao ID da avaliação.
O operador ON informa que a condição para a junção das duas tabelas é o ID nas duas tabelas.</br>
b)-````
    SELECT a.id, a.titulo, a.notas from filmes a
    INNER JOIN Rating r
    ON a.id = r.movie_id;
    ````
<hr/>
