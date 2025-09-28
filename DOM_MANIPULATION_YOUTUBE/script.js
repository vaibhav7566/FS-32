// 1. Selection of an Element

// var a=document.querySelector("h1")
// console.log(a);

// 2. Changing HTML

// var a = document.querySelector("h1")
// a.innerHTML = "Chanaged"
// console.log(a);

// 3. Changing CSS

//    var a = document.querySelector("h1")
// a.style.color = "white"
// a.style.backgroundColor = "black"

// 4. Event Listener

// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     a.innerHTML = "Badal gya hu main"
//     a.style.backgroundColor = "#000"
//     a.style.color = "yellow"
// })


// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     a.innerHTML = "tari maki chut"
//     a.style.backgroundColor = "pink"
//     a.style.color = "black"
// })

// bulb Example

// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")

// var flag = 0

// btn.addEventListener("click", function () {
//     if (flag === 0) {
//         bulb.style.backgroundColor = "yellow"
//         console.log("jal gya")
//         flag = 1
//     }else{
//         bulb.style.backgroundColor = "transparent"
// console.log("bhuj gya")
// flag = 0
//     }

// }
// )

// selecting multiple elements at a same time

// var h = document.querySelectorAll("h1")

// h.forEach(function(val){
//     console.log(val)
// })


// selecting an html Element using id and classname

// document.getElementById("box")
// document.getElementsByClassName("box1")


//  var box = document.getElementById("box")

// //  box.innerHTML = "<h1>Hello</h1>"
// box.textContent = "<h1>Hello</h1>"

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");


btn.addEventListener("click",function(){

    h1.innerHTML = 'Request Sending...'
    h1.style.color = "orange";

    setTimeout(function(){
    h1.innerHTML = 'Request Accepted';
    h1.style.color = "white";
    },3000)

})