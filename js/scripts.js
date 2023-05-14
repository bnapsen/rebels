// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    setGreetingMessage();
});

function setGreetingMessage() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greetingMessage;

    if (hours >= 5 && hours < 12) {
        greetingMessage = 'Good morning!';
    } else if (hours >= 12 && hours < 18) {
        greetingMessage = 'Good afternoon!';
    } else if (hours >= 18 || hours < 5) {
        greetingMessage = 'Good evening!';
    }

    const greetingElement = document.createElement('p');
    greetingElement.textContent = greetingMessage;

    const welcomeSection = document.querySelector('main > section');
    welcomeSection.appendChild(greetingElement);
}