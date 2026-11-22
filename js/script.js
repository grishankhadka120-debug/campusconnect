// script.js - shared behaviour for all pages (linked externally)

document.addEventListener("DOMContentLoaded", function () {

    // Highlight the current page's link in the navbar
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar ul li a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Contact form handling (Contact page only)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const statusBox = document.getElementById("formStatus");

            const emailPattern = /^[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}$/;

            if (name === "" || email === "" || message === "") {
                statusBox.style.color = "#c0392b";
                statusBox.textContent = "Please fill in all fields.";
                return;
            }

            if (!emailPattern.test(email)) {
                statusBox.style.color = "#c0392b";
                statusBox.textContent = "Please enter a valid email address.";
                return;
            }

            statusBox.style.color = "#27ae60";
            statusBox.textContent = "Thank you, " + name + "! Your message has been received.";
            contactForm.reset();
        });
    }

});
