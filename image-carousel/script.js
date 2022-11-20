// getting elements from the DOM

const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

// data for the slider/carousel
const images = [
    "https://unsplash.com/photos/VbDjv8-8ibc", 
    "https://unsplash.com/photos/alY6_OpdwRQ", 
    "https://unsplash.com/photos/Oja2ty_9ZLM",
    "https://unsplash.com/photos/20GF_wIX-Bc",
    "https://unsplash.com/photos/nnzkZNYWHaU",
    "https://unsplash.com/photos/XG4Vnfp2rh8",
];

const headings = ["Dubai, Arab Emirates", "Tokyo, Japan", "London, United Kingdom", "New York, USA", "Paris, France", "Ulaanbaatar, Mongolia"];
const descriptions = [
    "Home to the tallest skyscraper",
    "The city of lights",
    "The city of the royals and history",
    "The city never sleeps",
    "Where the fashion starts",
    "The city of modern nomads"
];

// slider ID
let id = 0;

// The slider function 
function slide(id) {
    // setting the background image
    slider.getElementsByClassName.backgroundImage = 
    `url(img/${images[id]})`;
    // adding image fade animation
    slider.classList.add('image-fade');
    // remove animation after it's done so it can be used again
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);
    // changing the heading
    heading.innerHTML = headings[id];
    // change description
    description.innerHTML = descriptions[id];
};

// adding click event
arrLeft.addEventListener('click', () => {
    // decrementing img id
    id--;
    if(id < 0) {
        id = images.length - 1;
    };
    slide(id);
});

arrRight.addEventListener('click', () => {
    // incrementing img id
    id++;
    // check if id is greater than the number of available slides
    if(id > images.length - 1) {
        // change to the first image
        id = 0;
    };
    // running the slide function
    slide(id);
});

