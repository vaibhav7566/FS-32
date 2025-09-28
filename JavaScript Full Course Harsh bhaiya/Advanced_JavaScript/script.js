// use of this globally
console.log(this);

// use of this inside function
function name (){
    console.log(this);
}
name();

// use of this inside method
let obj = {
    name : "vaibhav",
    age : 21,
    sayMyname : function(){  
        console.log(this);
        // console.log(this.age);
        //isme this ka mtlb hai obj. 
    },

    // agar aap this ka use ek arrow function ke andar karte ho toh this ki value window ho jayegi.
    sayYourname : () => {
        console.log(this);
    } 
}
obj.sayMyname();
obj.sayYourname();

//use of this with event handler
document.querySelector("h1").addEventListener("click",function(){
    console.log(this);
    // isme this ka mtlb hai bo banda jispe event listner laga ho jise ki is case this equals to h1 tag.
})

class Abcd {
    constructor(){
        console.log("hey hey");
        this.a = 12;
    }
}
let val = new Abcd();
console.log(val);

// classes me class ke andar this ki value ek blank object hoti hai jab aap usse new keyword ke sath call karte ho. 



//call apply and bind

let obbj = {
    name: "Vaibhav",
    age:21
}

function func(){
    console.log(this);
}
func.call(obbj);

