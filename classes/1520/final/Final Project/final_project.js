"use strict";
/*
	Final Project
	Author: Gabriel Lordi-Vado
	Date: 4/2/2025
	File Name: final_project.html
*/

// Get the two radio button elements.

let sameAddress = document.getElementById("sameAddress");
let difAddress = document.getElementById("difAddress");

// Get the necessary account info fields.

let infoStreet = document.getElementById("streetAdr");
let infoCity =	document.getElementById("city");
let infoState = document.getElementById("state");
let infoZip = document.getElementById("zip");

// Get the shipping info fields.

let shipStreet = document.getElementById("shipAdr");
let shipCity = document.getElementById("shipCity");
let shipState = document.getElementById("shipState");
let shipZip = document.getElementById("shipZip");

// Add event listeners for the radio buttons.

sameAddress.addEventListener("click", accAddressToShip);
difAddress.addEventListener("click", clearShipAdress);

// Adds values from account info to shipping info.

function accAddressToShip() {
	
	if (sameAddress.checked) {
		
		shipStreet.value = infoStreet.value;
		shipCity.value = infoCity.value;
		shipState.value = infoState.value;
		shipZip.value = infoZip.value;
	}
	
}

// Removes values from account info in shipping info.

function clearShipAdress() {
	
	if (difAddress.checked) {
		
		shipStreet.value = "";
		shipCity.value = "";
		shipState.value = "";
		shipZip.value = "";
		
	}
	
}

/* ---------------- End of Address Transfer Script ---------------- */

// Get checkbox elements from the cookies fieldset.

let tmCheckbox = document.getElementById("thinMints");
let doSiCheckbox = document.getElementById("doSi");
let lcCheckbox = document.getElementById("lemonCremes");
let sdCheckbox = document.getElementById("sandDollars");
let ccCheckbox = document.getElementById("chocoChip");

// Get quantity data from cookies fieldset.

let tmAmount = document.getElementById("tmAmount");
let doSiAmount = document.getElementById("doSiAmount");
let lcAmount = document.getElementById("lcAmount");
let sdAmount = document.getElementById("sdAmount");
let ccAmount = document.getElementById("ccAmount");
let cookies = [tmAmount, doSiAmount, lcAmount, sdAmount, ccAmount];
let checkBox = [tmCheckbox, doSiCheckbox, lcCheckbox, sdCheckbox, ccCheckbox];

// Event listner that calculates order information.

let form = document.getElementById("cookieForm");
form.addEventListener("submit", function(e) {
	
	e.preventDefault();
	let completedOrder = false;
	let totalPrice = 0;
	let boxAmount = 0;
	let shipCost = 0;
	
	for (let box of cookies) {

		if (box.value > 0) {
			totalPrice += box.value * 3.50;
			// box.value refuses to return a number unless multiplied by 1?? 
			boxAmount += box.value * 1;
		}

	}
	
	if (boxAmount < 10) {
		shipCost = 0.05 * totalPrice;
	}
	
	// Stops calulation from showing in orderInfo if no cookies were selected.
	
	for (let checked of checkBox) {
		if (checked.checked) {
			completedOrder = true;
		}
	}
	
	if (completedOrder) {
		displayOrder(shipCost, totalPrice);
	} else {
		document.getElementById("orderInfo").innerHTML = "Please select a box of cookies!";
	}
});

// Function that displays order information.
// Very sloppy since loops wouldn't play nice for some reason.

function displayOrder(shipPrice, cookiePrice) {
	
	let orderInfo = document.getElementById("orderInfo");
	orderInfo.innerHTML = "Receipt: \n"
	
	if (tmCheckbox.checked && tmAmount.value > 0) {
		let tmFormat = tmAmount.value * 3.50;
		orderInfo.innerHTML += "\n" + tmAmount.value + " Thin Mints: \n";
		orderInfo.innerHTML += tmFormat.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	}
	
	if (doSiCheckbox.checked && doSiAmount.value > 0) {
		let doSiFormat = doSiAmount.value * 3.50;
		orderInfo.innerHTML += "\n" + doSiAmount.value + " Do Si Do's: \n";
		orderInfo.innerHTML += doSiFormat.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	}
	
	if (lcCheckbox.checked && lcAmount.value > 0) {
		let lcFormat = lcAmount.value * 3.50;
		orderInfo.innerHTML += "\n" + lcAmount.value + " Lemon Cremes: \n";
		orderInfo.innerHTML += lcFormat.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	}
	
	if (sdCheckbox.checked && sdAmount.value > 0) {
		let sdFormat = sdAmount.value * 3.50;
		orderInfo.innerHTML += "\n" + sdAmount.value + " Sand Dollars: \n";
		orderInfo.innerHTML += sdFormat.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	}
	
	if (ccCheckbox.checked && ccAmount.value > 0) {
		let ccFormat = ccAmount.value * 3.50;
		orderInfo.innerHTML += "\n" + ccAmount.value + " Chocolate Chip: \n";
		orderInfo.innerHTML += ccFormat.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	}
	
	let cookieFormat = cookiePrice.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
		
	let shipFormat = shipPrice.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
		
	let totalCookie = cookiePrice + shipPrice;
	
	
	
	orderInfo.innerHTML += "\n\nAmount: " + cookieFormat;
	orderInfo.innerHTML += "\nShipping: " + shipFormat;
	orderInfo.innerHTML += "\nTotal: " + totalCookie.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	
}