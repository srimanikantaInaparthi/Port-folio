document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    Email.send({
      SecureToken: "5d4090cd-32c1-4889-ad58-c8c033e2f282", // Replace with your actual secure token from smtpjs.com
      To: 'srimanikantainaparthi@gmail.com', // Replace with your email address to receive messages
      From: email,
      Subject: `New Contact Form Message from ${name}`,
      Body: `Name: ${name}<br/>Email: ${email}<br/>Message: ${message}`
    }).then(function (message) {
      alert("Message sent successfully!");
      form.reset();
    }).catch(function (error) {
      alert("Failed to send message. Please try again later.");
      console.error(error);
    });
  });
});
