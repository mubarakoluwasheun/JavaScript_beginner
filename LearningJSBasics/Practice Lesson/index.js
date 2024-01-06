// lesson 1 let & const
// Setting the stage
const player = "Mag"
const opponent = "mubby"
const game = "AmazingFighter"
let points = 0
let hasWon = false

//PLAYING THE GAME
points = 100
hasWon = true

//ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}


//lesson 2 log out items in an array
let myCourses = ["Learn CSS Animatons", "UI Design Fundamentals", "Intro to Clean Code"]

function logArr(arr) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i])
}

logArr(myCourses)

// lesson 3 Save to localStorage