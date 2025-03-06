// Animate circular progress bars
  document.querySelectorAll('.circular-progress').forEach((progressBar) => {
    const progressValue = progressBar.querySelector('.progress-value');
    const progress = progressBar.getAttribute('data-progress');
    progressBar.style.setProperty('--progress', `${progress}%`);
    progressValue.textContent = `${progress}%`;
  });

  // Filter Projects
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const lightboxLink = document.getElementById('lightbox-link');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.project-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectCard = link.closest('.project-card');
      const imgSrc = projectCard.querySelector('img').src;
      const title = projectCard.querySelector('.project-title').textContent;
      const description = projectCard.querySelector('.project-description').textContent;
      const demoLink = link.href;

      lightboxImg.src = imgSrc;
      lightboxTitle.textContent = title;
      lightboxDescription.textContent = description;
      lightboxLink.href = demoLink;
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Scroll-to-Top Button
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });