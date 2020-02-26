const a = (input) => input.map(Number).reduce((acc, element) => acc + element, 0)



const b = (input) => {
   var numberInput = input.map(Number)
    var frequencies = []
    var frequency = 0
    var found = false

    let i = 0, counter = 0;
    while(!found){
        frequency += numberInput[i]
        if(frequencies.indexOf(frequency) > -1){
            found = true
        }else{
            frequencies.push(frequency)
        }
        //we go round modulo times until we find a duplicate
        i = (i + 1) % numberInput.length
        counter++
    }
    console.log(counter)
    return frequency
}

module.exports = {a, b }
