gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Плавная прокрутка страницы
ScrollSmoother.create({
  content: '.content',
  smooth: 1.5,
  effects: true
})

document.addEventListener('DOMContentLoaded', () => {

gsap.to(".akbar", {
  scale: 1,
  y: 100,
  opacity: 1,
  duration: 50,
  transition: "linear",
  scrollTrigger: {
       trigger: ".akbar",
       start: "top 70%",
       end: "bottom 20%",
       scrub: 0,
  }

})
})
