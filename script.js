const topButton = document.querySelector(".top_button");

// Добавляем обработчик прокрутки
window.addEventListener("scroll", () => {
  // Показываем кнопку, если прокрутили вниз более чем на 100px
  if (window.scrollY > 100) {
    topButton.style.display = "block";
  } else {
    // Скрываем кнопку, если прокрутка выше
    topButton.style.display = "none";
  }
});

const burger = document.querySelector(".burger");
const sideMenu = document.querySelector(".side-menu");

burger.addEventListener("click", () => {
  // Переключаем классы для кнопки и меню
  burger.classList.toggle("active");
  sideMenu.classList.toggle("open");
});
