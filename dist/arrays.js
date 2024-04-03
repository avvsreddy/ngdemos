"use strict";
// Arrays
let numbers1 = [];
let numbers3 = [34, 234, 45, 24, 45];
let numbers4 = Array;
// array functions
// add new data into array
numbers1.push(10); // adds to the end of the array
numbers1.unshift(20); // adds to the start of the array
numbers1.pop(); // reads and removes the last element
numbers1.shift(); // reads and removes the first element
//let evens =  numbers2.filter(isEven)
//let evens2 = numbers2.filter(v => v % 2 == 0);
// for(let i = 0;i< evens2.length; i++)
// {
//     console.log(evens2[i])
// }
//evens2.forEach(v => console.log(v))
// function isEven(value:number,index:number,data:number[]){
//     return value % 2 == 0;
// }
let numbers2 = [1, 2, 3, 4, 5, 6, 22];
let doubles = numbers2.map(v => v + v);
let sum2 = numbers2.reduce((acc, val) => acc += val);
//console.log(sum)
let array1 = [1, 2, 3];
//let array2 = array1;
let array2 = [...array1];
array1.push(4);
//array2.forEach(v => console.log(v));
//console.log(array2);
let message = "hello world";
console.log(message);
let msg = [...message];
console.log(msg);
let msg2 = ['1', '2', ...message];
function findMax(numbers) {
    // return numbers.reduce((max,val) => 
    // {
    //     if(val > max)
    //     max = val;
    //     return max;
    // },0);
    return Math.max(...numbers);
}
let max = findMax(numbers2);
console.log(max);
