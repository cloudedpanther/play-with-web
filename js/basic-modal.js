'use strict';

const modalBtn = document.querySelector(".toys-list .toys-toy .modal-button");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".modal-footer button");

const HIDDEN_CLASS = "hidden";

function eraseModal() {
    modalContainer.classList.add(HIDDEN_CLASS);
}

function paintModal() {
    modalContainer.classList.remove(HIDDEN_CLASS);
}

function init() {
    modalBtn.addEventListener("click", paintModal);
    closeModalBtn.addEventListener("click", eraseModal);
}

init();