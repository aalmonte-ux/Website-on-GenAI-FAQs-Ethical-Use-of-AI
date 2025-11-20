document.addEventListener("DOMContentLoaded", () => {
  const pages = ["Faq.html", "Ethics.html", "article.html"];
  const currentPage = window.location.pathname.split("/").pop();
  const currentIndex = pages.indexOf(currentPage);

  const prevBtn = document.querySelector(".page-item:first-child .page-link");
  const nextBtn = document.querySelector(".page-item:last-child .page-link");

  if (currentIndex > 0) {
    prevBtn.href = pages[currentIndex - 1];
    prevBtn.classList.remove("disabled");
  } else {
    prevBtn.href = "#";
    prevBtn.classList.add("disabled");
  }

  if (currentIndex < pages.length - 1) {
    nextBtn.href = pages[currentIndex + 1];
    nextBtn.classList.remove("disabled");
  } else {
    nextBtn.href = "#";
    nextBtn.classList.add("disabled");
  }

  const pageLinks = document.querySelectorAll(".pagination .page-item a");
  pageLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.parentElement.classList.add("active");
    }
  });

  // Dark/Light mode toggle
  const toggle = document.getElementById('toggleMode');
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const brand = document.querySelector('.navbar-brand');
  const label = document.querySelector('.mode-label');

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.replace('light-mode', 'dark-mode');
      navbar.classList.replace('light-mode', 'dark-mode');
      brand.classList.replace('light-mode', 'dark-mode');
      label.textContent = 'Dark Mode';
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      navbar.classList.replace('dark-mode', 'light-mode');
      brand.classList.replace('dark-mode', 'light-mode');
      label.textContent = 'Light Mode';
    }
  });
});

