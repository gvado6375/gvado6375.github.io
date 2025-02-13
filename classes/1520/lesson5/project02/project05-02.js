"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Gabriel Lordi-Vado
      Date:   2/12/2025

      Filename: project05-02.js
*/

let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++) {
	images[i].onclick = function() {
		if (images[i].parentElement.id === "photo_bucket") {
			let newItem = document.createElement("li");
			photoList.appendChild(newItem);
			newItem.appendChild(images[i]);
		} else {
			// problem area here.
			let oldItem = images[i].parentElement;
			photoBucket.appendChild(images[i]);
			oldItem.parentElement.removeChild(oldItem);
			// Did what the book asked and it still wont work? Couldn't figure it out, unfortunately.
		}
	}
}