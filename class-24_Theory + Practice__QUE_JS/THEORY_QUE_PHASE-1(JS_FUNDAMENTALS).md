✅ THEORY QUESTIONS – PHASE 1 (JS FUNDAMENTALS)

# 🧠 JavaScript History —

## 🟩 1. Kisne banayi JavaScript?
Brendan Eich naam ke ek developer ne banayi thi.

Wo Netscape company me kaam karte the.

JavaScript ko sirf 10 din me banaya gaya tha 😲

## 🟩 2. JavaScript kyun banayi gayi?
Web pages us time static hote the (sirf text/image).

Netscape ne socha: "Kuch aisa language chahiye jo browser me chalta ho aur page ko dynamic bana sake."

Isiliye JavaScript banayi — taaki user ke actions par page react kar sake (click, scroll, etc.)

## 🟩 3. Naam JavaScript kyu pada? Java se kya relation hai?
Pehle iska naam tha: Mocha ➡️ fir LiveScript

Java us time bahut popular ho rahi thi.

Marketing ke liye iska naam rakha gaya JavaScript, taaki log sochhein yeh Java ka part hai.

But Java aur JavaScript ka koi relation nahi hai — dono alag languages hain.

## 🟩 4. Kab banayi gayi thi?
JavaScript ko first release kiya gaya 1995 me.

Browser tha Netscape Navigator.

## ✅ 5. ECMAScript (ES) kya hai?
🔹 ECMAScript ek rule-book hai
🔹 Ye batata hai ki JavaScript kaise kaam karegi
🔹 Jaise cricket ke rules ICC banata hai, waise hi JavaScript ke rules ECMA naam ki body banati hai

⚙️ Example:
JavaScript ka engine (jaise Chrome ka V8) ECMAScript ke rules follow karta hai

ES5 aur ES6 = ECMAScript ke versions
JavaScript ke naye naye updates in versions me aate hain
Jaise phone ka software update hota hai, waise hi JS ka version update hota hai

ECMAScript khud koi community nahi hai,
✅ lekin usko banane aur maintain karne wali ek official community hai jiska naam hai ECMA International.

   ECMAScript ek standard (rule book) hai.
   Ye batata hai JavaScript ka syntax, behaviour, aur features kya hone chahiye.

🔚 Short Summary (Ek Line Me):
ECMAScript = JavaScript ke rules
ES5 = purana version (2009), basic features
ES6 = modern version (2015), advanced features
✅ Dono versions browsers me kaam karte hain


## 📦 Variables & Declarations


#### 1.	What is the difference between var, let, and const in terms of scope and hoisting?
	    diff. according to hoisting
		console.log(a);
        let a =10;
		and 
		console.log(a);
        var a =10;

#### 	2.	Why is let preferred over var in modern JavaScript?
    ans. Because of data security . var add itself to the window object but let can not.

#### 	3.	Can a const variable hold a mutable object? Explain with an example.
    ans. Yes.
         Example=>
         const obj={
         name:'vaibhav',
         age:25
         }
         obj.name = 'Raghav';

#### 	4.	What is the Temporal Dead Zone? How does it affect variable access?
	ans. variable ko use nhi kar sakte usko banane ke pehla yahi tdz hota hai .
    Example-
	console.log(a);
    let a = 10;

## 🧠 Data Types + Type System


#### 5.	What are primitive vs reference types? Give examples.
#### 6.	Why does typeof null return 'object'?
    ans. null ka type object hota hai ye bss ek blunder hai . Jo code object ko mila hai wahi code null ko bhi assign hua hai isi karan null ka type object hota hai.
#### 7.	Explain dynamic typing in JavaScript with a short example.
	ans.   var a=10;
           var a='vaibhav';
           var a = [1,2,3,4];
           var a ={
                   name: 'sumit',
                   age: 28
            }
            var a = function fun(){
            console.log("vaibhav");
            }
		yaha par ek hi data type se sab kaam kar sakte hai but other languages me nhi kar sakte hai.	

#### 	8.	What’s the difference between == and ===?
    ans. === it is strict checker than ==.

#####	== (Loose Equality)
    Compares values only, and allows type coercion.

    JavaScript will convert the types if they are not the same before        comparing.
    
    Example:
    javascript
    Copy
    Edit
    '5' == 5   // true  (string '5' is converted to number 5)
    false == 0 // true  (false is coerced to 0)
    null == undefined // true (special case)
	
 #####   === (Strict Equality)
    Compares both value and type.

    No type coercion – the types must be the same to be equal.

    Example:
    javascript
    Copy
    Edit
    '5' === 5   // false (string vs number)
    false === 0 // false (boolean vs number)
    null === undefined // false

#### 	9.	What values are considered falsy in JavaScript?
	ans. 0,false,null,NaN,undefined,document.all
	with the help of !! sign we can check the truthy and falsy of operator and operand.Examples are -

    !!0
    false
    !!null
    false
    !!NaN
    false
    !!''
    false
    !!document.all
    false
    !!1
    true
    !true
    false
    !false
    true
    !!true
    true
    !5
    false
    !!5
    true
    !![]
    true

## 🔄 Operators
#### 	10.	How does the typeof operator behave with different data types?

    typeof 12
    'number'
    typeof 'vaibhav'
    'string'
    typeof true
    'boolean'
    typeof []
    'object'
    typeof {}
    'object'
    typeof null
    'object'
    typeof function func(){}
    'function'
    typeof Symbol()
    'symbol'
    typeof '5'+5
    'string5'

#### 	11.	Why does "5" + 1 give "51" but "5" - 1 gives 4?
    Expression	Result	Why?
    "5" + 1	     "51"	+ triggers string concatenation
    "5" - 1	      4  	- forces numeric conversion i.e. substraction
    
#### 	12.	What is short-circuiting in logical operators?
	

## 🧭 Control Flow
#### 	13.	How is switch-case different from multiple if-else statements?

#### 	14.	What is early return pattern in functions? When should it be used?
    function abcd(){
		if(true) return 10;
		if(!false) return 1;
	}


## 🔁 Loops
#### 	15.	What is the difference between for, while, and do-while loops?
    ans.
	 for loop - Apan ko pata rahta hai ki for loop kaha se chalani hai or kaha par rokni hai 
	 
	 while loop - isme apan ko pata hota hai ki kis condition par loop ko roakna hai bss. 

	 do while - ye loop atleast one time run karti hai ye ek exit controlled loop hai .
#### 	16.	When would you use break or continue inside a loop?
    🔴 break — Exit the loop entirely
	🟡 continue — Skip to the next iteration
    
#### 	17.	What’s the difference between for-in and for-of?

## 🧮 Functions
#### 	18.	What are the differences between function declarations and expressions?
	function abcd(){
		//function declaration
	}it can hoist
	var a = function(){
       //function expression
	}can not hoist 


##### ✅ 1. Function Declaration
    
    function greet() {
      console.log("Hello!");
    }
	
    Hoisted: You can call it before it appears in the code.

    Named: Always has a name (greet).

    Typically used for defining top-level reusable functions.

    Example:
   
    greet(); // ✅ Works, even before the function is defined

    function greet() {
      console.log("Hello!");
    }
###### ✅ 2. Function Expression
    
    const greet = function () {
      console.log("Hello!");
    };
    Not hoisted: You cannot call it before it’s defined.

    Can be anonymous or named.

    Used when you need a function as a value (e.g., passing to     another function, setting in a variable).

    Example:
   
    greet(); // ❌ Error: Cannot access 'greet' before initialization

    const greet = function () {
      console.log("Hello!");
    };

#### 	19.	What are arrow functions and how is their this context different?

#### 	20.	What are higher-order functions? Give an example.
	ans. koi bhi function jo return kare ek naya func or accept kare function as an argumnet
	Example-
	function abcd(){
    return function(){

    };
}

    function abcd(val){

	}
	abcd(function(){

	})

#### 	21.	What is a closure in JavaScript? When does it occur?
	ans.Closure tab hota hai jab ek function apne outer function ke variables ko access karta hai, even baad me bhi, jab outer function finish ho chuka ho.

    🟡 When does it occur?
    Jab inner function:

    kisi outer function ke andar banaya gaya ho

    aur usse return ya use kiya gaya ho

    aur wo outer function ke variables ko yaad rakhta ho

    🔹 Example:
    js
    Copy
    Edit
    function outer() {
      let count = 0;

      return function inner() {
        count++;
        console.log("Count is:", count);
      };
    }

    const counter = outer();  // outer() runs once
    counter(); // Count is: 1
    counter(); // Count is: 2 ✅
    ✔ Even though outer() finish ho gaya,
    inner() abhi bhi count ko access kar sakta hai
    👉 This is closure!

    🔹 1. outer() kya return kar raha hai?
    outer() return kar raha hai function inner ko:

    return function inner() {
      count++;
      console.log("Count is:", count);
    };
    So jab tu likhta hai:

    const counter = outer();
    👇 Then counter me kya store hota hai?
    counter = inner function ✅
    Aur inner ke paas outer ka count bhi yaad hai (closure)

    🔚 Final Answer:
    counter is const, but it's holding a function.
    You can still call it like counter()
    You just can’t change it like counter = somethingElse.

    counter(); ✅ // allowed
    counter = 5; ❌ // not allowed


#### 	22.	What is IIFE? Why was it commonly used in the past?
	(function(){
let a=12;
return {
    getter: function(){
        console.log(a);
    }
};
})();


🔚 Final Summary:
Feature	IIFE (Immediately Invoked Function Expression)
Meaning	Function jo turant run ho jaaye
Use	Local/private scope banane ke liye
Common Before ES6	Kyunki let/const aur modules nahi the
Now	Kam use hota hai, kyunki block scope and modules aagaye

(function () {
  console.log("IIFE chala!");
})(); // 👈 this `()` at the end runs it immediately
Pehle function expression banaya

Fir turant () se call kiya

(function () {
  var name = "Vaibhav";
  console.log(name); // accessible
})();

console.log(name); // ❌ Error: not defined


## 🧰 Arrays & 🧱 Objects
#### 	23.	How is map different from forEach?
     ans. 🔹 1. map() – Returns a New Array
                    ✅ map() ne naya array banaya
                    ✅ Har value ko transform kiya
          🔹 2. forEach() – Only Loops, No Return
                    ❌ Return kuch nahi karta
                    ❌ Naya array nahi banta

#### 	24.	How does destructuring work for arrays and objects?

#### 	25.	What’s the difference between shallow and deep copy of an object?