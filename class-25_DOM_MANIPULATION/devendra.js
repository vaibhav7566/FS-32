// var mypost = [
//     {
//         name: "Sunrise",
// likes: 300,
// comment: 35,
// share: 12,
// followerGained: 25
//     },
//         {
//         name: "rise",
// likes: 300,
// comment: 35,
// share: 12,
// followerGained: 25
//     },
//         {
//         name: "Sun",
// likes: 300,
// comment: 35,
// share: 12,
// followerGained: 25
//     },
//         {
//         name: "sunset",
// likes: 300,
// comment: 33,
// share: 12,
// followerGained: 25
//     },
//         {
//         name: "setsun",
// likes: 300,
// comment: 35,
// share: 12,
// followerGained: 25
//     }
// ]

// var totallike=0;
// var totalcomment=0;
// var totalshare = 0;

// var totalfollower = 0;


// mypost.forEach(function(val , index){
//     console.log(index , val.comment );
//  totallike = val.likes + totallike;
//  totalcomment = val.comment + totalcomment;
//  totalshare = val.share + totalshare;
//  totalfollower = val.followerGained + totalfollower;
// })

// console.log(totallike);
// console.log(totalcomment);
// console.log(totalshare);
// console.log(totalfollower);


// var btn = document.querySelector("button")
// var full = document.querySelector(".fullnav")

// var flag = 0

// btn.addEventListener('click',function(){
    
//     if(flag === 0){
//         full.style.right = 0
//         btn.innerHTML = '<i class="ri-close-line"></i>'
//         flag = 1
//     }
//     else{
//         full.style.right = -40%
//         btn.innerHTML = '<i class="ri-menu-3-line"></i>'
//         flag = 0
//     }
// })

var btn = document.querySelector("button");

var box = document.querySelector(".box")

btn.addEventListener("click", function(){
    var a = Math.floor(Math.random())
})