"use strict";
let btnAdd = document.querySelector("#btnAdd");
if (btnAdd) {
    let todoInput = document.querySelector("#todoText");
    let ulEle = document.querySelector("#ulelement");
    btnAdd.addEventListener("click", () => {
        let dotoText = "";
        if (todoInput) {
            dotoText = todoInput.value;
            todoInput.value = "";
        }
        if (ulEle) {
            let liEle = document.createElement("li");
            liEle.textContent = dotoText;
            ulEle.appendChild(liEle);
        }
    });
}
