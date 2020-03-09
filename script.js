var button = document.querySelector(".slide-link_js");
console.log(button);
var modalForm = document.querySelector(".modal-form_js");
console.log(modalForm);
var buttonClose = document.querySelector(".button-closed_js");
var input = document.querySelector(".form-input_js");

button.addEventListener("click", function () {
    modalForm.classList.remove("modal-form_none");
    input.focus();
    console.log();
});

buttonClose.addEventListener("click", function () {
    modalForm.classList.add("modal-form_none");
});

window.addEventListener("keydown" , function (event) {
    if(event.code == "Escape");
    modalForm.classList.add("modal-form_none");
    console.log(event);
});

