
const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")


// btn.addEventListener('click',function(){
//     bulb.style.backgroundColor = "red"
//     btn.textContent = "Off"
// })
 



//  first approach ha 
// let flag = true
// btn.addEventListener('click',function(){
//     if(flag){
//     bulb.style.backgroundColor = "yellow"
//     btn.textContent = "Off"
//     flag = false
// }else{
//     bulb.style.backgroundColor = "transparent"
//     btn.textContent = "On"
//     flag =true
// }
// })


//  second approach ha ya

btn.addEventListener("click",function(){
     if (bulb.classList.toggle("lightUP")){
        btn.textContent = "Off"
     }else{
        btn.textContent = "On"
     }
    
})