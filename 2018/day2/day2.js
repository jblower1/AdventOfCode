const a = (input) => {
    let hasDouble = input.map((element) => {
        //each element converts the string to an array for counting
        let letters = element.split("")
        return countRepeatedLetters(letters, 2)
    })
    let hasTriple = input.map((element) => {
        let letters = element.split("")
        return countRepeatedLetters(letters, 3)
    })

    const doubleCount =  hasDouble.reduce((acc,isDoubled) => isDoubled ? acc + 1 : acc)
    const tripleCount = hasTriple.reduce((acc, isTripled) => isTripled ? acc + 1 : acc)
    return doubleCount * tripleCount
}

const countRepeatedLetters = (letters, maxRepeats) => {
    const letterCounts = {}
    letters.forEach((letter)=> {
        if(letterCounts[letter]){
            letterCounts[letter]++
        }else{
            letterCounts[letter] = 1
        } 
    })
    let aLetterCounts = Object.entries(letterCounts)
    for(let i=0; i<aLetterCounts.length; i++){
        if(aLetterCounts[i][1] === maxRepeats){
            return true
        }
    }
    return false
}

const b = (input) => {
    for(let k=0; k<input.length; k++){
        for(let i=0; i<input.length; i++){
            let matchedLetters = []
            let inputLetters = input[k].split("")
            let comparisonLetters = input[i].split("")
            for(let j=0; j<inputLetters.length; j++){
                if(inputLetters[j] === comparisonLetters[j]){
                    matchedLetters.push(inputLetters[j])
                }
            }
            if(matchedLetters.length === (inputLetters.length - 1)){
                return matchedLetters.join("")     
            }
        }
    }

}

module.exports = {a, b }
