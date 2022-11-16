const sections = document.querySelectorAll(".section"); //Выбор всех секций
const sectBtns = document.querySelectorAll(".controls"); //Выбор всех элементов управления - кнопок
const sectBtn = document.querySelectorAll(".control"); //Выбор всех секций управлений - каждой кнопки
const allSections = document.querySelector(".main-content"); //Выбор всего контента

function PageTransitions() {
  // Button click active class позволяет сделать активной одну из кнопок по щелчку.
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //Sections active class  Выбор активного класса секции для изменения фона секции после выбора вкладки.
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();
