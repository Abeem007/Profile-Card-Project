const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message')
const successMessage = document.getElementById('success-message')

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = (element)  => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim()
    const messageValue = message.value.trim()

    let isFormValid = true;

    if (fullnameValue === '') { setError(fullname, "Full Name is required"); isFormValid = false; } else {setSuccess(fullname)}
    
    if (emailValue === '') { setError(email, "Email is required"); isFormValid = false; } else if (!isValidEmail(emailValue)) { setError(email, "Provide a valid email address"); isFormValid = false;} else{setSuccess(email)}
    
    if (subjectValue === '') { setError(subject, "Subject is required");isFormValid = false; } else{setSuccess(subject)}
    
    if (messageValue === '') { setError(message, "Message is required"); isFormValid = false; } else if (messageValue.length < 10) { setError(message, " Message must be at least 10 characters."); isFormValid = false; } else { setSuccess(message) }
    if (isFormValid) {
      successMessage.innerText = "Form submitted successfully!";
        successMessage.style.color = "#09c372";
        form.reset();
        document.querySelectorAll(".input-control").forEach((ctrl) => {
          ctrl.classList.remove("success");
        });
    }
}
