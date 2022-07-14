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
