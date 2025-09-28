// task-1

// let flag = false 
// document.querySelector("button").addEventListener('click',function(){
//     if(flag){
//         document.querySelector("h1").style.color = "black"
//     document.querySelector("h1").textContent = "Black"
//     flag = false
//     }else{
//         document.querySelector("h1").style.color = "red"
//     document.querySelector("h1").textContent = "Red"
//     flag = true
//     }
// })

// task-2

// let btns = document.querySelectorAll("button")
// let audios = document.querySelectorAll("audio")

// let pauser = null

// function stopper(aud){
// if(aud !== null){
//    aud.pause()
//    aud.currentTime = 0; // reset to start
// }
// }

// btns[0].addEventListener("click",function(){
//     stopper(pauser)
//     audios[0].currentTime = 0; // start from beginning
//     audios[0].play()
//     pauser = audios[0]
    
// })

// btns[1].addEventListener("click",function(){
//     stopper(pauser)
//     audios[1].currentTime = 0; // start from beginning
//     audios[1].play()
//     pauser = audios[1]
// })

// btns[2].addEventListener("click",function(){
//     stopper(pauser)
//     audios[2].currentTime = 0; // start from beginning
//     audios[2].play()
//     pauser = audios[2]
// })

// btns[3].addEventListener("click",function(){
//     pauser.play()
// })

// btns[4].addEventListener("click",function(){
//     pauser.pause()
// })