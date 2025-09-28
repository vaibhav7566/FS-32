// for(var i=23;i<45;i++){
//     console.log(i);
// }

// for(var i=23;i<46;i++){
// if( i !== 30 && i !== 32 )
//     console.log(i);
// }

// for(var i=23;i<46;i+=4){
//     console.log(i);
// }

// doubt
// var i=prompt("Enter any number:");

// if(i === null){
//     console.log("Cancelled!");
// }else{
//     if(i.trim() === ""){
//     console.log("You have to write something!");
//     else{
//     i =Number(i);
//     if(isNaN(i)){
//     console.log("Invalid input!");
// }
// else{
//     for(var v=1;v<=i;v++ ){
//     console.log(v);
// }}
// }
// }
// }


// var i=prompt("Enter any thing:");

// if(i === null){
//     console.log("You cancelled!");
// }else{
//     if(i.trim() === ""){
//         console.log("You have to write some thing");
//     }
//     else{
//         i = Number(i);
//         if(isNaN(i)){
//             console.log("Wrong input!");
//         }else{
//         for(var v=1;v<=i;v++){
//             console.log(v);
//         }
//     }
//     }
    
// }


// array push pop shift unshift

// Q1. ek loop chalao 5 baar. Haar baar prompt mange jo bhi prompt me dede bo array me save ho jaye last me pura array console pe print ho jaye.

// var arr=[];

// for(var i=0;i<5;i++){
//     arr.push(prompt("Enter something:"));
// }

// console.log(arr);


var sum=0;
for(var i=1;i<9;i++){
var a = prompt("Enter any number:");

if(a === null){
     console.log("till now:", sum);
    continue;
}
else{

    a = Number(a);
if(isNaN(a)){
    console.log("till now:", sum);
    continue;
}else if(a.trim() === ""){
console.log("till now:", sum);
    continue;
}

    
}
 sum = sum + a;
console.log("till now:", sum);
}