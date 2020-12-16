//register links
const registerLinks = document.querySelectorAll('.get-link');

if (registerLinks.length > 0) {
  registerLinks.forEach(item => {
    item.setAttribute('href', item.getAttribute('href') + window.location.search);
  });
}

//modal 
const modalTrigger = document.querySelector('.hero__info');
const modal = document.querySelector('.modal');

function toggleModal() {
  modal.classList.toggle('active');

  const modalClose = document.querySelector('.modal-info__close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

modalTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleModal();
});

document.addEventListener('click', e => {
  let target = e.target;
  let isModal = target == modal;
  let isTrigger = target == modalTrigger;
  let menuIsActive = modal.classList.contains('active');
  if (isModal && !isTrigger && menuIsActive) {
    toggleModal();
  }
});







function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});