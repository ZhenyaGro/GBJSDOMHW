const modalEl = document.querySelector('.modal');

document.querySelector('.open-modal').addEventListener('click', () => {
  modalEl.classList.toggle('modal_closed');
});