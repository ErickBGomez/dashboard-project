const viewCounts = document.querySelectorAll(".view-count");

// Random number between two values (both inclusive)
function getRandomNumberRange(minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

viewCounts.forEach(viewCount => {
    viewCount.innerText = getRandomNumberRange(0, 999) + "K";
});