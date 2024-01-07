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
localStorage.setItem("myCredits", "100")
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)

// addEventlistener and object array
let data = [
    {
        player: "jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

let janeBtn = document.getElementById("jane-btn")

janeBtn.addEventListener("click", function() {
    console.log(data[0].score)
})

// Generate sentence
function generateSentence(desc, arr) {
    let inputStr = `The ${arr.length} ${desc} are`
    const lstStr = arr.length - 1
    for(let i = 0; i < arr.length; i++) {
        if (i === lstStr) {
            inputStr += arr[i]
        } else {
            inputStr += arr[i] + ", "
        } 
    }
    return inputStr
}

const sentence = generateSentence("highest moutains", ["Mount Everest", "K2"])
console.log(sentence)

// render images
const imgs = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += 'img alt="Employee in the company" class="team-img" src="${imgs[i]}">'
    }
    container.innerHTML = imgsDOM
}

renderImages()