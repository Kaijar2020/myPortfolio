/*
 * Main JavaScript for QA Engineer Portfolio
 * Author: Kizar Akib Ayon
 * Date: August, 2025
 */

$(document).ready(function () {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // Mobile Menu Toggle
  $(".mobile-menu-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".mobile-nav").toggleClass("show");

    // Transform hamburger to X
    if ($(this).hasClass("open")) {
      $(this).find("span:nth-child(1)").css({
        transform: "rotate(45deg) translate(5px, 5px)",
      });
      $(this).find("span:nth-child(2)").css({
        opacity: "0",
      });
      $(this).find("span:nth-child(3)").css({
        transform: "rotate(-45deg) translate(7px, -7px)",
      });
    } else {
      $(this).find("span").css({
        transform: "none",
        opacity: "1",
      });
    }
  });

  // Close mobile menu when clicking a link
  $(".mobile-nav a").on("click", function () {
    $(".mobile-menu-btn").removeClass("open").find("span").css({
      transform: "none",
      opacity: "1",
    });
    $(".mobile-nav").removeClass("show");
  });

  // Smooth scrolling for navigation links
  $('a[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          800
        );
        return false;
      }
    }
  });

  // Active navigation link based on scroll position
  function updateActiveLink() {
    const scrollPosition = $(window).scrollTop();

    $("section").each(function () {
      const sectionTop = $(this).offset().top - 100;
      const sectionBottom = sectionTop + $(this).outerHeight();
      const sectionId = $(this).attr("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        $(".desktop-nav a").removeClass("active");
        $(`.desktop-nav a[href="#${sectionId}"]`).addClass("active");
      }
    });
  }

  // Back to top button
  function handleBackToTopButton() {
    if ($(window).scrollTop() > 300) {
      $("#back-to-top").addClass("show");
    } else {
      $("#back-to-top").removeClass("show");
    }
  }

  // Header scroll effect
  function handleHeaderScroll() {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  }

  // Scroll event handlers
  $(window).on("scroll", function () {
    updateActiveLink();
    handleBackToTopButton();
    handleHeaderScroll();
  });

  // Trigger scroll handlers on page load
  updateActiveLink();
  handleBackToTopButton();
  handleHeaderScroll();

  // Back to top button click handler
  $("#back-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  // Project filtering
  $(".filter-btn").on("click", function () {
    const filterValue = $(this).data("filter");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filterValue === "all") {
      $(".project-item").show();
    } else {
      $(".project-item").hide();
      $(`.project-item[data-category="${filterValue}"]`).show();
    }
  });

  // Animate elements on scroll
  function animateOnScroll() {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.timeline-item, .skill-card, .project-item, .contact-item').each(function() {
        const element = $(this);
        const position = element.offset().top;

        if (position < scroll + windowHeight - 100) {
            element.addClass('fade-in-up');
        }
    });
  }

  $(window).on('scroll', animateOnScroll);
  animateOnScroll(); // Trigger on load

});
