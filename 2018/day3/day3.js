const a = (input) => {
    let fabric = [], fabric_x = []
    let rectangles = input.map(line => {return {
            "id": getID(line), 
            "x": Number(getCoordinates(line)[0]), 
            "y": Number(getCoordinates(line)[1]), 
            "width": Number(getDimensions(line)[0]), 
            "height": Number(getDimensions(line)[1])
        }
    })

    console.log(rectangles)
    let count = 0
    rectangles.forEach(rectangle => {
        count++
        for(let i=rectangle.y; i<(rectangle.y + rectangle.height); i++){
            fabric_x = []
            for(let j=rectangle.x; j<(rectangle.x + rectangle.width); j++){
                if(!fabric[i]){ 
                    fabric_x[j] = rectangle.id 
                    fabric[i] = fabric_x   
                }
                else if(fabric[i] && !fabric[i][j]) fabric[i][j] = rectangle.id     
                else fabric[i][j] = "X"
            }
        } 
    })
    return fabric.reduce((acc, line) => {
        return acc + line.reduce((lineAcc, element) =>  element === "X" ? lineAcc+1 : lineAcc, 0)
    }, 0)
}

const getID = rectangle => {
    let start = rectangle.lastIndexOf("#") + 1
    let finish = rectangle.indexOf(" ")
    return rectangle.substr(start, finish-start)
}
const getCoordinates = rectangle => {
    let start = rectangle.lastIndexOf("@") + 2
    let finish =  rectangle.lastIndexOf(":")
    return rectangle.substr(start, finish-start).split(",")
}

const getDimensions = rectangle => {
    let start = rectangle.lastIndexOf(":") + 2
    let finish =  rectangle.length - 1
    return rectangle.substr(start).split("x")
}
const b = (input) => {

}

module.exports = {a, b }
