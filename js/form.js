document.getElementById('insuranceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const insuranceType = document.getElementById('insuranceType').value;
    const address = document.getElementById('address').value;

    // Display confirmation message
    const message = `
        Thank you, ${name}! Your application for the ${insuranceType} plan has been submitted successfully.
        We will contact you soon at ${email} or ${phone}.
    `;
    document.getElementById('formMessage').textContent = message;
    document.getElementById('insuranceForm').reset();
});
