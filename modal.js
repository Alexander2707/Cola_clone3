const modal = document.querySelector('.dropdown-conteiner');
const modalBtnOpen = document.querySelector('.dropdown-buton'); 
const modalBtnClose = document.querySelector('.dropdown-buton');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);