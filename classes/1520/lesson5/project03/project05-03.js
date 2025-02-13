"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Gabriel Lordi-Vado
      Date:   2/12/2025

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const HEADING = "H2";

for (let n = sourceDoc.firstChild; n != null; n = n.nextSibling) {
	if (n.nodeName === HEADING) {
		let anchor = document.createElement("a");
		anchor.name = "doclink" + headingCount;
		n.insertBefore(anchor, n.firstChild);
		let listItem = document.createElement("li")
		let link = document.createElement("a");
		listItem.appendChild(link);
		link.textContent = n.textContent;
		// Is the book actively misleading now or is it to teach debugging more? I did what it said and it wouldnt work, had to change it myself. ↓↓↓
		link.href = "#doclink" + headingCount;
		toc.appendChild(listItem);
		headingCount++;
	}
}