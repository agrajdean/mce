// ANCHORS

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anc) => {
  anc.addEventListener("click", function (event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 50,
      behavior: "smooth",
    });
  });
});

// BURGER MENU

// SLIDER

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


// LANGS
const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ro", "ru", "en"];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "ro";
let currentTexts = {};

const homeTexts = {
  "home_page-title": {
    ro: "Acasă",
    ru: "Домашняя страница",
    en: "Homepage",
  },
};

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homeTexts;
      break;
    case "/another_page.html":
      currentTexts = anotherTexts;
      break;

    default:
      currentTexts = homeTexts;
      break;
  }
}

function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}


langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__btn_active")) {
      currentLang = event.target.dataset.btn;
      localStorage.setItem("language", event.target.dataset.btn);
      resetActiveClass(langButtons, "header__btn_active");
      btn.classList.add("header__btn_active");
      changeLang();
    }
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case "ro":
      document
        .querySelector('[data-btn="ro"]')
        .classList.add("header__btn_active");
      break;
    case "ru":
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("header__btn_active");
      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;

    default:
      document
        .querySelector('[data-btn="ro"]')
        .classList.add("header__btn_active");
      break;
  }
}

function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log("navigator.language", checkBrowserLang());

// Модальное окно
const modal = document.querySelector(".modal");
const modalToggle = document.querySelectorAll("[data-toggle=modal]");
const modalClose = document.querySelector(".modal-close");
// console.log(modalToggle);
modalToggle.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("is-open");
  });
});
modalClose.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove("is-open");
});

checkActiveLangButton();
checkPagePathName();
changeLang();

async function sendMessage() {
  let form = document.getElementById('sendMessageForm'),
    data = new FormData(form);
    console.log(data);
};