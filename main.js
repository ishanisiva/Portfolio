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