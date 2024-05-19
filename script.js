document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const messagePopup = document.getElementById('messagePopup');
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simulated form submission
      setTimeout(() => {
        messagePopup.style.display = 'block'; // Show the message pop-up
        // Hide the message pop-up after 3 seconds
        setTimeout(() => {
          messagePopup.style.display = 'none';
        }, 3000);
        contactForm.reset(); // Reset the form
      }, 1000);
    });
  });
  