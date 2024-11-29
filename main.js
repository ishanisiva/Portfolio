// JavaScript for the accordion (collapsible) functionality
document.addEventListener("DOMContentLoaded", function() {
    // Get all accordion buttons
    const accordions = document.querySelectorAll(".accordion");

    // Loop through each accordion button
    accordions.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            // Toggle the aria-expanded attribute
            const isExpanded = accordion.getAttribute("aria-expanded") === "true";
            accordion.setAttribute("aria-expanded", !isExpanded);

            // Get the associated panel
            const panel = accordion.nextElementSibling;

            // Toggle the panel visibility
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});

// Back to the top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing Effect JavaScript
const phrases = ["student", "programmer", "technology enthusiast", "team leader"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
    const currentPhrase = phrases[currentPhraseIndex];
    dynamicText.textContent = currentPhrase.substring(0, currentLetterIndex + 1);
    currentLetterIndex++;

    if (currentLetterIndex === currentPhrase.length) {
        setTimeout(deleteEffect, 1500); // Pause before deleting
    } else {
        setTimeout(typeEffect, 100); // Typing speed
    }
}

function deleteEffect() {
    const currentPhrase = phrases[currentPhraseIndex];
    dynamicText.textContent = currentPhrase.substring(0, currentLetterIndex - 1);
    currentLetterIndex--;

    if (currentLetterIndex === 0) {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to next phrase
        setTimeout(typeEffect, 200); // Pause before typing new phrase
    } else {
        setTimeout(deleteEffect, 100); // Deleting speed
    }
}

// Start the typing effect on page load
typeEffect();

// Keyboard naviagtion
accordion.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        this.click();
    }
});

// undefined and erros check
if (phrases && dynamicText) {
    typeEffect();
}