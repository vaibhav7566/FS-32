// setTimeout(funtion  val() {
//     console.log("Callback");
    
// },1000);

// setTimeout(function r(){
//     console.log("Hello");
// },1000);

// setTimeout(r(),1000);


// var arr = [1,2,3,4,5];
// console.log(arr);

// var brr = arr;
// console.log(brr);

// brr.splice(1,2);
// console.log(arr);

// var a=[1,2,3];
// var b=[...a];
// b.pop(
// );

// var obj = {
//     name : "raghav",
//     rollno : 22
// }

// var arr =[10,20,30,40];
// arr.forEach(function(val){
// console.log(val+2);
// });

// const obj={
//     name:'vaibhav',
//     age:25
// }

// obj.name = 'Raghav';

// var a=10;
// var a='vaibhav';
// var a = [1,2,3,4];
// var a ={
//     name: 'sumit',
//     age: 28
// }
// var a = function fun(){
// console.log("vaibhav");
// }






// console.log(a);


// let a = 10;

// function abcd(){
//     var a=10;
//     return function(){
//      console.log(a);
//     };
// }

(function(){
let a=12;
return {
    getter: function(){
        console.log(a);
    }
};
})();