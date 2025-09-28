// Q1.Take a number as a input through prompt .if entered value is number than print it by adding 2 to it otherwise that value.

// var a = prompt("Enter a number:");

// if(typeof a === "number"){
//     console.log(a+2);
// }else{
//     console.log(a);
// }

// Q2. Input two numbers through prompt and add Them . And also control edge cases

// var b= prompt("Num 1:");
// var c= prompt("Num 2:");

// b = Number(b);
// c = Number(c);

// if(isNaN(b) || isNaN(c)){
//     console.log("Sahi number de");
// }else{
//     console.log(b+c);
// }


// date17

// var n = prompt("ENter a number:");
// n = Number(n);
// console.log(n);

// if(isNaN(n) || n=== null || n.trim()===""){
//     console.log("Please enter a valid number:");
// }

// var a = prompt("Kuch do:");

// for(var i=1;i<=30;i++){
//      console.log(i);
// }

// var n = prompt("Enter number:");
// n =Number(n);
// for(var i=1;i<=n;i++){
//     console.log("ran");
// }

var a = prompt("Enter a number:");
var n = Number(a);

if(isNaN(n)){
    console.log("Not a valid number!");
}else if(a !== null){
    if(a.trim() === ""){
        console.log("Number toh do bhai!");
    }else{
        a = Number(a);

        if(a%2 === 0){
            console.log("Even");
        }else{
            console.log("odd");
        }
    }
}else{
    console.log("Cancelled!");
}

