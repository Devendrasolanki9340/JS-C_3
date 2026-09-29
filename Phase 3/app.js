
// var a =10 
// var b =20 

//  function add(){
//     var c= a+b
//     console.log(c);
//  }
// add()
//  var d= a*b
//  console.log(d)


// var  usre = 'devendta '
// var age = 20

// function greet(){
//     var gender  = 'male'

//     function sayhi(){
//         console.log('hello sir')
//     }
//     sayhi()
//     return 20
// }
// console.log(greet())

// console.log(a)
// var a= 23


// console.log(a)
// console.log(b)

// var a= 23
// let  b =3

// let ,const is block scope 
// var  funcrion  scope 

// if (10>5){
//     var  a =20    //function scope
//     console.log(a)
// }
// console.log(a)


// if (10>5){
//     let   a =20      //block scope 
//     console.log(a)
// }
// console.log(a)


// var user = 'vaibhav '
//  function greet (){
//     var age = 20
 
//     console.log(user);
//  function sayji (){
//     console.log('your age is ',age);
//  }
//   sayji()
// }
// greet()

// var user = 'vaibhav '
//  function greet (){
//     var age = 20
 
//  function sayji (){
//     console.log('your age is ',age);
//  }
//   return sayji
// }
// var out =greet()
// out()


// function outer(){
//     var user = 'raj'
//     var age = 34

//     function inner(){
//         console.log('username is',user)
//     }
//     return inner
// }
// console.log(outer())


// function outer(){
//     var user = 'ram'

//     return function(){
//         console.log('username is',user )
//     }
// }
// var outsider = outer()
// console.log(outsider)


// lexical scope 

// function parent(){
//     var user = 'ram'

//     function childe(){
//         var childname = 'anma'
//         console.log('parent-',user)
//         console.log('childe-',childname)
//     }
//     return childe
// }
// var output = parent()
// output()

// var city = 'kgn'
// function parent(){           //lexical scope
//     var user = 'ram'

//     function childe(){
//         var childname = 'anma'
//         console.log('parent-',user);
//         console.log('childe-',childname);

//         function grandChild(){
//             var grandChild = 'soham'
//             console.log('----------' );

//             console.log('parent -',user)
//             console.log('grandchild -',grandChild)
//         }
//         return grandChild
//     }
//     return childe
// }
// parent()()()




//  closer 

// function counter(){
//     var count = 0
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// var inc = counter()
// inc()
// inc()
// inc()

// function user(){
//     var username = 'ram'

//     var obj={
//         changeuser :function(a){
//             username = a
//         },
//         getuser:function(){
//             return username
//         }
//     }
//     return obj
// }

// var out = user()
// out.changeuser('devendra')

// console.log(out.getuser())


// function add (a){
//     return function(b){
//         return function (c){
//         return a+b+c
//     }
// }
// }
// console.log(add(1)(2)(3))



function grandparent (c){
    return function(b){
        return function (a){
        console.log(a,b,c)
    }
}
}
grandparent('ram')('ran2')('ram3')