var link = document.querySelector('.mail-btn');
var popup = document.querySelector('.mail-form');
var close = document.querySelector('.close');
var overlay = document.querySelector('.modal-overlay');
var overlayClose = document.querySelector('.close');
var form = popup.querySelector('form');
var text = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');

link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('mail-form-active');
    overlay.classList.add('modal-overlay-active');
    text.focus();
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('mail-form-active');
    popup.classList.remove('modal-error');
});

overlayClose.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.classList.remove('modal-overlay-active');
    overlay.classList.remove('modal-error');
});

form.addEventListener('submit', function(event) {
    if (!text.value || !email.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
    } 
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('mail-form-active') || overlay.classList.contains('modal-overlay-active')) {
            popup.classList.remove('mail-form-active');
            overlay.classList.remove('modal-overlay-active');
            popup.classList.remove("modal-error");
        } 
    }
});