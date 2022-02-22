// open modal
const openModalBtn = document.querySelector('.openModalBtn');
const modal = document.querySelector('.modal-container');
const mainComp = document.querySelector('.main-comp-container');
const loginDismiss = document.querySelector('.login-dismiss-icon');

openModalBtn.addEventListener('click', openModal)

function openModal() {
    if(modal.style.display = 'none') {
        modal.style.display = 'flex';
    }
}

loginDismiss.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
    mainComp.style.filter = 'none';
}