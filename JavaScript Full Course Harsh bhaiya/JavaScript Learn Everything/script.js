// for(let i=1 ;i<=10;i++){
//     console.log(i);
// }


// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// let i=10;
// while(i>=1){
//     console.log(i)
//     i--;
// }

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// for(let i=2;i<=20;i+=2){
//   console.log(i)
// }

// let i=1
// while(i<=15){
//     console.log(i)
//     i+=2
// }

// for(let i=1;i<=10;i++){
//     console.log("5 * " + i + " = " + (5*i) )
// }

// for(let i=1;i<=10;i++){
//     console.log(`5 * ${i} = ${5*i}`)
// }

// let sum=0;
// for(let i=1;i<=100;i++){
//     sum+=i;
// }
// console.log(sum)

// let num = prompt("Enter a number:")
// for(let start=1;start<=num;start++){
//     if(start%2 === 0){
//         console.log(`${start} is even`)
//     }else{
//         console.log(`${start} is odd`)
//     }
// }

// let count = 0
// for(let i=1 ;i<=100;i++){
//     if(i%3===0&&i%5===0){
//         console.log(i)
//         count++
//     }
// }
// console.log(count)

// for(let i=1;i<=100;i++){
    
//     if(i%7===0){
//         break
//     }
//     console.log(i)
// }

// for(let i=1;i<=20;i++){
//     if(i%3===0){
//         continue
//     }
//     console.log(i)
// }

// let count=0
// for(let i=1;i<=100;i++){
//     if(i%2===1){
//         console.log(i)
//         count++
//     }
//     if(count>4) break
// }

//       FUNCTIONS

// function declaration/stmt
// function abcd(){
//     console.log("gandu")
// }
// abcd() // function call

// // function Expression
// let func = function(){
//     console.log("Ishu")
// }
// func()

// //fat arrow function
// let fun = ()=>{
//     console.log("Raghav")
// }
// fun()

// //Parameters and arguments
// function add(v1,v2){
//     console.log(v1+v2)
// }
// add(1,2)

// //Default value as parameter
// function sum(v1=0,v2=0){
//     console.log(v1+v2)
// }
// sum()

// //Rest or Spread Operator
// //jab arguments kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest ka use karte hai agar... function ke paramenter space mein lage to wo rest operator hai or agar wo array me ya object me lage toh wo spread operator hai 

// function abc(a,b,c,...val){  //<- rest operator 
//     console.log(a,b,c,val)
// }
// abc(1,2,3,4,5,6,7   )

// //return -> mtlb jaha se aaya hai wahi thus dunga 
// function ret(a){
//     return 12+a;
// }
// let val = ret(12);
// console.log(val)

//IIFE (Immediately Invoked Function Expressions)
// (function(){
    
// })();

// ---Questions---

//1. Write a BMI calculator

// function bmi(weight,height){
//    return (weight / (height*height))
// }

// console.log(bmi(69,1.8).toFixed(3))

//2. Create a reusable discount calculator (HOF)

// function discountCalculator(discount){
//     return function (amount){
//         console.log(amount - amount*(discount/100))
//     }
// }

// let detol = discountCalculator(10)

// detol(200)

// let lifeboy = discountCalculator(20)

// lifeboy(200)

//3. Build a counter using closure

// function counter(){
//    let  count = 0;
//    return function (){
//     count++;
//     return count;
//    }
// }

// let c = counter()
// console.log(c())
// console.log(c())
// console.log(c())
// console.log(c())

// let d = counter()
// console.log(d())
// console.log(d())
// console.log(c())

//4. Create a pure function to transform a value

// function pure(val){
//     return val*2;
// }

// console.log(pure(2))

//5. Use IIFE to isolate variables

// (function (){
//     const password = "Secret";
//     console.log(password);
// })();

//     console.log(password);


//  -- Objects --

// let obj = {
//     name: "harsh",     // <-- Key value structure
//     lastname: "sharma"
// }

// console.log(obj.name)  // <-- Dot operator
// console.log(obj["name"])  // <-- brackit notation

// let aa = "lastname"
// console.log(obj[aa]);    // <-- brackit notation

// Nesting and deep access

// const user = {
//     name: "Harsh",
//     address: {
//         city: "Bhopal",
//         pin: 262022,
//         location: {
//             lat:23.2,
//             lng:77.2,
//         },
//     },
// };
// console.log(
// user.address.location.lng
// )

// Object Destructuring 

// const user = {
//     name: "Harsh",
//     address: {
//         city: "Bhopal",
//         pin: 262022,
//         location: {
//             lat:23.2,
//             lng:77.2,
//         },
//     },
// };

// let {lat,lng} = user.address.location;

// console.log(lat)
// console.log(lng)

// Looping: for-in

// let obj = {
//     name: "Harsh",
//     age: 26,
//     email: "test@test.com"
// };

// for(let key in obj){  // key accessing and value accessing.
//     console.log(key  + ":" +  obj[key]);
// }

// Object.keys - ye object ki keys ki ek array form kar deta hai .

// let obj = {
//     name: "Harsh",
//     age: 26,
//     email: "test@test.com"
// };

// let keys = Object.keys(obj);
// console.log(keys);

// Object.entries - ye array of array banata hai object ka 

// let obj = {
//     name: "Harsh",
//     age: 26,
//     email: "test@test.com"
// };

// console.log(Object.entries(obj));

// Copying Objects: spread operator

// let obj = {
//     name: "Harsh",
//     age: 26,
//     email: "test@test.com"
// };

// let newObj = {...obj};
// console.log(newObj);

// Object.assign - ye bhi cpy karne ke kaam aata hai 

// deep clone - ye jab kaam me aata hai jab apan ek nested object ko copy karte hai using spread operator kyuki when we copy nested object using spread operator then top level values of object are real copy and nested object pass references. deep clone ka mtlb pure nested obj ko copy karna

// let obj = {
//     name : "harsh",
//     ahe: 26,
//     email: "test@test.com",
//     address: {
//         city: "bhopal",
//     },
// };

// let obj2 = JSON.parse(JSON.stringify(obj))

// Optional Chaining 

// let obj = {
//     name : "harsh",
//     ahe: 26,
//     email: "test@test.com",
//     addresses: {
//         city: "bhopal",
//     },
// };
// console.log(obj?.address?.city)

// Computed properties

// let admin = "harsh"

// let obj = {
//     name : "harsh",
//     ahe: 26,
//     email: "test@test.com",
//     addresses: {
//         city: "bhopal",
//     },
//     [admin] : "vaibhav"
// };