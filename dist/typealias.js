"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "Sachin";
let email = "saching@abc.com";
let userid = 101;
let isActive = true;
let user1 = {
    userName: "saching",
    email: 'sachin@abc.com',
    userid: 101,
    isActive: true
};
let mailid = user1.email;
user1.userid = 201;
let user2 = {
    userName: "kholi",
    email: 'sachin@abc.com',
    userid: 102,
    isActive: false,
    //age:20
};
let users = [
    {
        userName: "saching",
        email: 'sachin@abc.com',
        userid: 101,
        isActive: true
    },
    {
        userName: "saching",
        email: 'sachin@abc.com',
        userid: 101,
        isActive: true
    },
    {
        userName: "saching",
        email: 'sachin@abc.com',
        userid: 101,
        isActive: true
    }
];
users[0].email;
let person = {
    personId: 123,
    firstName: 'string',
    lastName: 'string',
    mobile: 'string',
    isPaid: true,
    calculateAmount(time) {
        return 123;
    }
};
class Person {
    constructor(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    setAge(age) { this.age = age; }
    getAge() { return this.age; }
    get FirstName() { return this.firstName; }
    set FirstName(fname) { this.firstName = fname; }
}
let p1 = new Person('sachin', 'tendulkar', 40);
p1.setAge(30);
let a = p1.getAge();
p1.FirstName = "sachin";
let name = p1.FirstName;
class Employee extends Person {
}
let emp = new Employee("ramesh", "kumar", 32);
class Product {
    // productId:number;
    // productName:string;
    // price:number;
    // isInStock:boolean;
    constructor(productId, productName, price, isInStock) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.isInStock = isInStock;
        // this.productId = productId;
        // this.productName = productName;
        // this.price = price;
        // this.isInStock = isInStock;
    }
}
let p2 = new Product(111, "product 1", 67000, true);
