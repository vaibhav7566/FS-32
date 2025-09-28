// 💻 CODING QUESTIONS – PHASE 1 (JS FUNDAMENTALS)

// 📦 Variables & Declarations

// 	1.	Create 3 variables using var, let, and const and log their values.
    //   var a=10;
    //   let b=20;
    //   const c=30;

    //   console.log(a,b,c);
    

// 	2.	Demonstrate hoisting behavior with var vs let.
    // console.log(a);
    // console.log(b);

    // var a=10;
    // let b=20;

// 🧠 Data Types + Type System

// 	3.	Write a function that checks if a value is primitive.
    // function checker(val){
    // if(Array.isArray(val)=== true ||typeof val === Function || typeof val === Object){
    // }else{
    //     console.log("It is a primitive value."); 
    // }
    // } 

    // var arr = [10,20,30];
    // checker(arr);

    // function func(val){
    //  if( (val !== null && typeof val === "object") || typeof val === "function"){
    //     console.log("reference");  
    //  }else{
    //     console.log("primitive");
    //  }
    // }

// 	4.	Predict output: console.log(typeof null, typeof undefined)

// 	5.	Write a function that takes any value and returns "Truthy" or "Falsy".
    //  solution-1
    // function func(val){
    //     if(val === 0 || val === false || val === null || isNaN(val) === true || val === undefined || val === document.all){
    //         return "Falsy";
    //     }
    //     else{   
    //         return "Truthy";
    //     }
    // }    
    
    // solution-2
    // function fun(val){
    //     if(!!val === true){
    //         return "truthy";
    //     }else{
    //         return "falsy";
    //     }
    // }

// 🔄 Operators
// 	6.	Create a program that returns a grade based on score using the ternary operator.
    //  var val=32;
    //  val>= 90? console.log("A"):(val>=70?console.log("B"):(val>=50?console.log("C"):(val>=33?console.log("D"):console.log("F"))));

// 	7.	Convert a number to a boolean using !!value and explain the result.
    // console.log(!1);
    // console.log(!!1);


// 🧭 Control Flow
// 	8.	Create a rock-paper-scissors logic using if/else.
   
    // function game(user,computer){
    // if(user === computer){
    //     console.log("Tie");
    // }else{
    //     if((user === "stone" && computer === "scissor") || (user === "paper" && computer === "stone") || (user === " scissor" && computer === "paper") ){
    //         console.log("User wins!");
    //     }else{
    //         console.log("Computer wins");
    //     }
    // }
    // }

// 	9.	Build a student grading system using switch-case.
// var val =16;
  
    // function gradingsystem(val){
    //   switch(true){
    //         case val>90: 
    //             console.log("A");
    //             break;
    //         case val>70: 
    //             console.log("B");
    //             break;
            
    //         case val>50: 
    //             console.log("C");
    //             break;
            
    //         case val>40: 
    //             console.log("D");
    //             break;
            
    //         case val>33: 
    //             console.log("F");
    //             break;
    //         default : 
    //             console.log("Fail!");
    //         }
    //     }
   

    
// 	10.	Write a function that returns early if the input is not a number.
    // function returnearly(val){
    //     if(typeof val !== 'number'){
    //         return "Input is not number!";
    //     }else{
    //         return "Input is a number";
    //     }
    // }

// 🔁 Loops
// 	11.	Print numbers from 1 to 10 using for, while, and do-while.
// for(var i=1;i<=10;i++){
//     console.log(i);
// }
// var j=1;
// while(j<=10){
//     console.log(j);
//     j++;
// }
// var k=1;
// do{
//     console.log(k);
//     k++;
// }while(k<=10);
// 	12.	Print even numbers from an array.
// var arr =[1,3,4,8,20,33,36];
// for(var i=0;i<arr.length-1;i++){
//     if(arr[i]/2 === 0){
//         console.log(arr[i]);
//     }
// }

// var arr= [1,2,4,5,7,8,22];
// arr.forEach(function(val){
//     if(val%2===0){
//         console.log(val);
//     }
// });

// 	13.	Break the loop when a number divisible by 7 is found.

// for(var i=1;i<10;i++){
//     if(i%7===0){
//         break;
//     }else{
//         console.log(i);
//     }
// }
// 	14.	Continue to next iteration if number is odd.

    // for(var i=1;i<=10;i++){
    //     if(i%2 !== 0){
    //          continue;
    //     }else{
    //     console.log(i);
    //     }
    // }

// 	15.	Reverse a string using a loop.
// solution-1
//  var str = "raghav";
//     for(var i=str.length-1;i>=0;i--){
//     console.log(str[i]);
//     }
// solution-2
//  console.log("Tavishi".split('').reverse().join());


// 🧮 Functions

// 	16.	Create a BMI calculator function.

//    function BMIcal(weight,height){

//     var bmi= weight/Math.pow(height,2);

//     if(bmi <= 18.5){
//         console.log(" Underweight");
//     }else if(bmi>18.5 && bmi<=24.9){
//         console.log("Normal Weight");
//     }else if(bmi=>25.0 && bmi<=29.9){
//         console.log("OverWeight");
//     }else{
//         console.log("Obesity");
//     }
//    }

// 	17.	Write a higher-order function that returns a discount calculator.
// 	18.	Build a closure-based counter function.
// 	19.	Create a pure function that converts Celsius to Fahrenheit.
// 	20.	Wrap a variable inside an IIFE and prevent it from being accessed globally.

// 🧰 Arrays
// 	21.	Create an array of 5 numbers and print the sum.
// 	22.	Use .push() and .pop() to add/remove elements.
// 	23.	Use .splice() to insert 2 items at index 1.
// 	24.	Use .slice() to extract the middle 3 elements.
// 	25.	Use .map() to double the numbers.
// 	26.	Use .filter() to keep only even numbers.

// 🧱 Objects
// 	27.	Create an object for a student with name, age, and subjects.
// 	28.	Use for-in to loop over student properties.
// 	29.	Destructure name and age from the object.
// 	30.	Write a function to deep clone an object and modify the copy without affecting the original.
                            

