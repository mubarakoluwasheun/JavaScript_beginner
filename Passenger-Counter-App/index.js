let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let dash = " - "

function increment() {
	count += 1
	countEl.textContent = count
}

function save() {
	let countSave = count + dash
	saveEl.textContent += countSave
	console.log(count)
	countEl.textContent = 0
	count = 0
}