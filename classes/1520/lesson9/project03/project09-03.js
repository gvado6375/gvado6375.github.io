"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Gabriel Lordi-Vado
      Date:   3/11/2025

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

if (localStorage.sbloggerVisit != null) {
	
	let storedLastDate = localStorage.getItem("sbloggerVisit");
	lastVisitDate.textContent = storedLastDate;
	let lastDate = new Date(storedLastDate);
	console.log(lastDate, "a");
	
	for (let item of articleDates) {
		let articleDate = new Date(item.textContent);
		console.log(articleDate, "b");
		if (articleDate > lastDate) {
			item.innerHTML += "<strong>new</strong>"; 
		}
	}
	
} else {
	
	lastVisitDate.textContent = "Welcome to SBlogger!";
	for (let item of articleDates) {
		item.innerHTML += "<strong>new</strong>"; 
	}		
	
}

let currentDate = new Date("9/12/2024");
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
