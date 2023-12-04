document.addEventListener('DOMContentLoaded', () => {
  // About Observer
  const phrases = document.querySelectorAll('#about .phrase');

  const observerOptions = {
    root: null, // viewport
    threshold: 1 // Trigger halfway through the element's visibility
  };

  const phraseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  phrases.forEach(phrase => {
    phraseObserver.observe(phrase);
  });

  // Gallery Observer
  const galleryItems = document.querySelectorAll('#gallery .image-box');

  const galleryObserverOptions = {
    root: null, // viewport
    threshold: 1 // adjust as needed
  };

  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, galleryObserverOptions);

  galleryItems.forEach(item => {
    galleryObserver.observe(item);
  });

  // Blog Observer
  const blogArticles = document.querySelectorAll('#blog .featured-article, #blog .article');

  const blogObserverOptions = {
    root: null, // viewport
    threshold: 0.3 // adjust as needed, 0.1 means 10% of the item in the viewport
  };

  const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add class to start animation
        entry.target.classList.add('fadeInUp');
      } else {
        // Remove class to reset animation
        entry.target.classList.remove('fadeInUp');
      }
    });
  }, blogObserverOptions);

  blogArticles.forEach(item => {
    blogObserver.observe(item);
  });

  // Contact Observer
  const contactItems = document.querySelectorAll('#contact > div');

  const contactObserverOptions = {
    root: null, // viewport
    threshold: 0.7 // adjust as needed
  };

  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeInUp');
      } else {
        entry.target.classList.remove('fadeInUp');
      }
    });
  }, contactObserverOptions);

  contactItems.forEach(item => {
    contactObserver.observe(item);
  });

});

// Navigation ----------------------------------------
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');
const listItems = document.querySelectorAll('nav ul li a');

function toggleMenu() {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
  listItems.forEach((listItem) => {
    listItem.classList.toggle('active');
  });
}

function hideMenu() {
  nav.classList.remove('active');
  menuIcon.classList.remove('active');
  listItems.forEach((listItem) => {
    listItem.classList.remove('active');
  });
}