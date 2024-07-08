function toggleContent(event) {
  event.preventDefault();
  const cardContent = event.target.closest('.card-content');
  cardContent.classList.toggle('active');
  const button = cardContent.querySelector('.card-button');
  button.textContent = cardContent.classList.contains('active') ? 'Read Less' : 'Read More';
}
