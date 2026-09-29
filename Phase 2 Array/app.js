
// var arr1 = [1, 2, 3, 4, 5];
// console.log(arr1); // Output: [1, 2, 3, 4, 5]



// var arr2 = ['ram', 'shyam', 'hari'];
// console.log(arr2); // Output: ['ram', 'shyam', 'hari']

//  arr2[0] = 'sita'
// console.log(arr2); // Output: ['sita', 'shyam', 'hari']


// var arr = [1, 2, 3, 4, 5,4,34,34,2,63,43];
// console.log(arr.length-1);
// console.log(arr[arr.length-1]); 


// var arr = [1, 2, 3, 4, 5];
    
// arr.push('ram');
// console.log(arr); 
// arr.pop('ram');
// console.log(arr);

// arr.push(arr[0]);
// console.log(arr);


// var arr = [15,45,78,90,78];

// arr.shift();   // removes the first element (15) from the array
// arr.shift();   // removes the next first element (45) from the array
// arr.unshift(99);   // adds 99 to the beginning of the array

// arr.pop();   // removes the last element (78) from the array
// arr.pop();   // removes the next last element (90) from the array

// arr.push(89);   // adds 89 to the end of the array
 
// arr.unshift(67);   // adds 67 to the beginning of the array
// arr.push(89);   // adds 89 to the end of the array

// arr.unshift(1);  // adds 1 to the beginning of the array

// console.log(arr[3]);   // Output: 78



//  splice (startindx, deletecound , newitem)

//  var arr = ['ram', 'shyam', 'hari', 'sita', 'gita'];

// arr.splice(0,0,'laxman','bharat');
// console.log(arr);


// var arr = ['ram', 'shyam', 'hari', 'luckyy', 'sita', 'gita'];

// arr.splice(3,2,'laxman','bharat');
// console.log(arr); 
// console.log(arr[arr.length-1]);


// # Multi-Dimensional Arrays


// var arr = [ 10,32,[12,34,435,65,76,78,34,76]]
//  console.log(arr);
// console.log(arr[2][2])


// var arr = [
//     [1,3,5,7],
//     [9,6,4,2],
//     [2,4,6,8]
// ]
// console.log(arr[0][1]+arr[1][3]);
// console.log(arr[0][1]+arr[1][3]+arr.length);

//  let p = arr.push([10,20,30,40])
//  console.log(arr);

// let p = arr.pop()
//  console.log(arr);

// var user = arr.unshift(['ram','shyam','hari','sita'])
// console.log(arr[0][0] +arr[3][0]);
// console.log(arr);

// console.log(arr[0][1] +arr[2][1]+arr.length-1);
// console.log(arr.reverse());

// -----------------------------------------------------------------------------------------
// var arr = [10,20,30,40];

// arr[10] = 100;
// console.log(arr.length); // Output: 11


// var a = [10,30,20,40 ,343,43,34,43,365];
// var b = ['ram', 'shyam', 'hari', 'sita', 'gita'];
// a.sort();
// console.log(a); // Output: [10, 20, 30, 40]


// a.slice();
// console.log(a); // Output: [10, 20, 30, 40]

// concatArray = a.concat(b);
// console.log(concatArray); // Output: [10, 20, 30, 40, 'ram', 'shyam', 'hari', 'sita', 'gita']

// a.includes(20);
// console.log(a.includes(999)); // Output: true

// let user = a.indexOf(20);
// console.log(user); // Output: 1


// let name = ['ram', 'shyam', 'hari', 'sita', 'gita'];
// let enrol = [34,34,54,24,45,86,35]

// let user = name.indexOf('hari');
// console.log(user); // Output: 2


// let user1 =  name.join(' ');
// console.log(user1); 


// var a =[1,2,3,4,5,6,7,8,657,45,43,53,43,3468,23]


// a.sort((a,b)=> a-b)
// console.log(a); 


// var arr = [55,88,22,11]

// arr.push(77)

// arr.unshift(66)
// arr.unshift(33)

// arr.push(88)
// arr.shift(33)

// arr.reverse()
// arr.sort((a,b)=> a-b)

// arr.reverse()
// console.log(arr[1]);
// console.log(arr[1]+arr.length-2);




// var arr = [10,20,30,40]

// for (let a = 0; a < arr.length; a++){
    // console.log([a]);
// }

// for (a of arr){
//     console.log(a);
// }

// var arr = []

// for (let a = 0; a < 10; a++){
//     arr.push(a)
//     // arr.unshift(a)
// }
// console.log(arr);


// var arr = []

// for (let a = 0; a < 10; a++){
//     if (a % 2 == 0){
//     arr.push(a)
//     }
// }
// console.log(arr);


// var str = 'engg devendra solanki '

// var arr = str.split(' ')

// var brr = arr[1].split('')
// brr.reverse()
// var str3 = brr.join('')

// var str2  = arr.join(' ')
// console.log(str2)


// var arr= [ 12,32,43,54]
// var arr2 = arr

// arr2.push(100)

// console.log(arr2)
// console.log(arr)

// var arr = [10,20,30,40];
 // var arr2 = [arr[0],arr[1],arr[2],arr[3]];
// var arr2 = [...arr];

// arr.push(100);
// console.log(arr2);
// console.log(arr);


// Foreach loop

//forEach  - iteration 
//map - trancform ,length same rahegi , har element add hoga 
// filter - filteration ,select ,lenght chamge 
// reduce - reduce


// var arr = [10,20,30,40];

// arr.forEach(function(elm){
//     console.log(elm);
// });


// var arr = [10,20,30,40];

// arr.forEach(function(elm,idx){
//     console.log(idx,elm);
// });


// var arr = [10,20,30,40];

// var sum = 0
// arr.forEach(function(elm){
//     sum += elm
// });
// console.log(sum);

// var arr = [10,20,30,40];

// var arr2 = arr.map(function(elm){
//     return elm * 2
// });
// console.log(arr2);




// var user = ['ram ', 'shyam', 'hari', 'sita', 'gita'];

// var newuser = user.map(function(elm){
//     return elm +'sharma'
// });
// console.log(newuser);


// var user = ['ram ', 'shyam', 'hari', 'sita', 'gita'];

// var newuser = user.map(function(elm){
//     return elm +'sharma'
// });
// console.log(newuser);

// var name = ['ram','shyam','jau']

// var newname = name.map(function(elem){
//     return elem +'sharma'
// })
// console.log(newname)


// var arr = [11,12,33,44,55]

// var arr2 = arr.map(function(elem){
//     if(elem % 2 == 0){
//         return elem
//     }else{
//         return elem +1
//     }
// })
// console.log(arr2);

// var usr = ['ram ','deven','bar']
// var user2 = usr.map(function(elem){
//     return elem.toUpperCase()
// })
// console.log(user2);

// var name = [12,43,54,86,42,65,24]
// var user = name.map(function(elem){
//     return elem>50
// })
// console.log(user)

// let nums = [1,2,3,4,5,6]
// let evens = nums.filter(n=> n%2 ==0)
// console.log(evens)


// var arr = [12,32,-3,34,-6]

// var arr2 = arr.filter(function(elem){
//     return elem>0
// })
// console.log(arr2)

// var name = ['ram','devendra','harsh','engo']

// var user = name.filter(function(elem){
//     return elem.includes('a')
// })
// console.log(user)


// var name = ['ram','devendra','harsh','engo']

// var user = name.filter(function(elem){
//     return elem.startsWith('h')
// })
// console.log(user)

// var filterarray = [ 5,9,2,4,33,8]
// var newfilterarray = filterarray.filter(function(array_value){
//     return array_value >=9
// })
// console.log(newfilterarray)


// var arr = [60, 10,90,80]

// var max = arr.reduce(function(acc,val){
//     if(val>acc){
//         return val
//     }return acc
// },0)
// console.log(max);


// var arr = [ 'apple','banana','mango','apple','banana','apple']

// var abc = arr.reduce((acc,val)=>{
//     acc[val] = (acc[val] || 0) +1;

//     return acc
// },{})

// console.log(abc);


// var arr = [10,20,30,40]

// var ans = arr.reduce(function(acc,val){
//     return acc +val
// },0)
// console.log(ans)


// var arr = [100,20,30,10]

// var ans = arr.reduce(function(acc,val){
//     if(val>acc){
//         return val
//     }
//     return acc
// },0)
// console.log(ans)


// var name = ['deven','ram','krish',]

// var user = name.find(function(elem){
//     return elem =='ram'
// })
// console.log(user)


// var name = [16,30,33,54,65]

// var user = name.findIndex(a=>a%10==0)
// console.log(user)

// var name = ['ram','envendra','call','engo']

// var ans = name.find(a=>a.includes('e'))
// console.log(ans)



// var name = ['ram','vndvndra','call','fengo']

// var ans = name.some(a=>a.includes('z'))
// console.log(ans)

// var name = ['ram','vndvndra','call','faengo']

// var ans = name.every(a=>a.includes('a'))
// console.log(ans)


// function introduce() {
//   console.log(this.name);
// }

// const person = { name: "Rahul" };

// const fn = introduce.bind(person);
// fn();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// console.log(typeof Person);


// "use strict";

// function show() {
//   console.log(this);
// }

// show();


// callback(error, data);



// setTimeout(() => {
//     console.log("Hello");
// }, 0);

// console.log("World");


// function greet(name) {
//     console.log("Hello " + name);
// }

// function welcome(callback) {
//     callback("Aman");
// }

// welcome(greet);


// console.log("Start");

// setTimeout(() => {
//     console.log("Hello");
// }, 1000);

// console.log("End");



function calculateElectricityBill(unit) {
    let bill = 0.0;

    if (unit <= 100) {
        bill = unit * 4.2;
    } else if (unit <= 200) {
        bill = unit * 6.0;
    } else if (unit <= 400) {
        bill = unit * 8.0;
    } else {
        bill = unit * 13.0;
    }

    return parseFloat(bill.toFixed(1));
}

module.exports = { calculateElectricityBill };
console.log(calculateElectricityBill)