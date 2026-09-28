// Automatically add today's date

const dateField = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];

dateField.value = today;


// Form submission

document.getElementById("agreementForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const clientName = document.getElementById("clientName").value;
    const email = document.getElementById("email").value;
    const signature = document.getElementById("signature").value;
    const agreement = document.getElementById("agree").checked;

    if (!agreement) {
        alert("Please agree to the Terms & Conditions.");
        return;
    }

    if (signature !== clientName) {
        alert("Please enter your full name in the signature field.");
        return;
    }

    // Hide form
    document.getElementById("agreementForm").style.display = "none";

    // Show success message
    document.getElementById("successMessage").style.display = "block";

    console.log("Client Agreement Submitted");
    console.log("Client:", clientName);
    console.log("Email:", email);
    console.log("Date:", dateField.value);
});