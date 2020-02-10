let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/flying-eagle.jpg') {
        myImage.setAttribute('src', 'images/logo-html.jpeg');
    } else {
        myImage.setAttribute('src', 'images/flying-eagle.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name. ');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'WELCOME ,' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'WELCOME, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}