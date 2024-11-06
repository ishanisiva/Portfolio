document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        comments: document.getElementById("comments").value
    };

    localStorage.setItem("userFormData", JSON.stringify(formData));
    document.getElementById("output").textContent = "Form submitted successfully!";
});

function clearForm() {
    // Remove the saved form data from localStorage
    localStorage.removeItem("userFormData");
    
    document.getElementById("output").textContent = "Form reset!";
}


