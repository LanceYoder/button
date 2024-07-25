
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
const movieList = document.getElementById('movieList');

// List of movies
const movies = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
    'Movie 4',
    'Movie 5'
];

// Function to get a random image URL
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return `images/${imageFiles[randomIndex]}`;
}

// Function to create the movie list with checkboxes
function createMovieList() {
    movieList.innerHTML = ''; // Clear the list before adding items
    movies.forEach((movie, index) => {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `movie-${index}`;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = movie;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        movieList.appendChild(listItem);
    });
}

// Initial setup: Set the button background to a random image and create the movie list
button.style.backgroundImage = `url('${getRandomImage()}')`;
createMovieList();

button.addEventListener('click', function() {
    clickCount++;
    counterDisplay.textContent = `Clicks: ${clickCount}`;
    button.style.backgroundImage = `url('${getRandomImage()}')`;
});
