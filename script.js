// About section
document.addEventListener('DOMContentLoaded', () => {
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
});
