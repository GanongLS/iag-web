// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('body').onclick = function () {
// 	alert('Ouch! Stop poking me!');
// };

let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === './images/iag-itb.png') {
		myImage.setAttribute('src', './images/530.jpeg');
	} else {
		myImage.setAttribute('src', './images/iag-itb.png');
	}
};

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Selamat Datang di Web IAG, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Selamat Datang di Web IAG, ' + storedName;
}

myButton.onclick = function () {
	setUserName();
};
