// User puts name and display it
function getUserName() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById('welcomeMessage').innerHTML = "Hello, " + userName + "! Welcome to my website!";
    }
}

// Function to enlarge or shrink the profile picture when clicked
function enlargeImage() {
    var img = document.getElementById("profilePic");
    if (img.style.width === "200px") {
        img.style.width = "500px";  // Enlarge image
    } else {
        img.style.width = "200px";  // Revert to original size
    }
}

// JavaScript for the accordion (collapsible) functionality
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(function (accordion) {
        accordion.addEventListener('click', function () {
            // Toggle the active class for the clicked accordion button
            this.classList.toggle('active');
            
            // Get the panel (content) associated with the clicked accordion
            const panel = this.nextElementSibling;

            // Toggle the panel visibility
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
});
