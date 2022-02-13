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

  const modalTimer = setTimeout(openModal, 5000);
  // modalClose.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer);
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
  modalClose.addEventListener("click", closeModal);

  function showMyModaBylScrol() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showMyModaBylScrol);
    }
  }
  window.addEventListener("scroll", showMyModaBylScrol);
});
