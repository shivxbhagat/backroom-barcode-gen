"use strict";

const generateBarcode = () => {
	let text = document.getElementById("text").value;
	if (text.trim().length === 0) {
		text = "999/999/999";
	}

	let numbers = text.split("/");

	if (
		text.length !== 11 ||
		numbers[0].length !== 3 ||
		numbers[1].length !== 3 ||
		numbers[2].length !== 3 ||
		isNaN(numbers[0]) ||
		isNaN(numbers[1]) ||
		isNaN(numbers[2]) ||
		numbers[2] !== "999"
	) {
		alert("Please enter a valid backroom bin number. (XXX/XXX/999)");
		clearAll();
		return;
	}

	let convertedText =
		"A" + numbers[0] + "R" + numbers[1] + "S" + numbers[2] + "00100";
	JsBarcode("#barcode", convertedText, {
		format: "CODE128",
		lineColor: "#000",
		width: 2,
		height: 100,
		displayValue: true,
		text: text,
	});

	// document.getElementById("text").value = "";
};

const clearAll = () => {
	document.getElementById("text").value = "";
	document.getElementById("barcode").innerHTML = "";
};

document.getElementById("btn").addEventListener("click", generateBarcode);

//enter button and return button
const input = document.querySelector("#text");
input.addEventListener("keyup", (event) => {
	if (event.keyCode === 13) {
		generateBarcode();
	}
});

//iphone done button from virtual keyboard
input.addEventListener("focusout", (event) => {
	generateBarcode();
	event.preventDefault();
});
