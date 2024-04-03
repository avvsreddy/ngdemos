

let btnAdd:HTMLButtonElement|null=document.querySelector("#btnAdd");

if(btnAdd)
{
    let todoInput:HTMLInputElement | null = document.querySelector("#todoText");

    let ulEle:HTMLUListElement|null=document.querySelector("#ulelement")

    btnAdd.addEventListener("click",() =>{
    let dotoText:string="";    
    if(todoInput)
    {
        dotoText = todoInput.value;
        todoInput.value = ""
    }
    if(ulEle)
    {
        let liEle:HTMLLIElement = document.createElement("li");
   
       liEle.textContent= dotoText
       ulEle.appendChild(liEle);
      
    }
    });
}