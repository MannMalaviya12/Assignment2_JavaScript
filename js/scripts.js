// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const myStudentId = document.getElementById('myStudentId');

// Array of image source locations
const imageSources = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const inputValue = parseInt(customNumberInput.value);

    // Display student id
    myStudentId.textContent = "200553410";

    // Change background color based on input value
    if (inputValue < 0 || inputValue > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (inputValue >= 0 && inputValue < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (inputValue >= 20 && inputValue < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (inputValue >= 40 && inputValue < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (inputValue >= 60 && inputValue < 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to change bg color from random number
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    customNumberInput.value = randomValue; // Set input value to the random number
    changeCustomColor(); // Call changeCustomColor function to change background color
}

// Function to generate options for select list
function addList() {
    for (let i = 0; i < imageSources.length; i++) {
        const option = document.createElement('option');
        option.textContent = `Image ${i + 1}`;
        option.value = i;
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const selectedIndex = imageSelect.value;
    if (selectedIndex !== "") {
        images.src = imageSources[selectedIndex];
    } else {
        images.src = ""; // If no option selected, clear the image
    }
}

// Event listeners for on click event of buttons
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);

// Event listener for on change event of select
imageSelect.addEventListener('change', changeImage);

// Call the addList function to generate options for the select list on page load
addList();
