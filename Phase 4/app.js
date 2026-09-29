
// console.log(window)



//reference error

// var a =10                 // line by line executed hu ge
// console.log(a);
// console.log(b)

//  Type error            // line by line executed hu ge

// var a= 10 
 
// console.log(a)

// console.log(10+20)

// const b =20
// b =30 


// syntax error             // ek bhi line excuted nehi ho ge

// var a= 10 
// console.log(a)

// console.log(10+20)

// cinst b =20
// b =30 




// This 


// var obj1={
//     firstname :'ram',
//     lastname:'sharma',
//     age : 30,
//     getintro:function(){
//         console.log(this.age)
//     }
// }

// var obj2={
//     firstname :'devendra',
//     lastname:'dfas',
//     age : 20,
//     getintro:function(){
//         console.log(this.firstname)
//     }
// }
// obj2.getintro()





// var obj1={
//     firstname :'ram',
//     lastname:'sharma',
//     age : 30,
//     getintro:()=>{
//         console.log(this)
//     }
// } 
// obj1.getintro()



// var obj1={
//     firstname :'ram',
//     lastname:'sharma',
//     age : 30,
//     getintro:function(){
//         const sayname=()=>{
//             console.log(this)
//         }
//         sayname()
//     }
// } 
// obj1.getintro()


// var obj ={
//     name:'ram',
//     age:43,
//     company:{
//         name:'sheryains',
//         isgood:true,
//         greet:function(){
//             console.log(this.name)
//         }
//     }
// }

// obj.company.greet()




// var obj ={
//     name:'ram',
//     age:43,
//     getcompany:function(){
//     const companyname={
//         name:'sheryains',
//         isgood:true,
//         greet:function(){
//             console.log(this.name)
//         }
//     }
//     companyname.greet()
// }
// }
// obj.getcompany()




// var obj ={
//     name:'ram',
//     age:43,
//     getcompany:function(){
//     const companyname={
//         name:'sheryains',
//         isgood:true,
//         greet:()=>{
//             console.log(this.name)
//         }
//     }
//     companyname.greet()
// }
// }
// obj.getcompany()






// Function sharing  --> explding binding
// a) call
// b) apply
// c) bind

//call

// var student1={
//     firstname:'ram',
//     lastname:'karma',
//     getintro:function(){
//         console.log("i am"+this.firstname +""+ this.lastname)
//     }
// }
// var  student2={
//     firstname:'dev',
//     lastname:'solanki'
// }

// student1.getintro.call(student2)




// var student1={
//     firstname:'ram',
//     lastname:'karma',
// }
// var  student2={
//     firstname:'dev',
//     lastname:'solanki'
// }
// var  student3={
//     firstname:'devndra',
//     lastname:'khhhhhhhhhhhh'
// }
// var getintro=function(){
//         console.log("i am"+this.firstname +""+ this.lastname)
//     }

// getintro.call(student3)






// var student1={
//     firstname:'ram',
//     lastname:'karma',
//     math:67,
//     compuste:34,
//     english:43
// }
// var  student2={
//     firstname:'dev',
//     lastname:'solanki',
//      math:57,
//     compuste:14,
//     english:23
// }
// var  student3={
//     firstname:'devndra',
//     lastname:'khhhhhhhhhhhh',
//      math:62,
//     compuste:94,
//     english:53,
// }
// var getresult=function(){
//         console.log(`${this.firstname}${this.lastname}, yoy got ${(this.math+this.compuste+this.english)/3}%marks`);
//     }

// getresult.call(student2) 



// var student1={
//     firstname:'ram',
//     lastname:'karma',
//     getintro:function(city,state){
//         console.log(`${this.firstname} ${this.lastname} ${city} (${state})`)
//     }
// }
// var  student2={
//     firstname:'dev',
//     lastname:'solanki',
// }

// student1.getintro.call(student2 ,'kgn','mp')


// let plaec ={
//     pacename:'office',
//     behavior:'proffersional',
//     sayhello:function(){
//         const insideplace ={
//             placename:'Metting room',
//             behavior:'Rosting',
//             sayhi:function(){
//                 console.log(this)
//             }
//         }
//         insideplace.sayhi()
//     }
// }
// plaec.sayhello()



// let plaec ={
//     pacename:'office',
//     behavior:'proffersional',
//     sayhello:function(){
//         const insideplace ={
//             placename:'Metting room',
//             behavior:'Rosting',
//             sayhiinfrontoffriends:function(){
//                 console.log(this.behavior)
//             },
//             sayhiinfrontofclinets:()=>{
//                 console.log(this.behavior)
//             },
//         }
//         insideplace.sayhiinfrontofclinets()
//         insideplace.sayhiinfrontoffriends()
//     }
// }
// plaec.sayhello()



//  Apply

// var student1={
//     firstname:'ram',
//     lastname:'karma',
//     getintro:function(city,state){
//         console.log(`${this.firstname} ${this.lastname} ${city} (${state})`)
//     }
// }
// var  student2={
//     firstname:'dev',
//     lastname:'solanki',
// }

// student1.getintro.apply(student2 ,['kgn','mp'])




// var student1={
//     firstname:'ram',
//     lastname:'karma',
//     getintro:function(city,state){
//         console.log(`${this.firstname} ${this.lastname} ${city} (${state})`)
//     }
// }
// var  student2={
//     firstname:'dev',
//     lastname:'solanki',
// }
// var  student3={
//     firstname:'jay',
//     lastname:'solanki',
// }
// var  student4={
//     firstname:'engodev',
//     lastname:'willh',
// }

// student1.getintro.call(student2 ,'kgn','mp')
// student1.getintro.apply(student3 ,['bhir','UP'])
// var out= student1.getintro.bind(student4 ,'mumbai','MH')
// out()






// var student1={
//     firstname:'ram',
//     lastname:'karma',
// }
// var  student2={
//     firstname:'dev',
//     lastname:'solanki',
// }
// var  student3={
//     firstname:'jay',
//     lastname:'solanki',
// }
// var  student4={
//     firstname:'engodev',
//     lastname:'willh',
// }
// var getintro =function(city,state){
//         console.log(`${this.firstname} ${this.lastname} ${city} (${state})`)
//     }

// getintro.call(student2 ,'kgn','mp')
// getintro.apply(student3 ,['bhir','UP'])
// var out=getintro.bind(student4 ,'mumbai','MH')
// out()






// prototype 


// var arr=[12,23,54]

// var obj={
//     name:'sede',
//     age:32
// }
// function hero(){

// }
// console.log(arr.__proto__)

// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__)

// console.log(Array.prototype)
// console.log(Object.prototype)
// console.log(Function.prototype)


// console.log(Array.prototype.__proto__ == Object.prototype)


// Arrya -> Array -> Object
// object ->  Object
// function -> function -> Object


//  Prototype chaning


// var company ={
//     name:'shertains',
//     foundingyear:2022,
//     sayslogan:function(){
//         console.log('we teach what is matters')
//     }
// }
// var user ={
//     name:'deve',
//     age:33,
// }

// user.__proto__ =company
// console.log(user.sayslogan)


// var collage ={
//     Title:'collage',
//     name:'IIT Bombay',
//     Rating:'A+',
//     student:4000,
//     saySlogan:function(){
//         console.log('we are best ,we are IIT')
//     },
//     hasclus:true
// }

// var branch={
//     Title:'branch',
//     name:'cse',
//     Rting:'A++',
//     students:500,
//     subjects:['toc','sd','cd']
// ,
// hastoppper:true
// }

// var user ={
//     name:'raja',
//     age:20,
//     marks:34
// }

// user.__proto__ = branch
// branch.__proto__ = collage

// console.log(user)









// oops


// Contructor 

// function CreateBook(bookName,authorName,pages){
//     this.bookName = bookName
//     this.authorName = authorName
//     this.pages = pages
//     this.genFrontPage = function (){
//         console.log('Book Name :',this.bookName);
//         console.log('Author Name:',this.authorName);
//         console.log('Pages:',this.pages);
//     }
// }

// let book1 = new CreateBook('hp-persf ','jsf',4354)
// let book2 = new CreateBook('hfgdgsf ','jsf',894)
// let book3 = new CreateBook('tetrrsf ','jsf',4354)
// let book4 = new CreateBook('trtrerersf ','jsf',134)

// book4.genFrontPage()



// function MakseStudent(Fname,lname,Contact,isVerifiedl){
//     this.Fname = Fname
//     this.lname = lname
//     this.Contact = Contact
//     this.isVerifiedl = isVerifiedl
//     this.showProfile = function(){
//         if(this.isVerifiedl){
//             console.log(`Name : ${this.Fname} ${this.lname}Contact: ${this.Contact}`)
//         }else{
//             console.log('user Not Verified')
//         }
//     }
// }

// let s1 = new MakseStudent('devendra','solani',34545,true)
// let s2 = new MakseStudent('ram','soni',34545,true)
// let s3 = new MakseStudent('heat','goal',34545,false)
// let s4 = new MakseStudent('pria','karma',34545,true)


// s4.showProfile()







// class MakseStudent{
//     constructor(Fname,lname,Contact,isVerifiedl){
//     this.Fname = Fname
//     this.lname = lname
//     this.Contact = Contact
//     this.isVerifiedl = isVerifiedl
//     this.showProfile = function(){
//         if(this.isVerifiedl){
//             console.log(`Name : ${this.Fname} ${this.lname}Contact: ${this.Contact}`)
//         }else{
//             console.log('user Not Verified')
//         }
//     }
//     }
// }

// let s1 = new MakseStudent('devendra','solani',34545,true)
// let s2 = new MakseStudent('ram','soni',34545,true)
// let s3 = new MakseStudent('heat','goal',34545,false)
// let s4 = new MakseStudent('pria','karma',34545,true)


// s3.showProfile()



// prototype  examples


// class MakseStudent{
//     constructor(Fname,lname,Contact,isVerifiedl){
//     this.Fname = Fname
//     this.lname = lname
//     this.Contact = Contact
//     this.isVerifiedl = isVerifiedl
//     }
// }
//  let showProfile = function(){
//         if(this.isVerifiedl){
//             console.log(`Name : ${this.Fname} ${this.lname}Contact: ${this.Contact}`)
//         }else{
//             console.log('user Not Verified')
//         }
//     }

//     MakseStudent.prototype.showProfile = showProfile

// let s1 = new MakseStudent('devendra','solani',34545,true)
// let s2 = new MakseStudent('ram','soni',34545,true)
// let s3 = new MakseStudent('heat','goal',34545,false)
// let s4 = new MakseStudent('pria','karma',34545,true)


// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s4)



// let papa = {
//     fname :'rekesh',
//     lname:'sharma',
//     shop:'sharmak ji womens collection'
// }

// let beta ={
//     fname:'deven',
//     lname:'sharma'
// }

// beta.__proto__ = papa
// console.log(beta.shop)


// prototype inhertance 

// let dada ={
//     name:'valls',
//     lname:"sharma",
//     land:  "10cr"
// }

// let papa = {
//     fname :'rekesh',
//     lname:'sharma',
//     shop:'sharmak ji womens collection'
// }

// let beta ={
//     fname:'deven',
//     lname:'sharma'
// }

// beta.__proto__ = papa
// papa.__proto__ = dada

// console.log(beta.land)



// class User {
//         constructor(Fname,lname,Contact){
//     this.Fname = Fname
//     this.lname = lname
//     this.Contact = Contact
//     }
//     greet(){
//         console.log(`Welcome, ${this.Fname}${this.lname}`)
//     }
// }
// class Admin extends User {
//         constructor(Fname,lname,Contact){
//         super(Fname,lname,Contact,)
//         this.accessAdminPanel = true
//     }
//     addCourse(){
//         console.log('New Course Added')
//     }
//     removeAllCoures(){
//         console.log('All Coures Removed')
//     }
// }
// let u1 = new User('ram','singh',34424)
// let u2 = new Admin('dsfa','dfasfhhhhhfd',3442434)


// console.log(u2)

// u1.greet()
// u2.greet()
// u2.addCourse()
// u2.removeAllCoures()
