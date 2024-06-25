document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const messagePopup = document.getElementById('messagePopup');
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
    
      setTimeout(() => {
        messagePopup.style.display = 'block'; 
       
        setTimeout(() => {
          messagePopup.style.display = 'none';
        }, 3000);
        contactForm.reset(); 
      }, 1000);
    });
  });
  