let input = document.querySelector("input");
let names = document.querySelectorAll("ul li")


input.addEventListener("input",function(){

let inpvalue = input.value;

names.forEach(function(val){
   name = val.textContent
   
   if(name.includes(inpvalue)){
    val.style.display = "block"
   }else{
val.style.display = "none"
    }
   
})

})

    

