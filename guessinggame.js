const flagImage = document.getElementById('flag-image');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');

let countries = [];
let currentCountry = null;

// Fetch flag data
fetch('https://restcountries.com/v3.1/all?fbclid=IwAR2MXzbnBH8xmsPhrYzlgMP2-2FUFLR7eGDw-Rr3yu6gqaYgkJpWseJj1xA')
    .then(response => response.json())
    .then(data => {
        countries = data;
        nextCountry();
    });

// Show next flag
function nextCountry() {
    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    flagImage.src = currentCountry.flags.png;
    resultDisplay.textContent = '';
    nextBtn.style.display = 'none';
}

// Check user guess
submitBtn.addEventListener('click', () => {
    const userGuess = guessInput.value.trim();
    if (userGuess.toLowerCase() === currentCountry.name.common.toLowerCase()) {
        resultDisplay.textContent = 'Correct!';
    } else {
        resultDisplay.textContent = 'Incorrect. Try again!';
    }
    nextBtn.style.display = 'block';
});

// Load next flag on button click
nextBtn.addEventListener('click', nextCountry);