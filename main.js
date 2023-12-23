const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const navs = document.querySelectorAll("nav ul li");
const leftContainer = document.querySelector(".home__left");
const imageWrapper = document.querySelector(".home__right img");

const tl = gsap.timeline();

tl.from(logo, {
  opacity: 0,
  y: 30,
  duration: 0.4,
  ease: "Power4.in",
})
  .from(
    navs,
    {
      y: 20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "Power4.in",
    },
    "-=0.4"
  )
  .from(
    leftContainer,
    {
      y: 20,
      stagger: 0.2,
      opacity: 0,
      duration: 1,
      ease: "Power4.out",
    },
    "-=0.25"
  )
  .from(
    imageWrapper,
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "Power4.out",
    },
    "-=0.6"
  );
