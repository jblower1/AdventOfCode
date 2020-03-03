//test runner for AOC solutions
//get arguments (2 onwards))
const args = process.argv.slice(2)

let dayNumber = args[0] || 1
let isTest = args[1] || false
const 
    solver = './day' + dayNumber + '/day' + dayNumber,
    input = isTest ? solver + '_test.input' : solver + '.input'

   
    //To clean the input generically
    clean = x => x
        .split(/\n/)                            //split lines on return
        .map(x => x.replace(/\r$/, ''))         //remove any carriage returns
        .filter(x => x.length),                  //drop any empty rows. x.lenght becomes a "truthy"
    
    // Load the day's solver (which shuld have 'a' and 'b'
    solve = require(solver)

require('fs').readFile(input, 'utf8', (err, data) => {
    const input = clean(data)

    //output solutions
    console.log(solve.a(input))
    console.log(solve.b(input))
})
