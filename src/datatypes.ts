// Primitive types
// 1. number
// 2. string
// 3. boolean

let name:string = "ravi"
let age:number = 10;
let isActive:boolean = true;


// special types

// any
let abc:any;
abc=10;
abc="10";
abc=false

// void
let x:void;
//x=234;

// undifined
//undefined

// enum
const left = 1;
const right = 2;
const up = 3;
const down = 4;

enum Direction
{
    LEFT = "L",
    RIGHT ="R" ,
    UP = "U",
    DOWN = "D",
}


// function definition
function Move(direction:Direction):void {
    console.log("moving")
}

// function call

Move(Direction.DOWN);






export {}