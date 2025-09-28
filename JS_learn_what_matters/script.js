
// word vs keyword
// var let const
// hoisting - variables and functions are hoisted which means their declaration is moved on the top of code.

console.log(a); 
var a=10; 

// primivtives and rederence

   // primitives 
     var b = 12;
     var c = a;
     c=+2;
   // reference = [] () {}
     var d = [1,2,3,4];
     var f = d;
     console.log("Before pop in f :" + d);
     console.log(f);
     f.pop();
     console.log("After pop in f :" + d);
     console.log(f);
   // aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojaata hai,use hum reference value kahte hai, aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai

//Conditionals - if else else-if 

//loops - for while -> loop ka matlab repeat

//Functions -> functions mainly teen kaam ke liye hote hai
              //1.jab aapka code aap turant nahi chalana chaate future me chalana chaate ho
              //2.jab aapka code aap reuse karna chaate ho
              //3.jab aap code chalana chaate ho har baar with differnt data.

              function vaibhav(a,b,c){
                console.log(a, b, c);
              }
              vaibhav(1,2,3);

//Arrays
    var arr = [1,2,3,4,5];
    
// push pop shift unshift splice 

  var array = [10,20,30,40];
  array.push(50);
  array.pop(); //last index ki value ko remove karta hai
  array.unshift(1); //array ke suru me ek value add karne ke liye unshift use hota hai.
  array.shift();  //array ke suru me ek value add karne ke liye unshift use hota hai.
  array.splice(2,1); //ye kahi se bhi value remove kar sakta hai (first argument - me index dena hota hai matlab konse index se value karne hai second argument - me batana hota hai ki us index se kitni value remove karna hai)

//Objects - ek se jaada bande ki baat ki to hua array, ek bande ke baare mein saari baat ki to hua object.
            // object hai ek bande ki details ko hold karna , in a key value pair

            // 1) blank obj
            var a = {};
             
            // 2) filled obj
            var a = {
                age: 24, //property
                name: "vaibhav",  //property
                email: "vaibahv73@gmail.com",  //property
                contact: 9302532570,  //property
                kuchbolo: function(){} //ek aisi property jiski value ho function usse hum method boolte hai
            }

            a.name = "harsh";