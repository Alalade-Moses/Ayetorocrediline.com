// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from actually submitting

        // Get username and password (you can add validation here)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple login check (you can replace this with actual validation)
        if (username && password) {
            // Redirect to the main page (index.html) after successful login
            window.location.href = "index.html"; // Replace with your homepage URL
        } else {
            alert("Please enter a valid username and password.");
        }
    });


     
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;

      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
 

