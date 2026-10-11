// Set today's date automatically
const dateField = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];

dateField.value = today;


// Handle agreement submission
document.getElementById("agreementForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get client information
    const clientName = document.getElementById("clientName").value.trim();
    const businessName = document.getElementById("businessName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const signature = document.getElementById("signature").value.trim();
    const date = document.getElementById("date").value;
    const agreed = document.getElementById("agree").checked;

    // Validate agreement
    if (!agreed) {
        alert("Please accept the Terms & Conditions.");
        return;
    }

    if (signature !== clientName) {
        alert("Please enter your full name in the signature field.");
        return;
    }

    // Replace this with YOUR email address
    const yourEmail = "rsgokulyt4@gmail.com";

    // Email subject
    const subject = "Digital Marketing Client Agreement - " + clientName;

    // Email content
    const body = `
DIGITAL MARKETING CLIENT AGREEMENT

Client Name: ${clientName}
Business Name: ${businessName}
Client Email: ${email}
Phone Number: ${phone}

Digital Signature: ${signature}
Agreement Date: ${date}

Terms & Conditions Acceptance: YES

The client has confirmed that they have read and agreed
to the Digital Marketing Services Terms & Conditions.

Please retain this email as an agreement record.
    `;

    // Create email link
    const mailtoLink =
        "mailto:" + yourEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    // Open the client's email application
    window.location.href = mailtoLink;

});
