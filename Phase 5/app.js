//  Asyns  function 


//  serTimeout  -> Delay


// console.log('start')

// setTimeout(() => {
//     console.log('center')
// },4000);
// console.log("end")


// setTimeout(function run(){
//     console.log('hello guys, THis is timeout1')
// },4000)
// setTimeout(function run(){
//     console.log('hello guys, THis is timeout2')
// },4000)
// console.log("end")


// setTimeout(function run(){
//     console.log(1)
// },5000)
// setTimeout(function run(){
//     console.log(2)
// },2000)
// setTimeout(function run(){
//     console.log(3)
// },6000)



// console.log('start')
// setTimeout(function run(){
//     console.log(1)
// },0)
// console.log('end')


// console.log('start')
// setInterval(() => {
//     console.log('hello ram')
// }, 1000);
// console.log('end')


// let int = setInterval(() => {
//     console.log('hello ram')
// }, 1000);

// setTimeout(() => {
//     clearInterval(int)
//     console.log('clearn interval')
// },5000);





//  promises 

// async function dataLab (){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(Response)
// }
// dataLab()



// async function dataLab (){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await response.json()
//     console.log(data)
// }
// dataLab()


// let p1 = new Promise (function(resolve,reject){
//     console.log('promise prnding hai...')

//     setTimeout(() => {
//         console.log('this is timeout')
//     }, 5000);
// })



// let p1 = new Promise (function(resolve,reject){
//     console.log('promise prnding hai...')

//     let result =false

//     setTimeout(() => {
//         if(result){
//             console.log('vlaue true')
//             resolve()
//         }else{
//             console.log('vlaue false')
//             reject()
//         }
//     }, 3000);
// })
// p1.then(function(){
//     console.log('promise is fullfilled')
// })
// .catch(function(){
//     console.log('promise is rejected')
// })

// .finally(function(){
//     console.log('promise is END')
// })



// order food from zomoto 
//  order  done - > oreder condirmed  (your food is perparing)
// mai wait karunga oreder ke perpare hoke muja tak aane ka
// 1. order aa aya 
    //    .. make a payment 
// 1. order  nahi aaya 
        //    .. complein karo


//  function OderFood(){

//     let MyOder = new Promise(function(resolve,reject){

//         console.log('Your order is coming ')

//         let orderStatus = true

//         setTimeout(function(){
//             if(orderStatus){
//                 console.log('Delivery vaale bhauya aa gye hain')
//                 resolve()
//             }else{
//                 console.log('Order Failed')
//                 reject()
//             }
//         }, 3000);
//     })     

//  MyOder.then(function (res ,rej) {
//     console.log('Now make a payment')

//     let paymentStatus = false

//     setTimeout(function(){
//         if(paymentStatus){
//             console.log('Payment Done')
//         }else{
//             console.log('Payment Failed')
//         }
//     },5000)
//  })
//    .then(function(){
//     console.log("Food Eating")
//    })
//   .catch(function()  {
//     console.log('COmplain karo')
//  });
//  }
//  OderFood()





// let response  = fetch ('https://fakestoreapi.com/products')

// response.then(function(data){
//     console.log('Data aa gya')
//     return data.json()
// })
// .then(function(mydata){
//     console.log(mydata)
// })
// .catch(function(){
//     console.error('Data nhi aaya')
// })


// async function datalao() {
// let response  =  await fetch ('https://fakestoreapi.com/products')
//      let  data = await response.json()
//     //  console.log(data)

//      data.forEach(function (elem) {
//         console.log(elem.title)
//      });
// }
// datalao()



// async function datalao() {
//   try{
//     let response  =  await fetch ('https://fakestoreapi.com/products')
//      let  data = await response.json()

//      data.forEach(function (elem) {
//         console.log(elem.title)
//      });
//   } catch(error){
//     console.log(error)
//   };
// }
// datalao()
