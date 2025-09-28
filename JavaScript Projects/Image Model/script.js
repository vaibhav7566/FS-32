let img = document.querySelectorAll(".images")  // all gallery images
let box = document.querySelector(".box")
let boximg = document.querySelector(".box img") // box ke andar ka img 
let close = document.querySelector("button")


img.forEach(function(image){
image.addEventListener("click",function(){
    box.style.display = "block"
    boximg.src = image.src;
})
})

close.addEventListener("click",function(){
    box.style.display = "none"
})





