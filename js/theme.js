/*
 * Theme Switcher JavaScript for QA Engineer Portfolio
 * Author: Kizar Akib Ayon
 * Date: August, 2025
 */

$(document).ready(function () {
  "use strict";

  // Check for saved theme preference or prefer-color-scheme
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Set theme based on saved preference or system preference
  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    $("#theme-toggle").prop("checked", true);
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    $("#theme-toggle").prop("checked", false);
  }

  // Theme toggle click handler
  $("#theme-toggle").on("change", function () {
    if ($(this).is(":checked")) {
      // Switch to dark mode
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");

      // Reinitialize particles with dark theme
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.color.value = "#6c63ff";
        window.pJSDom[0].pJS.particles.line_linked.color = "#6c63ff";
        window.pJSDom[0].pJS.fn.particlesRefresh();
      }
    } else {
      // Switch to light mode
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");

      // Reinitialize particles with light theme
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.color.value = "#4a6cfa";
        window.pJSDom[0].pJS.particles.line_linked.color = "#4a6cfa";
        window.pJSDom[0].pJS.fn.particlesRefresh();
      }
    }
  });
});
