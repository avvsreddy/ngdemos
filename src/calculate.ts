// read the input from two textboxes

let btnSum:HTMLButtonElement | null = document.querySelector("#btnSum")
let fnoInput:HTMLInputElement | null = document.querySelector("#fno")
let snoInput:HTMLInputElement | null = document.querySelector("#sno")
let result:HTMLElement | null = document.getElementById("result")

let sum:number = 0;
let fno:number=0;
let sno:number=0;

if(btnSum)
btnSum.addEventListener("click",()=>
{
    if(fnoInput != null)
    {
        fno = parseInt( fnoInput.value)
       
    }
    if(snoInput != null)
    {
        sno  = parseInt( snoInput.value)
        
    }
   sum=fno + sno
    if(result)
    result.innerHTML = sum.toString();

})


//export {}