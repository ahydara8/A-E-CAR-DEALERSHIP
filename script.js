document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.car-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      cards.forEach((card) => {
        const category = card.dataset.category;
        const shouldShow = selectedFilter === 'all' || category === selectedFilter;
        card.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Request sent';
        button.disabled = true;

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          form.reset();
        }, 1800);
      }
    });
  }
});
