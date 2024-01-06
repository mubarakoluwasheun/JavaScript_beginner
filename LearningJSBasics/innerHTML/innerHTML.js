const innerH = document.getElementById("container")

// rendering a buy button
innerH.innerHTML = "<button onclick='buy()'>Buy!></button>"

function buy() {
    innerH.innerHTML += "<p>Thank you for buying!</p>"
}

for (let i = 0; i < myLeads.length; i++) {
	// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
	// create element
	// set text content
	// append to ul
	const li = document.createElement("li")
	li.textContent = myLeads[i]
	ulEl.append(li)
}