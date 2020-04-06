var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/petrovclass.png') {
		myImage.setAttribute('src','images/petrovclass2.png');
	} else {
		myImage.setAttribute('src','images/petrovclass.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Мы рады приветствовать Вас\nв нашей музыкальной онлайн-мастерской!\nПредставьтесь, пожалуйста.', 'Ваше имя');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Здравствуйте, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Здравствуйте, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
