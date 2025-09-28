// let h1 = document.querySelector("h1");
// console.dir(h1);

// h1.innerHTML = "<i>hey</>"
// h1.hidden = true;

// let a = document.querySelector("a");
// console.dir(a);
// a.href = "https://www.google.com";
// a.setAttribute("href","https://www.google.com");

// let img = document.querySelector("img")
// img.setAttribute("src","https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

// let google = document.querySelector("a");
// console.log(google.getAttribute("href"));

// let remove = document.querySelector("a")
// remove.removeAttribute("href");
// console.log(remove)

// Dynameic DOM manipulation:

// createElement
// let h1 = document.createElement("h1")
// h1.innerText = "hello ji";
// document.body.appendChild(h1);
// document.body.prepend(h1);
// console.log(h1);


// document.body.removeChild(document.querySelector("h1"))

// let h1 = document.createElement("h1")
// console.log(h1)
// h1.textContent = "helio guy"
// document.body.appendChild(h1)
// h1.style.fontFamily = "helvatica"
// h1.style.textTransform = "capitalize"

// let h1 = document.querySelector("h1")
// h1.classList.add("hulu")
// console.dir(h1);
// h1.classList.remove("hulu")

// Task-1--

// let text = document.getElementById("name")
// // console.dir(text)
// text.textContent = "Welcome to sheriyans"

// Task-2--

// let lis = document.querySelectorAll("li");
// lis.forEach(function(val){
//     console.log(val.textContent)
// })

// Task-3-- Select a paragraph and replace its content with:
/* <b>Updated</b> by JavaScript */
// let para = document.querySelector("p");
// para.innerHTML = "<b>Updated</b> by JavaScript";

// Task-4-- How do get an src of an image.
// let img = document.querySelector("img")
// console.log(img.getAttribute("src"));
// console.log(img.src)

// Task-5-- Select a link and update its href to point to https://sheriyans.com.
// let a = document.querySelector("a");
// // a.setAttribute("href","https://sheriyans.com");
// a.href = "https://sheriyans.com"
// console.dir(a);

// Task-6-- Add a title attribute to a dive dynamically
// let div = document.querySelector("div");
// div.setAttribute("title","Harsh Sharma");
// div.title = "Harsh Sharma"
// console.dir(div);

// Task-7-- Remove the disabled attribute from a button.
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled")

// Task-8-- Create a new list item <li>New Task</i> and add it to the end of a <ul>
// let newli = document.createElement("li")
// newli.textContent = "New Task 5";
// let ul = document.querySelector("ul");
// ul.append(newli);

// Taks-9-- Create a new image element with a placeholder source and add it at the top of a div.
// let div = document.querySelector("div");
// let img = document.createElement("img");
// img.src = "https://images.unsplash.com/photo-1751670346016-bda0dc756da9?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   "
// div.prepend(img);

// Task-10-- Select the first item in a list and delete it from the DOM.
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

// Task-11-- Set the font size of all <p> elements to 18px using .style.
// let p = document.querySelectorAll("p");
// p.forEach(function(val){
//     val.style.fontSize = "18px"
// })


//       ---EventListner---

// let p = document.querySelector("p")
// function rel(){
//     p.style.color ="red"
// }
// p.addEventListener("dblclick", red)
// p.removeEventListener("dblclick", red)

// let inp = document.querySelector("input");
// let h1 = document.querySelector("h1");
// inp.addEventListener("input",function(dets){
// // h1.textContent = inp.value;
// // console.log(inp.value)
// if(dets.data !== null){
//     console.log(dets.data) 
// }
// })


// let select = document.querySelector("select");
// let h1 = document.querySelector("h1");

// select.addEventListener("change",function(dets){
// h1.textContent = `${dets.target.value} is selected`
// })

// Task-2

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//     if(dets.key === " "){
//         h1.textContent = "space";
//     }else
//     h1.textContent = dets.key;
// })

// Task-3

// let inpbutton = document.querySelector(".inpbutton");
// let input = document.querySelector("input")

// inpbutton.addEventListener("click",function(){
// input.click();
// })

// input.addEventListener("change",function(dets){
//     const file = dets.target.files[0]; 
//     if(file)
//     inpbutton.textContent = file.name;
// else{
//     inpbutton.textContent = "Select File";
// }
// })

// let ab = document.querySelector("#ab");
// ab.addEventListener("mouseover",function(){
//     ab.style.backgroundColor = "yellow";
// })

// ab.addEventListener("mouseout",function(){
//     ab.style.backgroundColor = "red";
// })

// let ab = document.querySelector("#ab");

// window.addEventListener("mousemove",function(dets){
//     ab.style.top = dets.clientY + "px";
//     ab.style.left = dets.clientX + "px"

// })


// let ul = document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//     dets.target.classList.toggle("li")
// })

let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input",function(dets){
let left = 20 - dets.target.value.length;
span.textContent = left;
if(left<0){
span.style.color = "red";
}
else{
    span.style.color = "black";
}
}) 