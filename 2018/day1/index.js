//test runner for AOC solutions
//

const 
    solver = './day' + (process.env.DAY || 1),
    input = solver + '.input'

   
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
