"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Gabriel Lordi-Vado
    Date:   3/17/2025

    Filename: project10-04.js
*/


// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

window.alert("The textbook says to assign the variable movingPiece with the value of a document element with the same id, but in the document an element with that id doesn't exist, so the program won't function.");

for (let dragitems of pieces) {
	dragitems.draggable = true;
	dragitems.ondragstart = function(e) {
		e.dataTransfer.setData("text", dragitems.id);
	}
}

for (let items of boardSquares) {
	items.ondragover = function(e) {
		e.preventDefault();
	}
	
	items.ondrop = function(e) {
		e.preventDefault();
		let pieceID = e.dataTransfer.getData("text");
		let movingPiece = document.getElementById("movingPiece");
		if (e.target.tagName === "TD") {
			e.target.appendChild(movingPiece);
		} else if (e.target.tagName === "SPAN") {
			let occupyingPiece = e.target;
			let square = occupyingPiece.parentElement;
			square.appendChild(movingPiece);
			if (occupyingPiece.className === "white") {
				whiteBox.appendChild(occupyingPiece);
			} else {
				blackBox.appendChild(occupyingPiece);
			}
		}
	}
}