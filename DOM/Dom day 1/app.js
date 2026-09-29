
//  selection of an element 

//  only selects first tag

// const h1 = document.querySelector("h1")

//  for selecting all tages
// const  h1 = document.querySelectorAll("h1")       //NodeList    --reload 

// const h1 = document.getElementsByTagName("h1")      // HTMLcollection    that is live 

// const h1 = document.getElementById('heading')  

// const h1 = document.getElementsByClassName('hey')


const h1= document.querySelector(".hey")
// const h1= document.querySelector("#heading")


const  box = document.querySelector("#box")

//  Changing  of HTML

// h1.textContent = 'pololdfs'
// h1.innerHTML = 'dfsdfsfd'  
// h1.innerText = 'fsddfsf' 

//  text change ----
//  textContent
//  innerText 
//  innerHTML  -> pura structure ud jaega


box.innerHTML ="ddecbdra solani"
box.style.padding = '40px'
box.style.display  = "flex"
box.style.alignItems = "center"
box.style.gap  = "20px"

// document.body.innerHTML = 'ramm'

console.log(h1);
