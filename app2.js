
//  var a =0;

//  while(a<=10){
//     console.log(a)
//     a++;
//  }


// var a = 10 ;
//  while (a>=0){
//     console.log(a)
//     a--;
//  }

// var num = Number(prompt('enter number'))

// var a = 1;
// while (a<=num){
//    console.log(a)
//    a++;
// }





// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('enter number: ', answer => {
//   const num = Number(answer);
//   let a = 1;
//   while (a <= num) {
//     console.log(a);
//     a++;
//   }
//   rl.close();
// });




// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('enter number: ', answer => {
//   const num = Number(answer);
//   let a = 1;
//   while (a <= num) {
//    //  if(a % 2 == 0)
//       // if(a % 2 != 0)
//       {
//       console.log(a);
//     }
//     a++;
//   }
//   rl.close();
// });






// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('enter number: ', answer => {
//   const num = Number(answer);
//   let a = 1;
//   while (a <= 10) {
//       {
//       // console.log(num*a);
//       console.log( num + ' X ' , a + ' = ', num*a);
//     }
//     a++;
//   }
//   rl.close();
// });



// var  a = 11

// do{
//    console.log(a)
//    a++
// }while(a<=10)


// do{
//    var pass = prompt('Enter your passward')
// }while(pass != '123')
//    console.log('Welcome')


// for(var a =1; a<=10; a++){
//    console.log('eheh',a)
// }

// for(var a =10; a>0; a--){
//    console.log('eheh',a)
// }



// console.log(a)
// var  a =10


// var a = `ram3`
// var a = "ram2"
// var a ='ram1'
// console.log(a)



// THis is the trample literal of that code 

// var name = 'devendra '
// var age  =20
// var gender = 'male'

// console.log(`Hero name is ${name},his age is ${age} and he is a ${gender} `)



// for(a = 1; a <=10; a++){
//    if(a==3){
//       break
//    }
//    console.log(a)
// }



// for(a = 1; a <=10; a++){
//    if(a==3){
//      continue
//    }
//    if(a==9){
//       continue
//    }
//    console.log(a)
// }



// console.log("10"-"5")  //5

// console.log(0 ==false)    //true
// console.log(0 ===false)   //false

// console.log("hello"-2)    //NaN


// let x=5;
// console.log(x++)   //5
// console.log(++x)   //7


// console.log(5___"5");

// if(___){
//    console.log("run");
// }


// console.log(true + true +false)   //2

// console.log(x);
// let  x= 10         //refferance arror



// {
    // var x= 50;
// }
// console.log(x)      //50


// console.log(typeof null);     //object


// let a;
// let b = null;
// console.log(a ==b);    //true


// console.log([]+[]);   //"" 







































//  day 4



// function abc(){
//     console.log('hello')
// }
// abc()


// function dance(){
//     console.log('Danceing')
// }
// function walk(){
//     console.log('walking')
// }
// function eating(){
//     console.log('Eating')
// }
// dance()



//  function decleration 

// function greet(num){
//     console.log('Good Evening',num)
// }
// greet(100)
// greet(50)
// greet()



// function greet(a,b){
//     console.log(a+b);
// }
// greet(10,20)

// function greet(a,b){
//     console.log(a*b);
// }
// greet(10,20)


// function greet(user ,age){
//     console.log('Good Morning',user);

//     if(age>=18){
//         console.log(' You are Welcome to  party');
//     }else{
//         console.log('Not allowd')
//     }
// }
// greet('Ram',34)





//  function expration 

// var a = function (){
//     console.log('ram')
// }
// a()


// function decleration 

// function a1(a){
//     console.log("Hello from js ",a)
// }

// // function Expration 

// var b1 = function(a){
//     console.log("Hello from js ",a)
// }

// // Arrow function
// var c1=(a)=>{
//     console.log("Hello from js ",a)
// }

//shorthand Rules

// var sq = (a)=> a*a;
// console.log(sq(10))


// // one liner function 
// var d1= (a)=>console.log("Hello from js",a)

// var d2= a=>console.log("Hello from js",a)


// a1('Ram')
// b1("devendra")
// c1("Engo codeing")
// d1("code")
// d2("neja x")


// Anomas function 
// function(){

// }



//  IIFE — Immediately Invoked Function Expression

// (function avb(){
//     console.log("This si the IIFE")
// })


// function abc(a,b){
//     return(a+b)
// }
// console.log(abc(10,20))
// console.log(abc(50,20))


// function abc(a,b){
//     var a= 10
//     var b =20
//     var c = a+b
//     return(c)
// }
// console.log(abc())
// console.log(abc())



// function permission(gen){
//     if(gen == 'f'){
//         return "Welcome to Women party "
//     }else{
//         return "Welcome to men party "
//     }
// }
// console.log(permission("f"))



// function abc(){
//     return 50
// }
// var b =abc()
// console.log(b)



// pure 

// function squt(a){
//     return a*a
// }
// console.log(squt(5))



// impure

// var a =10
// function abc(){
//     a++
//     return a
// }
// console.log(abc())
// console.log(abc())


// var a =10
// function abc(num){
//     a++
//     return a*num
// }
// console.log(abc(5))
// console.log(abc(5))


// function abc(a,b){
//     console.log('hello gyus',a,b)
// }
// abc(5)


// function greet(user = "sir", age =20){
//     console.log('Welcome',user,'your age is',age)
// }
// greet(undefined,29)
// greet('ram',20)





//   callback function  

// function hero(){
//     console.log('This is the hero function')
// }
// function main(a){
//     console.log("This is the main function")
//     a()
// }
// main(hero)


// function footpath(f){
//     console.log("I am Footpath and my width is",f)
// }
// function mainroad(wid ,cb ){
//     console.log("This is main road,total width of road is",wid)
//     cb(wid/10)
// }
// mainroad(80,footpath)







// function footpath(f){
//     console.log("I am Footpath")
// }
// function mainroad(cb){
//     console.log("This is main road")
//     cb(cb)
// }
// mainroad(footpath)


// function parent (){
//     console.log("I  am parent");

// function Child (){
//     console.log('I am child');
// }
//    return Child
// }
// parent()()
//      // var ans = parent()
//      //  ans()



// function dada(){
//     console.log("I am dada")

//     function papa(){
//         console.log("I am papa")

//         function child(){
//             console.log("I am child")
//         }
//         return child
//     }
//     return papa
// }

// dada()()()

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('enter name: ', answer => {
//   let  name = answer;
// rl.question('enter your age',answer2=>{
//     let age = Number(answer2);
// })

// function greet(name ,age){
//     console.log('Good Morning',name);

//     if(age>=18){
//         console.log(' You are Welcome to  party');
//     }else{
//         console.log('Not allowd')
//     }
// }
// greet(`devendra`,20);
// rl.close();
// });