# Aprofundamento SQL

## Exercicio 1
a)- Remove a coluna salary; </br>
b)- Renomear a coluna gender para sex com no máximo 6 caracteres;</br>
c)- Altera a quantidade de caracteres para 255;</br>
d)- Alterou a quantidade de caracteres para 100;</br>
<hr/>

## Exercicio 2
a)- ```` 
    UPDATE Actor
    SET name = "Suely Franco", birth_date = "1963-08-23"
    WHERE id = 003;
    ````
b)-````
    UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes";
    ```` </br>
c)- ````
    UPDATE Actor
    SET name = "Rodrigo Santoro",
        salary = 850000,
        birth_date = "1975-08-22",
        gender = "male"
    WHERE id = 005; 
    ```` </br>
d)- ````
    UPDATE Actor
    SET name = "Rodrigo Santana",
        salary = 850000,
        birth_date = "1975-08-22",
        gender = "male"
    WHERE id = 011; 
    ```` </br>
O UPDATE foi realizado. Quando o SELECT foi executado, a tabela retornou NULL na ultima linha </br>
<hr/>

## Exercicio 3
a)- ````
    DELETE FROM Actor Where name = "Fernanda Montenegro";
    ````</br>
b)- ````
    DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;
    ````
<hr/>

## Exercicio 4
a)- ````
    SELECT MAX(salary) as Maior_salario
    FROM Actor
    ````</br>
b)- ````
    SELECT MIN(salary) as Menor_salario FROM Actor WHERE gender = "female";
    ````</br>
c)- ````
    SELECT COUNT(*)  AS QTD_ATRIZES FROM Actor WHERE gender = "female";
    ````</br>
d)- ````
    SELECT SUM(salary) FROM Actor;
    ````</br>
<hr/>

## Exercicio 5
a)- Ele contou a quantidade de atores e atrizes e diferençou entre 'male' e 'female'. </br>
b)- ````
    SELECT id, name FROM Actor
    WHERE gender = "male"
    ORDER BY  gender DESC
    ````</br>
c)- ````
    SELECT * FROM Actor
    WHERE gender = "male"
    ORDER BY salary ASC;
    ````</br>
d)- ````
    SELECT * FROM Actor
    WHERE gender = "male"
    ORDER BY salary ASC
    LIMIT 3;
    ````</br>
e)- ````
    SELECT AVG(salary) as MEDIA_SALARIO FROM Actor
    GROUP BY gender;
    ````
<hr/>

## Exercicio 6
a)- ````
    ALTER TABLE filmes ADD limite_reproducao DATE;
    ````</br>
b)- ````
    ALTER TABLE filmes CHANGE avaliacao avaliacao float;
    ````</br>
c)- ````
    UPDATE filmes
    SET limite_reproducao = "2022-02-01"
    WHERE id = 004;
    ````</br>
d)- ````
    DELETE FROM filmes WHERE id = 003;
    ````