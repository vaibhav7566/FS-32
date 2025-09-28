// This file covers functions ,types of functions, forEach loop , map ,filter .



// function abcd(){
// fnc stmt
// }

// var efgh = function(){  
//fnc expression
// }

// function(){
//anomonous function
// }

// foreach -loop
// foreach loop hai jo "sirf array par chatle hai"

// var arr = [1,2,3,4];

// arr.forEach(function(val){
// console.log(val);
// });

// var names =["vaibhav",5,"sumit","raghav",1,2];

// names.forEach(function(val){
// if(typeof(val) !== 'number'){
//     console.log("hello" , val);
// }
// });

// var names = ["vaibhav",1,"sumit",3,4];
// names.forEach(function(val){
//     if (typeof val === "number") {
//         console.log( val);
//     }
// }); 

// var sum =0;
// var arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     sum+=val;
// });
// console.log(sum);

// var arr = [1,"avni",2,"ragahg",3,"vaabgav",4,"Suait",5,6,];
// arr.forEach(function(val){
// if(typeof val === "string"){
//     if(val.charAt(2) === 'a'){
//         console.log(val);
//     }
// }
// });

// var arr = ["Vaibhav",1,"Raghav",3,"Ishu"];
// arr.forEach(function(val){
//     if(typeof val === "string"){
//         console.log(val);
//     }
// });

// var arr = ["Vaibhav",1,"Raghav",3,"Ishu"];
// var sum =0;
// arr.forEach(function(val){
//     if(typeof val === "number"){
//         sum+=val;
//     }
// });
// console.log(sum);

// var arr = [];
// var brr = ["Vaibhav",1,"Raghav",3,"Ishu"];
// brr.forEach(function(val){
//     if(typeof val === "string"){
//         arr.push(val);
//     }
// });
// console.log(brr);
// console.log(arr);

//map tab use hota hai jab aapka main array ke baraabar new array bane on the basis of old array.

//filter tab use hota hai jab aapke main array ke baraabar ban bhi sakta jai ya nhyu  

// In JavaScript, map() and filter() are array methods that let you transform or select elements from an array without modifying the original array.

// ---

// 1. map()

// Purpose:
// Takes an array and applies a function to every element, returning a new array with the transformed values.

// Key points:

// Always returns an array of the same length as the original.

// Doesn’t change the original array.

// Often used for transformations (e.g., doubling numbers, extracting properties).

// 2. filter()

// Purpose:
// Takes an array and filters out elements based on a condition, returning a new array with only the elements that pass the test.

// Key points:

// The returned array can be shorter (or empty).

// Doesn’t change the original array.

// Often used for selecting a subset of items.

// NOTE -: Not exactly — filter() doesn’t require you to literally return true or false, but it does expect your callback function to return a truthy or falsy value.


// ---

// How filter() decides:

// If the callback returns something truthy → the element is kept in the new array.

// If the callback returns something falsy → the element is skipped.


//filter

// var arr = ["Vaibhav",1,"Raghav",3,"Ishu"];

// var names = arr.filter(function(val){
// if(typeof val === "string"){
//     return true;

// }
// });
// console.log(names);


// var cost = [100,2002,3000,400,500];

// var c = cost.filter(function(val){
//     if(val>1000){
//         return true;
//     }
// });
// console.log(c);

// var names = ["vaibhav","sumit",'ishu'];
// var g = names.map(function(val){
// return val + "ji";
// });
// console.log(g);

// var names = ["vaibhav","sumit",'ishu'];
// var gmail = names.map(function(val){
// return val + "@gmail.com";
// });
// console.log(gmail)

// var names = ["vaibhav","sumit",'ishu'];
// var naam = names.filter(function(val){
// if(val.length >4){
//     return val;
// }
// });
// console.log(naam)
 
// var usd = [4,5,7,8,4,14,50];
// var inr = usd.map(function(val){
// return val*83;
// });
// console.log(inr)

// var usd = [4,5,7,8,4,14,50];
// var inr = usd.map(function(val){
// return val * 83;
// });
// var prixe = inr.filter(function(val){
// if(val < 1000){
//     return true;
// }
// });
// console.log(inr)
// console.log(prixe)


//Array of objects.
// const cart = [
//     { name: 'Shirt', price: 499},
//     { name: 'Jeans', price: 999},
//     { name: 'Cap', price: 199},
// ];

// let f = cart.filter(function(val){
//     return val.price > 500;
// });
// console.log(f)


// Destructuring of an array

// let arr = [1,2,3,4,5]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// console.log(a)
// console.log(b)
// console.log(c)

// let [a,b,,d] = arr;

// console.log(a)
// console.log(b)
// console.log(c)

//Spread operator

// let arr = [1,2,3,4,5,6];
// let newarr = arr;   // here reference is copying . This is not a correct way of copying an array.
// newarr.pop();

// let arr = [1,2,3,4,5,6]
// let newarr = [...arr]
// newarr.pop()

// Question related to arrays

// Que-1 . Create an array with 3 fruits and print the second fruit.
// let fruits = ['apple','mango','orange'];
// console.log(fruits[1]);

// Que-2 . Add "Mango" at the end and "Pineaaple" at the beginning of this array:
// let fruits =["apple","banana"];
// fruits.push("Mango");
// fruits.unshift("Pinapple");
// console.log(fruits);

// Que-3 Replace "banana" with "kiwi" in the array above.
// let fruits = ["apple","banana"];
// fruits[1] = "kiwi"
// console.log(fruits);

// Que-4 Insert "red and "blue at index 1 in this array
// let colors = ["greeb","yellow"];
// colors.splice(1,0,"red","blue");
// console.log(colors);

// Que-5 Extract only the middle 3 elements from this array.
// let items = [1,2,3,4,5,6];
// let newitems = items.splice(1,3);
// console.log(newitems);
// let newitems = items.slice(1,4);
// console.log(newitems);

// Que-6 Sort this array alphabetically and then reverse it:
// let names = ["Zara","Arjun","Mira","Bhavya"];
// names.sort().reverse();

// Que-7 use .map() to square each number:
// let arr = [1,2,3,4];
// let newarr = arr.map(function(val){
//     return val*val;
// })

// Que-8 Use .filter() to keep numbers greater than 10:
// let arr = [5,12,8,20,3];
// let newarr = arr.filter(function(val){
// return val>10;
// })

// Que-9 use .reduce() to find the sum of this array:
// let arr = [10,20,30];
// let sum = arr.reduce(function(acc,val){
// return acc+val;
// }, 0);

// Que-10 use .find() to get the first number less than 10;
// let arr = [12,15,8,3,20];
// let num = arr.find(function(val){
//     return val<10;
// })

// Que-11 Use .some() to check if any student has scored below 35:
// let arr = [45 ,60,28,90];
// let score = arr.some(function(val){
//     return val<35;
// })

// Que-12 Use .every() to check if all numbers are even:
// let arr = [2,4,6,8,10];
// let check = arr.every(function(val){
// return val % 2 === 0;
// });

//  Que-13 Destructure this array to get firstName and lastName:

// let fullName = ["Harsh","Sharma"];
// let [firstName,lastName] = fullName;

//  Que-14 Merge two arrays using spread oprator:
// let a =[1,2];
// let b = [3,4];

// let c = [...a,...b];

// Que-15 Add "India" to the start of this array using spread:

// let countries = ["USA","UK"];
// countries = ["India",...countries];

// Que-16 Clone this array properly (not by reference):
// let arr = [1,2,3];
// let newarr = [...arr];





















