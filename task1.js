"use strict"
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах.
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// // Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// const inputProduct = document.querySelector('.input__product');
// const inputRewiew = document.querySelector('.input__rewiew');
// const buttonSubmit = document.querySelector('.button__submit');
// const messageError = document.querySelector('.message__error');

// buttonSubmit.addEventListener("click", function() {
//    localStorage.setItem("Продукт", inputProduct.value);
//    localStorage.setItem("Отзыв", inputRewiew.value);
//    if (inputProduct.value !== "" || inputRewiew.value !== "") {
//       window.location.href = "outputReview.html"
//    } else {
//       messageError.textContent = "Необходимо заполнить все поля ввода"
//    }
// });


const inputProduct = document.querySelector('.input__product');
const inputRewiew = document.querySelector('.input__rewiew');
const buttonSubmit = document.querySelector('.button__submit');
const messageError = document.querySelector('.message__error');

buttonSubmit.addEventListener("click", () => {
   const product = inputProduct.value;
   const rewiew = inputRewiew.value;
   if (product !== "" && rewiew !== "") {
      let store = JSON.parse(localStorage.getItem(product));
      if (store === null) {
         store = []
      }
      store.push(rewiew);
      localStorage.setItem(product, JSON.stringify(store));
      inputProduct.value = "";
      inputRewiew.value = "";
      alert("Отзыв отправлен")
   } else {
      messageError.textContent = "Введены не все поля ввода"
   }
});