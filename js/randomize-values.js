const viewCounts = document.querySelectorAll(".view-count");
const trendingPostsCounts = document.querySelectorAll(".trending-posts-count");
const graphValuesElements = document.querySelectorAll(".graph-bar-value");
const graphBars = document.querySelectorAll(".graph-bar");
const notificationCount = document.querySelector(".notification-count");

// Array to save graph values
const graphValuesArray = [7];

// Random number between two values (both inclusive)
function getRandomNumberRange(minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

function randomizeGraphBarValues() {
    for(let i = 0; i < 7; i++) {
        graphValuesArray[i] = getRandomNumberRange(0, 100);
    
        graphValuesElements[i].innerText = graphValuesArray[i];
        graphBars[i].style.height = `${graphValuesArray[i]}%`;
    }
}

function randomizeNotificationCount() {
    let newNotificationValue = getRandomNumberRange(0, 12).toString();

    if (newNotificationValue == 0) {
        notificationCount.style.visibility = "hidden";
    } else if (newNotificationValue > 9) {
        newNotificationValue = "9+";
    }
    
    notificationCount.innerText = newNotificationValue;
}

// Randomize view count to posts elements
viewCounts.forEach(viewCount => {
    viewCount.innerText = getRandomNumberRange(1, 999) + "K";
});

// Randomize trending posts counts
trendingPostsCounts.forEach(postCount => {
    postCount.innerText = getRandomNumberRange(1, 999) + "K";
});


// Randomize graph bar values
randomizeGraphBarValues();

// Notification count (between 0 to 9, and then 9+ if number is grater than 9)
randomizeNotificationCount();

const nameElement = document.querySelector(".name");

async function randomizeTextFromJSON(element, jsonFileName) {
    const url = `json/${jsonFileName}.json`;

    const response = await fetch(url);
    const data = await response.json();

    const randomIndex = getRandomNumberRange(0, data.length - 1);
    element.innerText = data[randomIndex];
}

randomizeTextFromJSON(nameElement, "names");