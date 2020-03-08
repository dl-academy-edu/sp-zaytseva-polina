var button = document.querySelector(".slide-link_js");
console.log(button);
var modalForm = document.querySelector(".modal-form_js");
console.log(modalForm);
var buttonClose = document.querySelector(".button-closed_js");

button.addEventListener("click", function () {
    modalForm.classList.remove("modal-form_none");
});

buttonClose.addEventListener("click", function () {
    modalForm.classList.add("modal-form_none");
});