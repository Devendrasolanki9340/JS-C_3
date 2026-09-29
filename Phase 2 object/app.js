
// var user ={
//     name:'dev',
//     age:18,
//     city:'kgn'
// }
// console.log(user["name"]


// let person = {
//     name:'devendra',
//     age:32,
//     location:'kgn'
// }
// person.age = 25;
// delete person.location;
// person.location = "dfdf"
// console.log(person)


// let calculator ={
//     add:function(a,b){
//         return a+b;
//     },
//     subtract :function(a,b){
//         return a-b;
//     }
// };
// console.log(calculator.add(2,3))
// console.log(calculator.subtract(4,2))


// let calculator = {
//     add (a,b) {return a+b;},
//     subtract (a,b) {return a-b;}
// };
// console.log(calculator.add(1,2))
// console.log(calculator.subtract(1,2))



// var user = {
//     name:'devendra',
//     city:"kgn",
//     cont:43245,
//     age :23,
//     batch:"conf2"
// }
// var phone = {
//     modle:'sumsung',
//     colore:'red',
//     price:70000
// }
// console.log(Object.keys(phone));
// console.log(Object.entries(phone));
// console.log(Object.values(phone));


// var  username = prompt('enter name')
// var age = Number(prompt('enter age'))
// var city = prompt('enter city')

// var obj = {username,age,city}
// console.log(obj)


// var user ={
//     name:'dev',
//     age:43,
//     team:'call',
//     ismarried:true,
//     skills:['signing','dnacing','fielding'],
//     spouse:{
//         name:'ram',
//         proffesiion:"djkf",
//         age:34,
//     }
// }

// console.log(user.spouse.name)

// var user  ={
//     name:'prove',
//     age:20,
//     ishandsome:true,
//     skills:['html','css','js'],
//     collage:{
//         mame:'sheryians coding school',
//         totlastudent:200,
//         courses:['web devp','data scirence','devpos']
//     }
// }

// console.log(user.collage.totlastudent - user.age) - user.collage.courses[2];


// var obj ={
//     user:'raja',
//     greet:function(){
//         console.log('good mornig...');

//       return 'affka'   
//     }
// }
// console.log(obj.greet());



// var obj ={
//     user:'raja',
//     greet:function(a){
//         console.log('good mornig',a); 
//     }
// }
// obj.greet('ram');


// var math ={
//     add:(a,b)=>{
//         return a+b
//     },
//     square:(a,b)=>{
//         return a*a
//     },
//     cude:(a,b)=>{
//         return a*a*a
//     },
//     multiple:(a,b)=>{
//         return a*b
//     },
//     sub:(a,b)=>{
//         return a-b
//     },
// }
// console.log(math.square(3));


// var usr ={
//     greet:()=>{
//         console.log("hello");
//     }
// }
// console.log (console.log('hel'));


// var greet =()=>{
//     console.log('hello');
// }
// var bye =()=>{
//     console.log('bye bye ')
// }
//  var obj ={
//     name:'dev',
//     age:10>15 ? greet:bye
//  }
//  console.log(obj)



// array -> object
// object -> object 

//  var arr= [4,334,3,4]
// console.log(typeofa(arr))


// var  obj ={
//     name:'adj',
//     age:34
// }
// obj['city']='delhi'
// console.log(obj)


// const groom ={
//     name:'selmon',
//     age:34
// }
// const bride ={
//     name:'kat',
//     age:34
// }

// groom.name = 'vicly'
// console.log(groom.name ,'weds' ,bride.name)


// var user ={
//     name:'dev',
//     age :34,
//     city:'jgs'
// }
// Object.seal(user)
// user.issingle = true

// console.log(user)



// var user ={
//     name:'dev',
//     age :34,
//     city:'jgs'
// }

// Object.seal(user)
// delete user.name

// console.log(user)



// var user ={
//     name:'dev',
//     age :34,
//     city:'jgs'
// }

// Object.freeze(user)
// user.name ='ram'

// console.log(user)


// Distructuring 

// var arr= [11,22,33]
// var [b,d] = arr

// console.log(b)


// var user =['ram ','deven','drjed','dfdf']

// var [a,b,...c] = user     //  rest element 
//  console.log(c)  


// var obj ={
//     name:'devendra',
//     age:34,
//     city:'bhopal',
//     coll:'dfsd'
// }
// var {name,...b} = obj

// console.log(b);

//shello copy 

// var obj ={
//     name:"fhard",
//     age:23,
//     marks:34
// }
// var obj2 = obj 

// obj2.name = 'devendra '
// console.log(obj2)



// var obj ={
//     name:"fhard",
//     age:23,
//     marks:34,
//     collage:{
//         name:'lnct',
//         student:2323
//     },
//     skills:['html','vss','sdf']
// }
// var obj2 = {...obj} 
// obj2.skills.push('react')
// obj2.collage.name = 'kefgd '
// console.log(obj)



//deeep copy 


// var orignal ={
//     name:"fhard",
//     age:23,
//     marks:34,
//     collage:{
//         name:'lnct',
//         student:2323
//     },
//     skills:['html','vss','sdf']
// }

// var obj = JSON.stringify(orignal)
// console.log(orignal)
// console.log(typeof(orignal))


// var str = JSON.stringify(orignal)
// var copy = JSON.parse(str)

// copy.name = 'devedendra'
// console.log(copy)
// console.log(orignal)




// var arr = [12,{name:'devendra',age:54},343]

// var str = JSON.stringify(arr)

// var arr2 = JSON.parse(str)

// arr2[1].name = 'ram'
// console.log(arr2)





// var arr = [12,{name:'devendra',age:54},343]

// var arr2 = JSON.parse(JSON.stringify(arr))

// arr2[1].name = 'ram'
// console.log(arr)


