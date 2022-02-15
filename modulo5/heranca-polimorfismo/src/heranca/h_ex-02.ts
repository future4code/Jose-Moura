import { User } from "./h_ex-01";

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
    introduceYourself: any;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }


  }

  const addItems = new Customer("02", "basilio@loh.com", "basilio", "12345", "2562131");
  console.log(addItems);
  const customer = new Customer("02", "basilio@loh.com", "basilio", "12345", "2562131") // passa os parâmetros corretos
 customer.introduceYourself()