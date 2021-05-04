// // // primitive - 1 // passed by value
// // // Number
// // // String
// // // Boolean
// // // Symbol
// // // null
// // // undefined

// // // let x = 10;
// // // let y = x;
// // // x = 25
// // // console.log(x,y)

// // // // non primitive - 2 // passed by reference
// // // // object
// // // // function - object
// // // // array - object

// // // let myName = { firstName: "maninder"}
// // // let newName = myName
// // // myName.firstName="Rahul"
// // // newName.lastName="Bawa"

// // // console.log(myName, newName)

// // // delete myName.firstName;

// // // console.log(myName, newName)

// // let myarray = [1,2,3];

// // let newArray = myarray

// // newArray.push(1)

// // console.log(myarray, newArray)


// // function changeArray(someArray, abc) {
// //     someArray.push('hahahaha')
// //     abc = 57;
// //     console.log(someArray, abc)
// // }

// // let xyz = 12;

// // changeArray(myarray, xyz)

// // console.log(myarray, xyz)

// // let anotherArray = [1,2,3,4,5]

// // let myNewArray = myarray.concat(anotherArray)

// // console.log(myNewArray)

// // myNewArray.splice(4, 0, 6666)

// // myNewArray.

// // console.log(myNewArray)

// let newArray = [1,2,3,4,5]


// //// functions are called first class citizen in JavaScript


// function ParentFunc(myParam){
//     // scope of this param is within this function 
//     // this will be whatever is passed as argument to this func
//    let output = someFunction()
//    console.log('Some thing came out from func', output)
// }

// function MyFunc(){
//     return 'Hello'
// }

// function AnotherFunc () {
//     return 'Yello'
// }

// ParentFunc(MyFunc)

// // assign a function to any variable
// // pass a function to any function
// // reutrn a function from any function
// // anonymus function
// // callback function

// // let modifiedArray = newArray.map(function(item){
// //     console.log('map running for item', item)
// //     let newItem = item * 2 + 1 - 5;
// //     // any logic
// //     return newItem
// // })
// // // loop over every element of array and return back a new array

// // console.log(modifiedArray)


// function sum(a, b, anotherFunc) {
//     console.log(anotherFunc(), a + b)
// }

// function saySomething() {
//     return "Sum is "
// }

// sum(1, 3, saySomething)
// sum(2,4)

// function createChat(){
//     //create chat
// }

// function createJuice() {
//     // create juice
// }

// function bringFruits(person, postFunction){
//     // get some fruits
//     // after fruits are there
//     // execute the postFunction 
//     postFunction()
// }

// if (yash is available) {
//     bringFruits('yash', createChat)
// } else {
//     bringFruits('prashant', createJuice)
// }

// // traeting functions as variables

// console.log('task 1')

// setTimeout(function(){
//     console.log('task 3')
// }, 2000)


// console.log('task 2')

function SecondFunc() {
    console.log('Second Func')
}

function FirstFunc(){

    return SecondFunc
}

let returnedFunc = FirstFunc() 

returnedFunc()
// FirstFunc()() 