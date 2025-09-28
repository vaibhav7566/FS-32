// let set = setTimeout(() => {               // SetTimeout function
//     console.log("5 Seconds me chalta hai")
// }, 5000);

// clearTimeout(set);    //cleartimeout function

// let int = setInterval(function () {             //SetInterval Function
//     console.log("har 5 Seconds me chalta hai")
// }, 5000);

// clearInterval(int);  //clearinterval

// Task-1 - Print a number from 10 to 0 ; 

// let count = 10;

// let inetrval = setInterval(function(){
// if(count>=0){
//     console.log(count);
//     count--;
// }else{
//     clearInterval(inetrval);
// }
// },1000);

// Task-2 download baw

// let count = 0;
// let fill = document.querySelector(".fill")

// setInterval(function(){
// if(count<=99){
//     count++;
//     fill.style.width = `${count}%`;
// }
// },10000/100);

// Task-3 Autohide alert banner after 3 seconds.
let count = 0;
let setint = setInterval(function()
{
    if(count<3){
        document.querySelector("div").style.display ="none";
        count++;
    }else{
        clearInterval(setint);
    }
},3000)