

let btn = document.querySelector("button")
let bdy = document.querySelector("body")

// way-1 to do

// let flag = false;

// btn.addEventListener("click",function(){

//     if(flag){
// document.body.className = "light"
//         flag = false;
//     }else{
//         document.body.className = "dark"
//         flag = true;
//     }
    
// })


// way-2 to do

// btn .addEventListener("click",function(){
//     if(bdy.classList.contains("light")){
//         bdy.classList.add("dark")
//         bdy.classList.remove("light")
//     }else{
//         bdy.classList.add("light")
//         bdy.classList.remove("dark")

//     }
// })