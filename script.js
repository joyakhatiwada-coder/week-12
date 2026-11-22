
/* ========================================
   WEEK 10: JS BASICS & CONTROL FLOW
   ======================================== */

// PART 1: TIME-BASED GREETING

let userName = prompt("What is your name?");
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


// PART 2: AGE AND DAYS LIVED VERIFICATION

let birthYear = Number(prompt("What year were you born?"));
let currentYear = new Date().getFullYear();

if (
    Number.isInteger(birthYear) &&
    birthYear > 0 &&
    birthYear <= currentYear
) {
    let age = currentYear - birthYear;
    let daysLived = age * 365;

    console.log(
        "You have lived for approximately " + daysLived + " days!"
    );

    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

} else {
    console.log("Please enter a valid birth year.");
}


// ========================================
// WEEK 11: DOM & DYNAMIC EVENT HANDLING
// ========================================

// PART 3: DARK MODE TOGGLE

let themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}


// ========================================
// WEEK 12: ARRAYS AND LOOPS
// ========================================

// PART 4: HOBBIES ARRAY

let hobbies = [
    "Web Development",
    "Programming",
    "Learning New Technologies",
    "Reading",
    "Creative Activities"
];

let hobbyList = document.querySelector("#hobby-list");

if (hobbyList) {

    // Display each hobby using a for loop

    for (let i = 0; i < hobbies.length; i++) {

        let hobbyItem = document.createElement("li");

        hobbyItem.textContent = hobbies[i];

        hobbyList.appendChild(hobbyItem);
    }
}


// ========================================
// WEEK 12: PHOTO GALLERY
// ========================================

// PART 5: FIVE-PHOTO ARRAY

let photos = [
    "first.jpg",
    "second.jpg",
    "third.jpg",
    "fourth.jpg",
    "fifth.jpg"
];

let currentIndex = 0;

let galleryImage = document.querySelector("#gallery-image");
let photoCounter = document.querySelector("#photo-counter");

let previousButton = document.querySelector("#previous-photo");
let nextButton = document.querySelector("#next-photo");


// PART 6: DISPLAY PHOTO FUNCTION

function showPhoto() {

    if (galleryImage && photoCounter) {

        galleryImage.src = photos[currentIndex];

        galleryImage.alt = "Gallery photo " + (currentIndex + 1);

        photoCounter.textContent =
            "Photo " + (currentIndex + 1) + " of " + photos.length;
    }
}


// PART 7: NEXT PHOTO BUTTON

if (nextButton) {

    nextButton.addEventListener("click", function() {

        currentIndex++;

        // Return to the first photo after the last photo

        if (currentIndex >= photos.length) {
            currentIndex = 0;
        }

        showPhoto();
    });
}


// PART 8: PREVIOUS PHOTO BUTTON

if (previousButton) {

    previousButton.addEventListener("click", function() {

        currentIndex--;

        // Go to the last photo when moving backward from the first

        if (currentIndex < 0) {
            currentIndex = photos.length - 1;
        }

        showPhoto();
    });
}


// Display the first photo when the page loads

showPhoto();
