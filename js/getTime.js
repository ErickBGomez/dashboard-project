const morning = 6;
const afternoon = 12;
const evening = 17;
const night = 22;

const localHour = new Date().getHours();
const greetingsElement = document.querySelector(".greeting-time");

function setGreetingsText() {
    if (localHour >= morning && localHour < afternoon) {
        greetingsElement.innerText = "morning";
    } else if (localHour >= afternoon && localHour < evening) {
        greetingsElement.innerText = "afternoon";
    } else if (localHour >= evening && localHour < night) {
        greetingsElement.innerText = "evening";
    } else {
        greetingsElement.innerText = "night";
    }
}

setGreetingsText();