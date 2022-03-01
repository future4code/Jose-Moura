// ====== EXERCICIO 1
//a)- São usados para suportar a inicialização de valores internos
//b)-


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    //Exemplo
    public get getCpf():string{
        return this.cpf;
    }
    public get getName():string{
        return this.name;
    }
    public get getAge():number{
        return this.age;
    }
    public get getTransaction():Transaction[]{
        return this.transactions
    }
    public set setTransaction(transactions:Transaction[]){
       this.transactions = transactions;
    }
  }
  const dataUser = new UserAccount('987.654.32-10', 'Alê', 28);
  console.log(dataUser);
//Foi impresso somente uma vez
//c)- Podemos ter acesso através do Get que é usado para obter a variável e Set que é usado para definir uma variável.
//Exemplo: public get getCpf():string{ return cpf } - public set cpf(cpf:string){ this.cpf = cpf};


// ====== EXERCICIO 2
class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description:string, value: number, date:string){
        this.description = description,
        this.value = value,
        this.date = date
    }
    
    public get getDescription():string{
        return this.description;
    }
    public get getValue():number{
        return this.value;
    }
    public get getDate():string{
        return this.date;
    }
    
}
let transactionOne = new Transaction("Compra", 25, "25/02/2022");
console.log(dataUser,  transactionOne);

// =====Exercicio 3
class Bank {
    private accounts: UserAccount[];

    constructor (accounts:UserAccount[]){
        this.accounts = accounts;
    }

    public get getAccounts():UserAccount[]{
        return this.accounts
    }
    public set setAccounts(accounts:UserAccount[]){
        this.accounts = accounts
    }
}