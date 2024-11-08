/*
Name: Gabriel Lordi-Vado
Date: 11/7/2024
File Name: script.js
*/

//Function for displaying hamburger nav
function hamburger() {
	var mobileNav = document.getElementById("hamburger-display");
	var menuStyle = document.getElementById("padding-change");
	
	if (mobileNav.style.display === "none") {
		mobileNav.style.display = "block";
		menuStyle.style.padding = "0";
	} else {
		mobileNav.style.display = "none";
		menuStyle.style.padding = "1.75em";
	}
}