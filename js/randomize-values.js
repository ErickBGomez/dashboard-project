// Target for random numbers
const viewCounts = document.querySelectorAll(".view-count");
const trendingPostsCounts = document.querySelectorAll(".trending-posts-count");
const graphValuesElements = document.querySelectorAll(".graph-bar-value");
const graphBars = document.querySelectorAll(".graph-bar");
const notificationCount = document.querySelector(".notification-count");

// Target for random strings from JSON files
const nameElement = document.querySelector(".name");
const surnameElement = document.querySelector(".surname");

// Random number between two values (both inclusive)
function getRandomNumberRange(minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

function setRandomGraphBarValues() {
    // Array to save graph values
    const graphValuesArray = [];

    for(let i = 0; i < graphBars.length; i++) {
        graphValuesArray.push(getRandomNumberRange(0, 100));
    
        graphValuesElements[i].innerText = graphValuesArray[i];
        graphBars[i].style.height = `${graphValuesArray[i]}%`;
    }
}

function setRandomNotificationCount() {
    let newNotificationValue = getRandomNumberRange(0, 12).toString();

    if (newNotificationValue == 0) {
        notificationCount.style.visibility = "hidden";
    } else if (newNotificationValue > 9) {
        newNotificationValue = "9+";
    }
    
    notificationCount.innerText = newNotificationValue;
}

function setRandomValuesToArray(array, minValue, maxValue, prefixString = "") {
    array.forEach(element => {
        element.innerText = getRandomNumberRange(minValue, maxValue) + prefixString;
    });
}

// Get JSON file and apply to the specified element
async function setRandomStringFromJSON(element, jsonFileName) {
    const url = `json/${jsonFileName}.json`;

    const response = await fetch(url);
    const data = await response.json();

    const randomIndex = getRandomNumberRange(0, data.length - 1);
    element.innerText = data[randomIndex];
}

function setNickname() {
    console.log("test")
}

// Invoking functions:
// Random numbers
setRandomGraphBarValues();
setRandomNotificationCount();
setRandomValuesToArray(viewCounts, 1, 999, "K");
setRandomValuesToArray(trendingPostsCounts, 1, 999, "K");

// Random strings
setRandomStringFromJSON(nameElement, "names");
setRandomStringFromJSON(surnameElement, "surnames")
.then(setNickname);