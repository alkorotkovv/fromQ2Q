gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Плавная прокрутка страницы
ScrollSmoother.create({
  content: '.content',
  smooth: 1.5,
  effects: true
})

/*
gsap.to(".main-newsletter__akbar-block", {
  scale: 1,
  y: 500,
  opacity: 1,
  duration: 50,
  transition: "linear",
  scrollTrigger: {
       trigger: ".main-newsletter__akbar-block",
       start: "top 80%",
       end: "bottom 20%",
       scrub: true,
  }
})
*/
