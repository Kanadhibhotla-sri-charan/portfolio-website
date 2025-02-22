// Wait until the page loads completely
document.addEventListener("DOMContentLoaded", function () {
    // Select the form
    const form = document.querySelector("form");

    // Add an event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        alert("Thank you! Your message has been sent.");
        form.reset(); // Clear form fields
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault(); // Stop default jump behavior
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});
