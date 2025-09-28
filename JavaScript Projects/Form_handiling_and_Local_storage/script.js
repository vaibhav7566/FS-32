let form = document.querySelector("form");
let inputtask = document.querySelector("#inputtask");
let desctask = document.querySelector("#desctask");
let display = document.querySelector(".display");
let tasks = [];

tasks = (JSON.parse(localStorage.getItem("task")) || [])

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const inptasks = inputtask.value;
    const dtask = desctask.value;

    tasks.push({inptasks,dtask});

    localStorage.setItem("task",JSON.stringify(tasks))

    inputtask.value = '';
    desctask.value = '';

    JSON.parse(localStorage.getItem("task")).map(function(val){
    let p = document.createElement("p");
    p.textContent = `${val.inptasks} - ${val.dtask}`;
    display.appendChild(p);
})
})








// Local Storage Concepts

// localStorage.setItem("name","vaibhav");
// let name = localStorage.getItem("name")
// console.log(name);
// localStorage.removeItem("name");

// // let obj = {
// //     name: "Vaibhav",
// //     age: 21,
// //     clg: "OIST",
// // }
// let obj = [1,2,3,4,5];

// localStorage.setItem("info",JSON.stringify(obj));
// console.log(JSON.parse(localStorage.getItem("info")))
// let info = localStorage.getItem("info");
// console.log(JSON.parse(info));


















