const fs = require('fs');

// plain javascript
// const hello = "Hello World"
// console.log(hello)



// fs.writeFileSync('./files/hello.txt', output + " my new output")

// template literals

// fs.appendFileSync('./files/hello.txt', `my new output string ''' ""  ${output}`)

// error first callbacks

// function(){}
// // fat arrow function
// () => {}


// callback hell problem

fs.readFile('./files/my.txt', 'utf-8', (err, output) => {

    // const fileName = 'hello'
    fs.readFile(`./files/${output}.txt`, 'utf-8', (err2, data) => {
        fs.readFile('./files/my2.txt', 'utf-8', (err3, data2) => {
            fs.writeFile('./files/output.txt', `${data} ${data2}`, (err, done) => {
                console.log('kaam ho gya')
            })
        })
    })
})


// //synchronous js
// const output = fs.readFileSync('./files/hello.txt', 'utf-8')
// console.log(output)

console.log('going to read a file')
