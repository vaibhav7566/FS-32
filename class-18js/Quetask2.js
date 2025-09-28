
// var str=false;
// if(typeof str === "string"){
//     console.log("string");
// }
// else if(typeof str === 'number'){
//     console.log("Number");
// }else{
//     console.log("BC...");
// }

// var a=prompt("naam batao");
// a = Number(a);
// a = parseInt(a);
// console.log(parseInt(a)+2);
// console.log(Number(a)+2);

// var n=prompt("number do");
// // if(typeof n !== 'number'){
// //     console.error("Not a number");
// // }

// if(isNaN(n) === true){
//     console.error("Wrong input");
// }
// else{
//     console.log("Number");
// }


// Q1.Check if input is a String Ask the user for input using prompt(). If the input is a string (not empty),print "You entered a string".Otherwise,print "Invalid input".

// var naam = prompt("Enter a string:");

// if(naam === null || naam.trim() === ""){
//     console.log("Invalid input");
// }else{
//     console.log("You entered a string!");
// }

// Q2.Check if Input is a Number Ask the user for input and convert it into a number. If it’s a valid number (not NaN), print “Your number is: X”. Otherwise, print “Please enter a valid number”.

// let number = prompt("Enter a number:");
// if(number === null || number.trim() === "" || isNaN(Number(number)){
//     console.log("Please enter a valid number!");
// }
// else{
//     number = Number(number);
//     console.log("Your number is:" + number);
// }


// Q3.Check if Number is Even or Odd Ask the user to enter a number. If the number is even, print “Even number”. If it’s odd, print “Odd number”. If it’s not a number, print “Not a valid number”.

// let number = prompt("Enter a number:");

// if(number === null || number.trim() === "" || isNaN(Number(number))){
//     console.log("Not a valid number!");
// }else if(Number(number)%2 === 0){
// console.log("Even number");
// number = Number(number);
// }else{
//     console.log("Odd number");
//     number = Number(number);
// }

// Q4. Check if Input is Empty Prompt the user to enter something. If they enter an empty string, print “You didn’t enter anything!”. Otherwise, print “Thank you for your input”.

// let text = prompt("Enter something:");

// if(text === null || text.trim() === ""){
//     console.log("You did'n enter anything!");
// }else{
//     console.log("Thank you for your input.");
// }

// Q5. Detect Boolean-like String Prompt the user for input. If they type “true” or “false”, print “You entered a boolean string”. Otherwise, print “Not a boolean string”.

// let value = prompt("Input:");

// if(value.toLowerCase() === "true" || value.toLowerCase() === "false"){
// console.log("You entered a boolean string");
// }else{
//     console.log("Not a boolean string!");
// }

// Q 6.Age Checker Ask the user to enter their age. If the age is below 18, print “You are underage”. If it’s 18 or more, print “You are an adult”. If the input is invalid, print “Please enter a valid age”.

// let age = prompt("Enter your age:");

// if(age === null || age.trim() === "" || isNaN(Number(age))){
//     console.log("Please enter a valid age!");
// }else if(Number(age)<18){
//     console.log("You are underage");
// }else{
//     console.log("You are an adult");
// }

// Q 7.Number Range Checker Ask the user to input a number. If the number is between 10 and 100, print “Number is in range”. If not, print “Out of range”. If invalid, print “Please enter a number”.

// let no = prompt("Enter a number");

// if(no === null || no.trim() === "" || isNaN(Number(no))){
//     console.log("Invalid! Please enter a valid number");
// }else if(no>10 && no<100){
//     console.log("Number is in range");
// }else{
//     console.log("Out of range");
// }

// Q 8.Simple Password Match Prompt the user to enter a password. If it matches a predefined password (like “sheryians123”), print “Access granted”. Otherwise, print “Wrong password”.

// var predefinedpassword = "sheryians123";

// var pass = prompt("Enter a password:");

// if(pass === predefinedpassword){
//     console.log("Access granted.");
// }else{
//     console.log("wrong password!");
// }

// Q 9.Length of Input Ask the user to enter a word. If the word has more than 5 characters, print “Long word”. If it’s 5 or fewer characters, print “Short word”. If nothing entered, print “Empty input”.

// var word = prompt("Enter a word:");

// if(word === null || word.trim() === "" || !isNaN(Number(word))){
//     console.log("Empty input! or Invalid input!");
// }else if(word.length >5){
//     console.log("Long word");
// }else{
//     console.log("Short word");
// }


// Q 10. Multiple Condition Checker Prompt the user to enter their name. If the name is “Harsh” or “harsh”, print “Welcome back, Harsh!”. If the input is empty, print “No name entered!”. Otherwise, print “Hello, [input]”.

// var Name = prompt("Enter your name:");
 
// if(Name.toLowerCase() === "harsh"){
//     console.log("Welcome back Harsh!");
// }else if(Name === null || Name.trim() === ""){
//     console.log("No name entered!");
// }else{
//     console.log("Hello, [input]");
// }