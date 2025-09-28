
// console.log("Hello World!");

// // Q1.Print your name in the console.
// console.log("Vaibhav Dhakad");

// // Q2.Add two numbers.
// var num1=2;
// var num2=3;
// console.log("Sum of num1 and num2 is:" + (num1+num2));
// console.log("Sum of two numbers is:"+ (2+2));

// // Q3.Check if a number is even or odd.
// var num=7;
// if(num%2==0){
// console.log("It is even number");
// }else{
//     console.log("It is a odd number");
// }

// // Q4.Find the largest of two numbers.
// var n1=11;
// var n2=15;
// if(n1>n2){
//     console.log(n1 + " is greater than " + n2);
// }else{
//     console.log(n2 + " is greater than " + n1);
// }

// // Q5.Swap two variables using third variable.
// var n=2;
// var m=3;
// console.log("Before Swapping n=" + n +" m="+ m);
// var temp=n;
// n=m;
// m=temp;
// console.log("After Swapping n="+ n +" m="+ m);

// // Q6.pRint numbers from 1 to 10 using a loop.
// for(var i=1;i<=10;i++){
//     console.log(i);
// }

//Q7.Reverse a string.
// var str="Sanu";
// console.log(str);
// var reverse="";
// for(var i=str.length-1;i>=0;i--){
//  reverse=reverse+str[i];
// }
// console.log(reverse);


// // Q8.Count the number of character in the string.
// var str="Vaibhav";
// console.log(str.length);

// // Q9.Check if a string contains a particular word.
// var nam="Sparsh";
// var char='a';
// var count=0;
// for(var i=0;i<nam.length;i++){
//     if(char === nam[i]){
//         count++;
//     }
// }
// if(count === 0){
//     console.log("This word is not contained by string.");
// }else{
//     console.log("Yes! this word is contained by string.");
// }


// // Q10.Create an array and print each item using forEach loop.

//using fat arrow function.
// var arr=[1,2,3,4,5,6,7];
// var i
// arr.forEach((item) =>{
// console.log(item);
// });

// using anonomus function
// var brr =[10,20,30,40,50];
// brr.forEach(function(val){
//     console.log(val);
// });


// console.log(1);
// console.log(2);
// console.log(3);

// Q1.take a number in the variable without using prompt and if it is greater than 10 then print 1 else 2. 
// var num=23;
// if(num>10){
//     console.log(1);
// }else{
//     console.log(2);
// }

// Q2.Check a variable if it conatains number and if it is graeater than 10 than print 1 otherwise 2.
// var num='a';
// if(typeof num === 'number'){
//    if(num>10){
//     console.log(1);
// }else{
//     console.log(2);
// } 
// }else{
//     console.log("Not a number!");
// }

// Q3.use of prompt().
// var Name = prompt("Hey guys!");



// IMP Questions.

//1. js ki file ka code kise chalta hai simple english me samjhao
    // 1. JavaScript Engine kya hota hai?
    // 2. Code kaise samjha jaata hai? (Tokenizer → Parser → AST)
    // 3. Execution Context aur Call Stack
    // 4. Memory Heap and Scope
    // 5. Hoisting & Closures
    // 6. Event Loop, Callback Queue & Promises
    // 7. Final Summary: JavaScript ka full journey


    

//2. keywords kya hote hai and kaise js unhe pehchaanta hai 
   //      ✅ 1. Keywords kya hote hain?
// Keywords wo reserved (fix) words hote hain jo JavaScript ke rules ka part hote hain.
// Inka special meaning hota hai — inko variables/functions ke naam ke tarah use nahi kar sakte.

// 🔹 Examples of Keywords:
// Keyword	Kaam kya karta hai
// var	Variable banane ke liye (old)
// let	Block-scope variable banata hai
// const	Constant variable banata hai
// if	Condition check karta hai
// else	if ka alternate
// return	Function se value wapas bhejne ke liye
// function	Function banane ke liye
// class	Class (object-oriented code) banane ke liye

// ❌ Tum let, if, for ko variable/function naam nahi rakh sakte

// js
// Copy
// Edit
// let if = 10; // ❌ Error: Unexpected token 'if'
// ✅ 2. JavaScript Engine in keywords ko kaise pehchaanta hai?
// Jab JavaScript Engine tumhara code parse karta hai (yaani read karta hai), tab:

// 🔁 Process:
// Tokenizer tumhara code ko chhote parts me todta hai = tokens

// Har token ka type check hota hai:

// Kya ye variable hai?

// Kya ye number hai?

// Kya ye keyword hai?

// Agar wo token kisi keyword list me milta hai →
// Engine usse special behavior ke saath treat karta hai

// 📦 JavaScript ke paas ek fix list hoti hai reserved words ki

// 📱 Non-Technical Example:
// Tu police station gaya aur bola:

// "Mera naam SHO hai."

// Toh police bolegi — "Nahi bhai, SHO ek official position hai, wo naam nahi ho sakta."

// Waise hi JavaScript bhi kehti hai:

// "if, return, class — ye language ke part hain, tu inka misuse nahi kar sakta"

// 🔚 Final Summary:
// Term	Meaning
// Keyword	JS ka reserved word, jiska special meaning hota hai
// Tokenizer	Code ko chhote pieces me todta hai
// Engine	Check karta hai ki token keyword hai ya nahi
// Error	Tab aata hai jab keyword ko galat use karo




//3. upar ke dono questions ke answer ke dauraan aap ko aur kai saare dimaag mein questions unke bhi answer lena 

// Answers= Chat gpt