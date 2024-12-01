const wrapper = document.querySelector('.wrapper') ;
const loginLink = document.querySelector('.login-link') ;
const registerLink = document.querySelector('.register-link');
const btnPopup   = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click',() => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',() => {
    wrapper.classList.remove('active-popup');
});


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".form-box.login form");
    const emailInput = loginForm.querySelector("input[type='email']");
    const passwordInput = loginForm.querySelector("input[type='password']");
    const errorContainer = document.createElement("div");
    errorContainer.className = "error-messages";
    errorContainer.style.color = "red";
    errorContainer.style.marginTop = "10px";
    loginForm.appendChild(errorContainer);

    loginForm.addEventListener("submit", (event) => {
        // Clear previous error messages
        errorContainer.innerHTML = "";

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        let isValid = true;

        // Email validation
        if (!validateEmail(emailValue)) {
            isValid = false;
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Please enter a valid email address.";
            errorContainer.appendChild(errorMessage);
        }

        // Password validation
        if (passwordValue.length < 6) {
            isValid = false;
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Password must be at least 6 characters.";
            errorContainer.appendChild(errorMessage);
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
    });

    // Helper function to validate email
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});


