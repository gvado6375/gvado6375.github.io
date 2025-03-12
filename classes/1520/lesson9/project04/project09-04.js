"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Gabriel Lordi-Vado
      Date:   3/11/2025

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
	if (document.cookie != null) {
		bestText.textContent = getBestTime() + " seconds";
	}
});

function getBestTime() {
	if (document.cookie != null) {
		let cookieArray = document.cookie.split("=");
		return parseInt(cookieArray[1]);
	} else {
		return 9999;
	}
}

function updateRecord() {
	let solutionTime = parseInt(clockTimer.value);
	let bestTime = getBestTime();
	
	if (solutionTime < bestTime) {
		bestTime = solutionTime;
		bestText.textContent = bestTime + " seconds";
		document.cookie = "puzzle8Best=" + bestTime;
	}
}