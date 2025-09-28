
let btn = document.querySelector("button");

function setDarkorLight(){
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

}
else {
    document.body.classList.add("light");
    document.body.classList.remove('dark');
}
}

if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}else{
    setDarkorLight();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
    if(!localStorage.getItem("theme")){
        setDarkorLight();
    }
    
})

btn.addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
        document.body.classList.add("dark");
        document.body.classList.remove('light');
        localStorage.setItem("theme","dark");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove('dark');
         localStorage.setItem("theme","dark");
    }
})

