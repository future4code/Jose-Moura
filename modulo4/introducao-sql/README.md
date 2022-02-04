# Introdução SQL

## Exercicio 1
````
create table Actor(
	id varchar(255) primary key,
    name varchar (255) not null,
    salary float not null,
    birth_date date not null,
    gender varchar(6) not null
);
````
a)- </br>
    VARCHAR(255) - Cadeia de caracteres com no máximo 255 </br>
    PRIMARY KEY - Chave primaria, identificador único da tabela </br>
    NOT NULL - Significa que o campo não pode ser nulo </br>
    DATE - Representa campos com data </br>
    FLOAT - Representa numero não inteiro na tabela </br> 

b)- </br>
````
show databases;
show tables;
````
Mostra os bancos de dados e as tabelas criadas no banco respectivamente </br>

c) - </br>
````
describe Actor;
````

Mostra as informações da tabela. EXEMPLO: </br> 
|field |type | Null | Key|
|--- |--- |--- |--- |
|id | varchar(255)	| NO |	PRI	|
|name |	varchar(255)| NO | |
<hr/>

## Exercicio 2
a)- <br/>
````
insert into Actor(id, name, salary, birth_date, gender) values("002", "Glória Pires", 1.200,00, "1963-08-23", "female");
````

b)- <br/>
````
insert into Actor(id, name, salary, birth_date, gender) values("002", "Cléo Pires", 200000, "1988-08-23", "female");
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
````
ERRO: Entrada duplicada '002' para a chave 'PRIMARY' - A primary key foi duplicada, e esse valor é para ser unico.
<hr/>

## Exercicio 3
a)-
````
select id, name from Actor WHERE gender = "female";
````
b)-
````
select salary from Actor WHERE name =  "Tony Ramos";
````
c)-
````
select * from Actor WHERE gender = "invalid";
````
Retornou a tabela com os campos vázios. </br>

d)-
````
select id, name,salary from Actor WHERE salary <= 500000;
````

e)-
````
Error Code: 1054. Unknown column 'nome' in field list
````
ERRO: Coluna desconhecida 'nome' na lista de campos - A coluna 'nome' não foi encontrada, o esperado era 'name'.
<hr/>

## Exercicio 4

a)- </br>
A query seleciona todos os atores que tem a letra A ou J e o salário maior que 300000
b)- 
````
select * from Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
````
c)-
````
select * from Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
````
e)-
````
select * from Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 35000 AND 900000;
````

## Exercicio 5
a)-
````
create table filmes(
	id int primary key,
    titulo varchar(255) not null,
    sinopse text not null,
    data_lancamento date not null,
    avaliacao int not null
);
````
b)-
````
insert into filmes(id, titulo, sinopse, data_lancamento, avaliacao) 
values(
001, 
"Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
"2006-01-06", 
7);
````
c)-
````
insert into filmes(id, titulo, sinopse, data_lancamento, avaliacao) 
values(
002, 
"Doce de mãe", 
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
"2012-12-27", 
10);
````
d)-
````
insert into filmes(id, titulo, sinopse, data_lancamento, avaliacao) 
values(
003, 
"Dona Flor e Seus Dois Maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.", 
"2007-11-02", 
8);
````
e)-
````
insert into filmes(id, titulo, sinopse, data_lancamento, avaliacao) 
values(
004, 
"O Auto da Compadecida", 
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. 
Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, 
que os persegue pela região.", 
"2000-09-15", 
9);
````

## Exercicio 6
a)-
````
select id, titulo, avaliacao FROM filmes WHERE id = 003;
````
b)-
````
select * from filmes WHERE titulo = "O Auto da Compadecida";
````
c)-
````
select id, titulo, sinopse from filmes WHERE avaliacao > 7;
````

## Exercicio 7
a)-
````
select * from filmes WHERE titulo LIKE "%vida%";
````
b)-
````
select * from filmes WHERE (titulo LIKE "%vida%" or sinopse LIKE "%vida%");
````
c)-
````
select * from filmes WHERE data_lancamento < "2022-01-31";
````
d)-
````
select * from filmes WHERE data_lancamento < "2022-01-31" AND (titulo LIKE "%vida%" or sinopse LIKE "%vida%") AND avaliacao > 7;`
````