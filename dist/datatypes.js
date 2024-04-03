"use strict";
// Primitive types
// 1. number
// 2. string
// 3. boolean
Object.defineProperty(exports, "__esModule", { value: true });
let name = "ravi";
let age = 10;
let isActive = true;
// special types
// any
let abc;
abc = 10;
abc = "10";
abc = false;
// void
let x;
//x=234;
// undifined
//undefined
// enum
const left = 1;
const right = 2;
const up = 3;
const down = 4;
var Direction;
(function (Direction) {
    Direction["LEFT"] = "L";
    Direction["RIGHT"] = "R";
    Direction["UP"] = "U";
    Direction["DOWN"] = "D";
})(Direction || (Direction = {}));
// function definition
function Move(direction) {
    console.log("moving");
}
// function call
Move(Direction.DOWN);
