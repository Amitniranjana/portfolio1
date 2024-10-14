  // Dynamic Greeting
  const headerTitle = document.querySelector('header h1');
  const hours = new Date().getHours();
  if (hours < 12) {
      headerTitle.textContent = "Good Morning, I'm Amit Niranjan!";
  } else if (hours < 18) {
      headerTitle.textContent = "Good Afternoon, I'm Amit Niranjan!";
  } else {
      headerTitle.textContent = "Good Evening, I'm Amit Niranjan!";
  }

  // Smooth scroll for nav links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetSection = document.querySelector(this.getAttribute('href'));
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Back-to-top button
  const backToTopButton = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Toggle Light/Dark Mode
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Light/Dark Mode';
  toggleButton.style.position = 'fixed';
  toggleButton.style.top = '10px';
  toggleButton.style.right = '10px';
  toggleButton.style.padding = '10px';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
  });