//  Q1.	Prompt the user 5 times and store each input in an array. At the end, print the entire array.

// let arr = [];
// for(let i=1;i<6;i++){
//    arr.push(prompt("Enter value" + i)); 
// }
// console.log(arr);

// 	Q2.	Prompt the user 7 times. Count and print how many inputs were valid numbers.

// let a;
// let Count=0;
// for(let i=1;i<8;i++){
// a = prompt("Enter anything:"); 

// a = Number(a);

// if(isNaN(a)){
//     continue;
// }else{
//     Count++;
// }
// }

// console.log("Valid input numbers:", Count);

// 	Q3.	Prompt the user 6 times. Add and print the total only if the number is even. Ignore spaces, blanks, and cancelled inputs.

// let a;
// let sum = 0;

// for(let i=1;i<7;i++){
//   a = prompt("Enter something:");
  
//   if(a === null){
//     continue;
//   }
//   else{
//     if(a.trim() === ""){
//         continue;
//     }else{
//         a = Number(a);
//         if(isNaN(a)){
//             continue;
//         }else{
//             sum+=a;
//         }
//     }
//   }
// }

// if(sum%2 === 0){
//     console.log(sum);
// }else{
//     console.log("Not a even number");
// }

// 	Q4.	Take 5 prompts, store them in an array, and print the array in reverse order.

// let arr = [];

// for(let i=1;i<6;i++){
//     arr.push(prompt("Enter prompt:"));
// }

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }


// 	Q5.	Prompt the user 4 times for any word. Print the word that has the highest number of characters.

// let str;
// let len=0;
// let highestcharacterword;
// for(let i=1;i<5;i++){
//    str = prompt("Enter 4 strings:");

//     if(str.length>len){
//       highestcharacterword = str;
//       len = str.length;
//     }
// }

// console.log(highestcharacterword);

// 	Q6.	Prompt the user 6 times for anything. Store all valid numbers in a new array and print just that array.

// let a;
// let arr = [];

// for(let i=1;i<7;i++){
//     a = prompt("Enter anything:");

//     if(a === null){
//         continue;
//     }else{
//         if(a.trim() === ""){
//             continue;
//         }
//         else{
//             a = Number(a);
//             if(isNaN(a)){
//                 continue;
//             }else{
//                 arr.push(a);
//             }
//         }
//     }
// }

// console.log(arr);

// 	Q7.	Prompt the user 5 times for numbers. Ignore blank or cancelled inputs. Print the total and the average of valid numbers.

// let a;
// let sum=0;
// let count = 0;

// for(let i=1;i<6;i++){
//    a = prompt("Enter a number:");

//    if(a === null){
//     continue;
//    }else{
//     if(a.trim() === ""){
//         continue;
//     }else{
//         a = Number(a);
//         if(isNaN(a)){
//             continue;
//         }else{
//             count++;
//             sum+=a;
//         }
//     }
//    }
// }

// console.log("Total of valid numbes is:", sum);
// console.log("Avg of valid numbers is:", (sum/count));


// 	Q8.	Prompt 6 numbers and print the smallest and largest numbers entered.

// let a;
// let smallest = Number.MAX_VALUE;
// let largest = Number.MIN_VALUE;

// for(let i=1;i<7;i++){
//    a = prompt("Enter 6 numbers:");

//    if(a === null){
//     continue;
//    }else{
//     if(a.trim() === ""){
//         continue;
//     }else{
//         a = Number(a);
//         if(isNaN(a)){
//             continue;
//         }else{
//             if(a<smallest){
//                 smallest = a;
//             }
//             if(a>largest){
//                 largest = a;
//             }
//         }
//     }
//    }
// }

// console.log("Smallet:",smallest);
// console.log("Largest:",largest);

// 	Q9.	Take 4 prompts. If any input is exactly “admin” or “password”, show an alert saying “You entered a reserved word!”. Otherwise, log all inputs.

// let a;
// for(let i=1;i<5;i++){

// a = prompt("Enter 4 prompt:");

// if(a === "admin" || a=== "password"){
//     console.warn("You entered a reserved word!");
// }else{
//     console.log(a);
// }
// }




// 	Q10.	Prompt the user to enter one number. Print the first 10 multiples of that number.

// let a = prompt("Enter a number:");

// for(i=1;i<11;i++){
//     console.log(a , "*" , i , "=" , (a*i));
// }


