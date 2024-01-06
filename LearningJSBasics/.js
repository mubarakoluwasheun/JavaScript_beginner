let featuredPosts = [
	"Check out my Netflix clone",
	"Here's tyhe code for my projects",
	"I've just relaunched a portfolio"
]

let experience = ["A Biomedical Engineering student",
	"An IT student at UITH",
	"A software developer student at alx software Engineering school",
]

console.log(experience[0])
console.log(experience[1])
console.log(experience[2])


let mySelf = ["Mubarak Oluwasheun",
	22,
	true
]


let cards= [7, 4]
cards.push(6)
console.log(cards)


let messages = [
	"Hey, how's it going?",
	"I'm great, thanks you! How about you?",
	"All good, Been working on my portfolio lately."
]

let newMessage = "same here!"
messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)


/* Returning values in functions */

let player1Time = 102
let player2Time = 107

/* ctrl-d */
function getFastestRaceTime() {
	if (player1Time < player2Time) {
		return player1Time
	} else if (player2Time < player1Time) {
		return player2Time
	} else {
		return player1Time
	}
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function totalRaceTime() {
	let totalRace = player1Time + player2Time
	return totalRace
}

let totalTime = totalRaceTime()
console.log(totalTime)


/* Generating Random Numbers

let randomNumber = Math.random()

console.log(randomNumber)

*/

/*
What does Math.Random() do?

Answer: It generates a random number between 0 and 1 (1 excluded)
*/

/*
Math.Random * 6 gives ranges from 0 - 5.99
*/

let flooredNUmber = Math.floor(3.45632)
console.log(flooredNumber)

/*
What does Math.floor() do to positive number?

Answer: It removes the decimals
*/

/*
Returns numbers between ranges 0 - 5
*/

function rollDice() {
	let randomNumber = Math.floor(Math.Random() * 6) + 1
	return randomNumber
}

console.log(rollDice())


/* Logical Operators */

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true) {
	if (givesCertificate === true) {
		generateCertificate()
	}
}

function generateCertificate() {
	console.log("Generate certificate...")
}

let hasSolvedChallenge = false
let hasHintLeft = false

if (hasSolvedChallenge === false && hasHintLeft ===false) {
	showSolution()
}

function showSolution() {
	console.log("Showing the solution...")
}

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
	recommendedMovie()
}

function recommendedMovie() {
	console.log("Hey, check out this new film we think you like it!")


/* Intro to objects */

let airbnb = {
	title = ""
	boolean = true
	string = ""
	number = 1
	array = []
}

console.log(airbnb.boolean)
console.log(airbnb.string)


/* Objects and Functions practice*/
let person = {
	name: Mubarak Oluwasheun,
	age: 22,
	country: "Nigeria"
}

function logData() {
	console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


/* if else condition practice*/

let age = 15

if (age < 6) {
	console.log("free")
} else if (age < 18) {
	console.log("child discount")
} else if (age < 27) {
	console.log("student discount")
} else if (age < 67) {
	console.log("full price")
} else {
	console.log("senor citizen discount")
}


/* loops and arrays practice */

let largeCountries = {"China","India","USA","Indonesia","Pakistan"}

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
	console.log(" -" + largeCountries[i])
}


/* push, pop, unshift, shift challenge */

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries.push("china")
largeCountries.push("Pakistan")
