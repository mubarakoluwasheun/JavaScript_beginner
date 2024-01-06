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
m,]


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


/* Push, pop, shift and unshift */
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
	console.log("- ", + largeCountries[i])
}


let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")

console.log(largeCountries)


/* Logical Operators */
let dayOfMonth = 31
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
	console.log("spookyface")
}


/* Rock, paper scissors */
let hands = ["rock", "paper", "scissors"]

function randItem() {
	let randIndex = Math.floor(Math.random() * hands.length)
	let randStr = hands[randIndex]
	return randStr
}

console.log(randItem())


/* Sorting Fruits */
let fruit = ["apple","orange","apple","apple","orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sort() {
	for (let i = 0; i < fruit.length; i++) {
		if (fruit[i] === "apple") {
			appleShelf.textContent += "apple"
		} else {
			orangeShelf.textContent += "oranges"
		}
	}
}

/* Const and let */

/** const = not re-assigning
  * let = reassigning
  */

// Which variables below should be changed from let to const?

// The customer wants to order some stuffs. Here are the details:
let basePrince = 520 to const
let discount = 120 to const
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// calculating the full ptice
let fullPrice = basePrice - discount + shippingCost to const

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


/* Template strings/literals */
const recipient = "James"
const sender = "Mag"
const email = `Hey ${recipient}: How is it going? Cheers ${sender}`

console.log(email)

let myLeads = `["www.awesomelead.com"]`

// Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// Push a new value to the array
myLeads.push(www.lead2.com)
// Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// Console.log the string using typeof to verify that it's a string
console.log(typeof)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("el-el")

// Truthy and Falsy
// false, null, 0, "", undefined, NAN
const credits = 0

if (credits) {
	console.log("let's play")
} else {
	console.log("Sorry, you have no credits")
}


//Guess the expression-truthy or falsy
console.log(Boolean("")) // false
console.log(Boolean("0")) // true
console.log(Boolean(100)) // true
console.log(Boolean(null)) // false
console.log(Boolean([0])) // true
console.log(Boolean(-0)) // false

// function parameter
const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
	welcomeEl.textContent = `${greeting}, ${name}, ${emoji}`
}

greetUser("Hey", "Mag", ")>")

// Numbers as function parameters
function add(a, b) {
	return a + b
}

// Arguments vs Parameters
// Parameters are inside a function
function greetUser(greetings, name) {
	welcomeEl.textContent = `${greetings}, ${name}`
}

// arguments are outside a function
let hi = "Howdy"
greetUser(hi, "james")

function add (a, b) {
	return a + b
}
add (1, 3)

function getFirst(arr) {
	return arr[0]
}

let first = getFirst([1, 2, "hi"])
console.log(first)