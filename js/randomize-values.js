const viewCounts = document.querySelectorAll(".view-count");
const trendingPostsCounts = document.querySelectorAll(".trending-posts-count");
const graphValuesElements = document.querySelectorAll(".graph-bar-value");
const graphBars = document.querySelectorAll(".graph-bar");

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