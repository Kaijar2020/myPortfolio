/*
 * Email.js Form Handler for QA Engineer Portfolio
 * Author: Kizar Akib Ayon
 * Date: August, 2025
 */

"use strict";

$(document).ready(function () {
  // Function to show and auto-hide messages
  function showMessage(message, type) {
    const statusMessage = $("#statusMessage");
    statusMessage
      .text(message)
      .removeClass("success error")
      .addClass(type)
      .fadeIn()
      .addClass("show");

    // Hide the message after 2 seconds
    setTimeout(function () {
      statusMessage.removeClass("show").fadeOut();
    }, 2000);
  }

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
      showMessage("Please fill in all fields", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    // Show loading state
    const submitBtn = $(this).find('button[type="submit"]');
    const originalText = submitBtn.text();
    submitBtn.prop("disabled", true).text("Sending...");

    // In a real implementation, you'd use a service like EmailJS or your own backend
    // For demonstration, we're simulating the email sending process
    setTimeout(function () {
      // Reset form
      $("#emailForm")[0].reset();

      // Show success message for 2 seconds
      showMessage("Your message has been sent successfully! I will get back to you soon.", "success");

      // Reset button
      submitBtn.prop("disabled", false).text(originalText);
    }, 1500);
  });
});
