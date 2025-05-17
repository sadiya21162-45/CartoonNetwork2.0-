document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  const preloader = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Sticky Header on Scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Character Slider
  const sliderContainer = document.querySelector(".slider-container");
  const sliderCards = document.querySelectorAll(".character-card");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  let currentIndex = 0;
  const cardWidth = sliderCards[0].offsetWidth + 30; // Including margin

  function updateSlider() {
    sliderContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < sliderCards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // Auto-slide for character slider
  let autoSlideInterval = setInterval(() => {
    if (currentIndex < sliderCards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }, 5000);

  // Pause auto-slide on hover
  const slider = document.querySelector(".characters-slider");
  slider.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  slider.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => {
      if (currentIndex < sliderCards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    }, 5000);
  });

  // Newsletter Form Submission
  const newsletterForm = document.getElementById("subscribe-form");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (email) {
      // Here you would typically send the email to your server
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = "";
    }
  });

  // Animate elements on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".show-card, .character-card, .game-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  document
    .querySelectorAll(".show-card, .character-card, .game-card")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Play button animation for games
  const gameCards = document.querySelectorAll(".game-card");

  gameCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const playBtn = this.querySelector(".play-btn");
      playBtn.style.transform = "translate(-50%, -50%) scale(1.1)";
    });

    card.addEventListener("mouseleave", function () {
      const playBtn = this.querySelector(".play-btn");
      playBtn.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
});
