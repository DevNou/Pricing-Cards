// Price counter animation
const amounts = document.querySelectorAll('.amount');
amounts.forEach(amount => {
  let end = parseInt(amount.innerText);
  let start = 0;
  let duration = 1000;
  let stepTime = Math.abs(Math.floor(duration / end));
  let timer = setInterval(() => {
    start += 1;
    amount.innerText = start;
    if(start >= end) clearInterval(timer);
  }, stepTime);
});

// Card active highlight
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// Scroll fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});
document.querySelectorAll('.card').forEach(card => observer.observe(card));

// Dark/Light mode toggle
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.classList.toggle('fa-moon');
  toggle.classList.toggle('fa-sun');
});
