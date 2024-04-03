"use strict";
// read the input from two textboxes
let btnSum = document.querySelector("#btnSum");
let fnoInput = document.querySelector("#fno");
let snoInput = document.querySelector("#sno");
let result = document.getElementById("result");
let sum = 0;
let fno = 0;
let sno = 0;
if (btnSum)
    btnSum.addEventListener("click", () => {
        if (fnoInput != null) {
            fno = parseInt(fnoInput.value);
        }
        if (snoInput != null) {
            sno = parseInt(snoInput.value);
        }
        sum = fno + sno;
        if (result)
            result.innerHTML = sum.toString();
    });
//export {}
