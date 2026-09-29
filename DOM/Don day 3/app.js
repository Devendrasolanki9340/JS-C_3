
// Attribute  and properties 
//  serAttribure ,getAttribure , removeAttribure  , hasAttribure
// With data-= name
//  input.value (property , current state) vs input.getAttribute("value")




// const h3 =document.querySelector("#id1")

// let res = h3.getAttribute("id")
// let res = h3.getAttribute("class")

// h3.setAttribute("width","200")
// h3.removeAttribute("class")

// h3.hasAttribute("class")

// console.log(res);


// With data-= name

// const userCard =document.querySelector("#user_card")

// console.log(userCard.getAttribute("data-user-id"));

// userCard.dataset.userId = "345"
// console.log(userCard.getAttribute("data-user-id"));



//  input.value (property , current state) vs input.getAttribute("value")


// const  inp = document.querySelector("input")
// const  btn = document.querySelector("button")

// btn.addEventListener("click",()=>{
//     console.log(inp.value)
// })
// console.log(inp.value);




//  Creating inserting and  removing elements fron dom

//  insertion
//  appendChild --old I)insertBefor ii) removeChide  only one appendchild and cerate 
//   apppend   --- new     more  appendchild and cerate 


// const main = document.querySelector("main")

// let footer = document.createElement("footer")
// const span = document.createElement("span")
// document.body.appendChild(footer)

// span.innerHTML ="hey i ma <i>dynamic ....</i>"

// main.appendChild(footer)
// main.appendChild(span)

// main.append(footer,span)

// ii) removeChide
// main.removeChild(span)




// I)insertBefor

const main = document.querySelector("main")

// const box1 = document.querySelector(".box1")
// const box2 = document.querySelector(".box2")
// const box3 = document.querySelector(".box3")

// box2.style.backgroundColor = "yellow"
// box3.style.backgroundColor = "pink"

// main.insertBefore(box2,box1 )


// prepend

const box1 = document.createElement("div")
const box2 = document.createElement("div")
const box3 = document.createElement("div")

box1.classList.add("box")
box2.classList.add("box")
box2.style.backgroundColor = "yellow"
box3.classList.add("box")
box3.style.backgroundColor = "blue"

main.append(box1,box2,box3)

// prepend    savse pehle add kar do
// main.prepend(box1,box2)

// before  
// main.before(box2)

// after
// main.after(box1)

// replace
main.replaceChild(box2.box1)