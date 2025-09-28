// Perfect! You’re practicing real-world loop logic with a focus on conditions + counting iterations — a great way to build foundational skills.

// Here are 10 beginner-level JavaScript loop questions that match the same difficulty and thinking style:

// ⸻

// ✅ Q1.

// Prompt the user for a number. Keep doubling it until it becomes greater than 100.
// Print how many times it was doubled and the final value.

// var num = prompt("Enter a number");
// num = Number(num);
// var count = 0;
// while(num<=100){
//     num = num*2;
//     count++;
// }
// console.log("Final value:", num);
// console.log("No. of times doubled:", count);


// ⸻

// ✅ Q2.

// Take two inputs: start and target.
// Keep adding 7 to start until it becomes equal to or greater than target.
// Count how many times the addition happened.

// var start = prompt("Enter a start value:");
// start = Number(start);
// var target = prompt("Enter target value:");
// target = Number(target);
// var count = 0;
// while(start<=target){
//     start = start + 7 ;
//     count++;
// }
// console.log(start);
// console.log(count);

// ⸻

// ✅ Q3.

// Take a number as input.
// Print all the numbers in reverse order from that number to 1, but skip numbers divisible by 5.

// var num =  prompt("Enter a number:");
// num = Number(num);

// for( ; num>0 ; num--){
// if(num % 5 !== 0){
// console.log(num);
// }
// }

// ✅ Q4.

// Prompt for a number.
// Print the sum of all even numbers between 1 and that number (inclusive).
// Use a loop.

// let num = prompt("Enter a number:");
// num = Number(num);
// let sum=0;
// for (let i=1;i<=num;i++){
// if(i%2 === 0){
//     sum = sum + i ;
// }
// }
// console.log("sum of even numbers from 1 to given number is: " , sum);

// ⸻

// ✅ Q5.

// Take a number as input.
// Check how many digits are in that number (don’t convert to string).
// For example, 1256 → 4 digits

let num = parseInt(prompt("Enter a number:"));
num = Math.abs(num);
let count = 0;
if (num === 0) {
    console.log("1");
} else {
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
}
console.log(count + " digits");

// ⸻

// ✅ Q6.

// Take a number.
// Keep dividing it by 2 until it becomes less than 1.
// Count how many times the division was done.

// let num = prompt("Enter number:");
// num = Number(num);
// let count=0;

// while(num>1){
//     num = num/2;
//     count++;
// }
// console.log("Division was done "+ count +" times");

// ⸻

// ✅ Q7.

// Take two inputs: base and target.
// Multiply the base with itself repeatedly (base^1, base^2, …) until the result crosses target.
// Count how many multiplications it took.

// let base = prompt("Enter a base:");
// base = Number(base);
// let target = prompt("Enter target");
// target = Number(target);
// let count=0;
// let result = 1;
// while(result<target){
//     result = result * base;
//     count++;
// }
// console.log("Multiplications taken is: " , count);

// ✅ Q8.

// Take a number.
// Print the factorial of the number using a loop (e.g., 5 → 5×4×3×2×1 = 120)

// let num = prompt("Enter a number:");
// num = Number(num);
// let fact = 1;

// if (num === 0) {
//     console.log("Factorial of 0 is 1");
// } else {
//     for (let i = num; i >= 1; i--) {
//       fact *= i;
//     }
//     console.log("Factorial of given number is:" + fact);
// }


// ⸻

// ✅ Q9.

// Prompt for a number.
// Print how many odd numbers exist between 1 and that number.

// let num = prompt("Enter a number:");
// num = Number(num);
// let count = 0;

// for(let i=1;i<=num;i++){
// if(i%2 !== 0){
//     count++;
// }
// }
// console.log(count);


// ⸻

// ✅ Q10.

// Take a number.
// Keep subtracting 9 from it until the number becomes less than 0.
// Print the last value before it became negative, and how many subtractions happened.

// let num = prompt("Enter a number:");
// num = Number(num);
// let count=0;

// while (num > 0) {
//     num = num - 9;
//     count++;
// }
// console.log("Last digit before it become negative is:  " + (num+9));
// console.log(count + " subtractions happened.");

// ⸻

// Let me know if you want mini explanations or solutions for any of these!
// Or want me to convert them to while, do-while, or for loop versions.