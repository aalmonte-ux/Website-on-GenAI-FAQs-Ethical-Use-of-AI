<script>
document.addEventListener("DOMContentLoaded", () => {
  const pages = ["faq.html", "ethics.html", "article.html"];
  const currentPage = window.location.pathname.split("/").pop().toLowerCase().replace(/\/$/, '');
  const currentIndex = pages.indexOf(currentPage);

  const prevBtn = document.querySelector(".page-item:first-child .page-link");
  const nextBtn = document.querySelector(".page-item:last-child .page-link");

  // Set Previous button
  if (currentIndex > 0) {
    prevBtn.href = pages[currentIndex - 1];
    prevBtn.classList.remove("disabled");
  } else {
    prevBtn.href = "#";
    prevBtn.classList.add("disabled");
  }

  // Set Next button
  if (currentIndex < pages.length - 1) {
    nextBtn.href = pages[currentIndex + 1];
    nextBtn.classList.remove("disabled");
  } else {
    nextBtn.href = "#";
    nextBtn.classList.add("disabled");
  }

  // Highlight current page link
  const pageLinks = document.querySelectorAll(".pagination .page-item a");
  pageLinks.forEach(link => {
    if (link.getAttribute("href").toLowerCase() === currentPage) {
      link.parentElement.classList.add("active");
      link.parentElement.setAttribute("aria-current", "page");
    }
  });

  // ✅ FIXED DARK / LIGHT MODE
  const toggle = document.getElementById('toggleMode');
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const brand = document.querySelector('.navbar-brand');
  const label = document.querySelector('.mode-label');

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

});
</script>
