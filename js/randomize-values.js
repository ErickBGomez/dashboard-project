const viewCounts = document.querySelectorAll(".view-count");
const trendingPostsCounts = document.querySelectorAll(".trending-posts-count");
const graphValuesElements = document.querySelectorAll(".graph-bar-value");
const graphBars = document.querySelectorAll(".graph-bar");

// Random number between two values (both inclusive)
function getRandomNumberRange(minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
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
graphValuesElements.forEach(graphValue => {
    graphValue.innerText = getRandomNumberRange(0, 100);
});