// Get DOM Elements TODO: modify
const modal = document.querySelector('#modal-einden');
const modal2 = document.querySelector('#modal-portfolio');
const modal3 = document.querySelector('#modal-sport-evolution');
const modalBtn = document.querySelector('#modal-btn');
const modalBtn2 = document.querySelector('#modal-btn2');
const modalBtn3 = document.querySelector('#modal-btn3');
const closeBtn = document.querySelector('.close');
const closeBtn2 = document.querySelector('.close2');
const closeBtn3 = document.querySelector('.close3');

// Events
modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);
closeBtn3.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

function openModal2() {
  modal2.style.display = 'block';
}

function openModal3() {
  modal3.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
