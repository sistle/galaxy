
function delay(time, status) {
	setTimeout(() => {
		open = status;
	}, time);
}



const popup = document.querySelectorAll("[data-popup] ");
const popupLinks = document.querySelectorAll(".actions__cabinet, .actions__search");
const popupClose = document.querySelectorAll(".popup__btn-close,.popup");
const popupBody = document.querySelectorAll(".popup__inner");

const lockPadding = document.querySelectorAll(".lock-padding");

const body = document.querySelector("body");

let open = true;

popupLinks.forEach((popupLink) => {
  popupLink.addEventListener("click", popupHandler);
});
popupBody.forEach((body) => {
  body.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

popupClose.forEach((item) => {
  item.addEventListener("click", modalClose);
});
function removePadding(value) {
  body.style.paddingRight = value;
  lockPadding.forEach((item) => {
    item.style.paddingRight = value;
  });
}

function delay(time, status) {
  setTimeout(() => {
    open = status;
  }, time);
}
function popupHandler(event) {
  event.preventDefault();
  let current = this.dataset.popup;
  popup.forEach((item) => {
    if (current === item.dataset.popup) {
      modalOpen(item);
    }
  });
}

function modalOpen(popup) {
  if (popup == null) return;
  if (open) {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

    removePadding(lockPaddingValue);

    body.classList.add("lock");
    popup.classList.add("active");
    delay(500, false);
  }
}

function modalClose(event) {
  if (!open) {
    body.classList.remove("lock");
    this.closest(".popup").classList.remove("active");

    removePadding("0px");
    delay(500, true);
  }
}

new Swiper(".intro-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  watchOverflow: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + ' ">' + (index + 1) + "</span>";
    },
  },
});

const header = document.querySelector(".header");

function headeHendler(entries, observer) {
  if (entries[0].isIntersecting) {
    header.classList.remove("scroll");
  } else {
    header.classList.add("scroll");
  }
}
const headerObserver = new IntersectionObserver(headeHendler, { threshold: 1 });
headerObserver.observe(header);
