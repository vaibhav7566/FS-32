// let h1 = document.querySelector("h1");

// h1.style.color = "red";


// let lis = document.querySelectorAll("li");

// lis.forEach(function(li){
//     li.addEventListener("click",function(){
//     li.style.textDecoration = "line-through";
//     });
// });


// let lis = document.querySelectorAll("li");

// lis.forEach(function(li){
//     li.addEventListener("click",function(){
//         li.style.display = "none";
//     });
// });


// let h1s = document.querySelectorAll("h1");

// h1s.forEach(function(h1){
//     h1.addEventListener("click",function(){
//         h1.style.color ="red";
//         h1.style.fontStyle = "italic";
//     });
// });

let images = document.querySelectorAll("img");

images.forEach(function(img){
    img.addEventListener("click",function(){
      img.setAttribute("src","https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

      img.style.width = "1500px"
      img.style.height = "1000px"
    });
    
});

