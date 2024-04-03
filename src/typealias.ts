
let username : string = "Sachin";
let email : string ="saching@abc.com";
let userid:number = 101;
let isActive:boolean = true;

type User =
{
    userName:string
    email:string
    userid:number
    isActive:boolean
}


let user1:User = 
{
    userName:"saching",
    email:'sachin@abc.com',
    userid:101,
    isActive:true
}

let mailid = user1.email;
user1.userid = 201;

let user2:User = 
{
    userName:"kholi",
    email:'sachin@abc.com',
    userid:102,
    isActive:false,
    //age:20
}

let users:User[] = [
    {
        userName:"saching",
        email:'sachin@abc.com',
        userid:101,
        isActive:true
    },
    {
        userName:"saching",
        email:'sachin@abc.com',
        userid:101,
        isActive:true
    },
    {
        userName:"saching",
        email:'sachin@abc.com',
        userid:101,
        isActive:true
    }]

users[0].email;

interface IPerson{
    personId:number;
    firstName:string;
    lastName:string;
    mobile:string;
    isPaid:boolean
    calculateAmount (duration:number) : number 
}

let person:IPerson=
{
    personId:123,
    firstName:'string',
    lastName:'string',
    mobile:'string',
    isPaid:true,

    calculateAmount(time : number):number
    {
        return 123;
    }
}


class Person
{
    private firstName:string;
    private lastName:string;
    protected age:number;

    constructor(fname:string,lname:string,age:number)
    {
        this.firstName = fname
        this.lastName = lname
        this.age = age;
    }
    setAge(age:number){this.age = age}
    getAge():number{return this.age}

    get FirstName(){return this.firstName}
    set FirstName(fname:string){this.firstName = fname}
}
let p1 = new Person('sachin','tendulkar',40);
p1.setAge(30);
let a = p1.getAge();
p1.FirstName = "sachin";
let name  = p1.FirstName;

class Employee extends Person
{

}

let emp = new Employee("ramesh","kumar",32);


class Product
{
    // productId:number;
    // productName:string;
    // price:number;
    // isInStock:boolean;


    constructor(public productId:number, public productName:string, public price:number, public isInStock:boolean)
    {
        // this.productId = productId;
        // this.productName = productName;
        // this.price = price;
        // this.isInStock = isInStock;
    }
}

let p2 = new Product(111, "product 1", 67000,true );





export {}