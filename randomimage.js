// Array of image filenames
const imageFiles = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    // Add more image filenames here
];

let clickCount = 0;
const button = document.getElementById('myButton');
const counterDisplay = document.getElementById('counter');

// Function to get a random image URL
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return `images/${imageFiles[randomIndex]}`;
}

// Initial setup: Set the button background to a random image
button.style.backgroundImage = `url('${getRandomImage()}')`;

button.addEventListener('click', function() {
    clickCount++;
    counterDisplay.textContent = `Clicks: ${clickCount}`;
    button.style.backgroundImage = `url('${getRandomImage()}')`;
});
