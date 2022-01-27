export type dataUsers = {
    id:number,
    name:string,
    email:string,
    type: userTypes,
    age: number
}

export enum userTypes{
    ADMIN="ADMIN",
    NORMAL="NORMAL"
}

export let users:dataUsers[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: userTypes.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userTypes.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userTypes.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userTypes.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userTypes.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userTypes.ADMIN,
        age: 60
    }
]