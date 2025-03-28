"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Gabriel Lordi-Vado
      Date:       2/27/2025 

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

document.getElementById("addButton").onclick = function() {
	customers.push(customerName.value);
	generateCustomerList();
	document.getElementById("status").textContent = customerName.value + " added to the end of the queue";
}

document.getElementById("searchButton").onclick = function() {
	let place = customers.indexOf(customerName.value) + 1;
	
	if (place === 0) {
		document.getElementById("status").textContent = customerName.value + " is not found in queue";
	} else {
		document.getElementById("status").textContent = customerName.value + " found in position " + (place + 1) + " of the queue";
	}
}

document.getElementById("removeButton").onclick = function() {
	let index = customers.indexOf(customerName.value);
	
	if (index !== -1) {
		customers.splice(index, 1);
		document.getElementById("status").textContent = customerName.value + " removed from queue";
		generateCustomerList();
	} else {
		document.getElementById("status").textContent = customerName.value + " is not found in the queue";
	}
}

document.getElementById("topButton").onclick = function() {
	let topCustomer = customers.shift();
	document.getElementById("status").textContent = topCustomer + " was removed from queue";
	generateCustomerList();
}