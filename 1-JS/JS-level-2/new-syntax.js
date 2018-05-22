"use strict"

//-------------------------------------------
// obj-literal enhancements
//-------------------------------------------
// var name = "Nag";
// var age = 34;
// var dynamicAddressType = "office"; // home | office | vacation
// //ES5
// var person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         ///
//     },
//     'home-address': 'chennai'
// };
// //ES6
// var person2 = {
//     name,
//     age,
//     sayName() {
//         //..
//     },
//     [dynamicAddressType + '-address']: 'chennai',
//     [1 + 2 + 2]: 'five',
//     'say Name'() {
//         console.log('say Name()');
//     }
// };
// person2['say Name']()
//-------------------------------------------


//-------------------------------------------
// de-structuring  ( extracting elements/props from array/object to variables)
//-------------------------------------------

// A. Array

// let nums = [1, 2, 3, 4, 5, [6, 7]];

// manual
// let n1 = nums[0];
// let n2 = nums[1]

// or
// let [n1, n2, n3 = 30, , n5, [n6, n7]] = nums;

// B. Object

// let person = {
//     name: 'Nag',
//     age: 34
// }

// // // manual
// // let myName=person.name;
// // let myAge=person.age;

// // or

// let { name: myName, age: myAge } = person;
// // let { name: name, age: age } = person;
// // or
// let { name, age } = person;


//-------------------------------------------
// spread operator
//-------------------------------------------

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c)
// }

// let nums = [10, 20, 30];
// // func(nums[0], nums[1], nums[2]);
// // or
// func(...nums); // spreading


// let arr1 = [1, 2, 3]
// let arr2 = [7, 8, 9]
// let newArr = [...arr1, 4, 5, 6, ...arr2];


//-------------------------------------------
// Arrow-function
//-------------------------------------------

// let getPrice = function () {
//     return 100 + 200;
// }

// syntax

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = (count) => {
//     return count * (100 + 200);
// }

// let getPrice = count => {
//     return count * (100 + 200);
// }

// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }

// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cos + tax
//     return total;
// };

//-------------------------------------------
/*
    why/where we need arrow-function ?

    1. for compact function-arg
    2. to capture 'this'

*/
//-------------------------------------------

// 1. for compact function-arg

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort(function (a, b) { return a - b });
// // or
// nums.sort((a, b) => a - b);

//-------------------------------------------

// 2. to capture 'this'

// let trainer = {
//     name: 'nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }
//         console.log('teaching end..');
//         return askQues;
//     }
// };

// let askQues = trainer.doTeach();
// // askQues.call(trainer, 'Q1')
// askQues('Q1')

// let newTnr = { name: 'Praveen' }
// // askQues.call(newTnr, 'Q2')
// askQues('Q2');

//-------------------------------------------

// Quiz

// function func() {
//     console.log(this);
// }
// func();

// let arrowFunc = () => {
//     console.log(this);
// }
// arrowFunc();

//--------------------------------------------------

// let inv={
//     num:123,
//     process:function(){
//         console.log('INV-'+this.num+" processed");
//     }
// }

// let inv = {
//     num: 123,
//     process: () => {
//         console.log('INV-' + this.num + " processed");
//     }
// }

// let inv={
//     num:123,
//     process:function(){
//         console.log('INV-'+this.num+" processed partially");
//         let complete=function(){
//             console.log('INV-'+this.num+" processed partcompletlyially");
//         }
//         return complete;
//     }
// }

// let inv = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " processed partially");
//         let complete = () => {
//             console.log('INV-' + this.num + " processed partcompletlyially");
//         }
//         return complete;
//     }
// }

// let complete = inv.process();
// complete();


//-------------------------------------------

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // let self=this;
//     // let incAge = function () {
//     //     self.age++;
//     //     console.log(self.name + "->" + self.age);
//     // }
//     // setInterval(incAge, 1000);

//     // or

//     let incAge = () => {
//         this.age++;
//         console.log(this.name + "->" + this.age);
//     }
//     setInterval(incAge, 1000);
// }

// new Person('Ria', 3);

//---------------------------------------------------

