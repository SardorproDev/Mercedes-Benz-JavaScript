window.addEventListener("DOMContentLoaded", () => {
  //LOADER
  // const loader = document.querySelector(".loader");

  // setTimeout(() => {
  //   loader.style.opacity = "0";
  //   setTimeout(() => {
  //     loader.style.display = "none";
  //   }, 1500);
  // }, 2000);

  //TABS
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    tabHeader = document.querySelector(".tabheader");

  // hiddenTabContent function()
  function hiddenTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  // showTabContent function()
  function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hiddenTabContent();
  showTabContent();

  // tabHeader event
  tabHeader.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hiddenTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // MODAL
  const allModalBtn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector(".modal__close");

  setTimeout(function () {
    modal.style.display = "block";
  }, 5000);
  allModalBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
