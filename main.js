const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const mobileMenu = window.matchMedia("(max-width: 1024px)");

function setMenuOpen(open) {
  const isOpen = mobileMenu.matches && open;
  navLinks.classList.toggle("open", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  navLinks.inert = mobileMenu.matches && !isOpen;
}

menuBtn.addEventListener("click", () => {
  setMenuOpen(!navLinks.classList.contains("open"));
});
navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a, button")) {
    if (mobileMenu.matches) menuBtn.focus({ preventScroll: true });
    setMenuOpen(false);
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("nav")) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("open")) {
    setMenuOpen(false);
    menuBtn.focus({ preventScroll: true });
  }
});
document.addEventListener("focusin", (event) => {
  if (!event.target.closest("nav")) setMenuOpen(false);
});
mobileMenu.addEventListener("change", () => setMenuOpen(false));
setMenuOpen(false);

// Keep the page usable when the animation CDN is unavailable.
const reveal = typeof ScrollReveal === "function" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ? ScrollReveal()
  : { reveal() {} };

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

reveal.reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
reveal.reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
reveal.reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
reveal.reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

const banner = document.querySelector(".banner__container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

reveal.reveal(".arrival__card", {
  ...scrollRevealOption,
  interval: 500,
});

reveal.reveal(".sale__image img", {
  ...scrollRevealOption,
  origin: "left",
});
reveal.reveal(".sale__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
reveal.reveal(".sale__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
reveal.reveal(".sale__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
reveal.reveal(".sale__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

reveal.reveal(".favourite__card", {
  ...scrollRevealOption,
  interval: 500,
});
