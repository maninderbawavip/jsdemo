
// // console.log(counter)

// // let counter = 5;

// function add(a,b){
//     return a+b;
// }

// console.log(add)

// // var x;
// // var abc;

// // console.log(abc)


// // abc = function(a,b){
// //     console.log('something')
// // }
// // x = 6;


// es6 --> ... Rest, Spread

// let arr = [1,2,3]

// // whatever is in spread it
// let newArr = [22, 444, ...arr, 12121, 2121]


// // console.log(...arr)
// console.log(newArr)

// also works with objects

// let props = { lastName: "Bawa", middleName: "Singh"}

// let Maninder = { firstName: "Maninder", ...props, lastName: "Something" } 
// let Rahul = { firstName: "Rahul", ...props } 
// // let Maninder = { firstName: "Maninder", ...name } 

// console.log(Maninder, Rahul)

// Rest -> ...

function sum(a,b, ...params){
    // console.log(params) // array of rest of the params
    // const newArr = []
    // params.forEach(function(element){
    //     console.log(element)
    //     newArr.push(element + 5)
    // })

    // console.log(newArr)

    // create a new array of same size by modifying the value of every element

    // const newArr = params.map(function(element){
    //     return element +5
    // })

    // console.log(newArr)
    
    // const filtered = params.filter(function(element) {

    //     // logic

    //     if(element > 5){
    //         return true
    //     } else {
    //         return false
    //     }

    //     // return true if you want to keep in array 
    //     // return false
    // })
    
    // console.log(filtered)

    const newSum =  params.reduce(function(sum, element){
        console.log(sum, element)
        // new value of your sum/accumulator
        return sum + element
    }, 0)

    try{
        console.log(newSum)
    } catch(err) {
        console.log(err)
    }
    


    // return params.reduce((acc, value) => {return acc+value}, a+b)
}
sum(1,2,3,4,5,6,7)