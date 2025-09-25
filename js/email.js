/*
 * Email.js Form Handler for QA Engineer Portfolio
 * Author: Kizar Akib Ayon
 * Date: August, 2025
 */

$(document).ready(function () {
  "use strict";

  // Email form submission handler
  $("#emailForm").on("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("#message").val(),
    };

    // Simple form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Show loading state
    const submitBtn = $(this).find('button[type="submit"]');
    const originalText = submitBtn.text();
    submitBtn.prop("disabled", true).text("Sending...");

    // In a real implementation, you'd use a service like EmailJS or your own backend
    // For demonstration, we're simulating the email sending process

    // Simulate email sending (replace with actual implementation)
    setTimeout(function () {
      // Reset form
      $("#emailForm")[0].reset();

      // Show success message
      alert(
        "Your message has been sent successfully! I will get back to you soon."
      );

      // Reset button
      submitBtn.prop("disabled", false).text(originalText);

      // For actual implementation, use EmailJS or similar service
      // Example with EmailJS:
      /*
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#emailForm')
                .then(function() {
                    $('#emailForm')[0].reset();
                    alert('Your message has been sent successfully! I will get back to you soon.');
                    submitBtn.prop('disabled', false).text(originalText);
                }, function(error) {
                    alert('Sorry, there was an error sending your message. Please try again later.');
                    submitBtn.prop('disabled', false).text(originalText);
                });
            */
    }, 1500);
  });
});
