if (toggle) {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');

      if (navbar) {
        navbar.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
      }

      if (brand) {
        brand.classList.add('dark-mode');
        brand.classList.remove('light-mode');
      }

      if (label) label.textContent = 'Dark Mode';

    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');

      if (navbar) {
        navbar.classList.add('light-mode');
        navbar.classList.remove('dark-mode');
      }

      if (brand) {
        brand.classList.add('light-mode');
        brand.classList.remove('dark-mode');
      }

      if (label) label.textContent = 'Light Mode';
    }
  });
}
