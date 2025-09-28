let quotes = [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up. - Thomas Edison"
];

let newquote = document.querySelector("#newquote");
let quote = document.querySelector(".quote");

let previousindex = -1;

newquote.addEventListener("click",function(){
    let index;
   do{
    index = Math.floor(Math.random() * quotes.length)
   }while(index === previousindex)
 
    quote.innerHTML = quotes[index];
    previousindex = index;

})

console.log(quote);

