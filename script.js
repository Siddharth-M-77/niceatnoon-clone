var tl = gsap.timeline();
tl.from("#page1 nav", {
  y: -100,
  opacity: 0,
  duration: 2,
  stagger: {
    amount: 0.1,
  },
});

tl.from("#page1 .hero .left-text .h1-span", {
  opacity: 0, // Faded out
  duration: 1, // Duration of the animation
  ease: "power2.out", // Easing function
  stagger: 0.2, // Stagger time between each word
});
tl.from("#page1 .hero .left-text  .n", {
  opacity: 0, // Faded out
  duration: 1, // Duration of the animation
  ease: "power2.out", // Easing function
  stagger: 0.2, // Stagger time between each word
});
tl.from("#page1 .hero .right-text  p", {
  y: 500,
  opacity: 0, // Faded out
  duration: 1, // Duration of the animation
});
tl.from("#page1 .hero .right-text  .btn", {
  y: 500,
  opacity: 0, // Faded out
  duration: 1, // Duration of the animation
});

tl.to("#page2 img", {
  x: -1700,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2",
    scroll: "body",
    start: "top 50%",
    end: "top -100%",
    // pin:true, //pin the until animation will not end
    scrub: 5,
  },
});
tl.from(".para p", {
  y: 900,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".para",
    start: "top 60%",
    marker: true,
    end: "top 50%",
    // pin:true, //pin the until animation will not end
    scrub: 5,
  },
});
tl.from(".para button", {
  y: 900,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".para",
    start: "top 60%",
    marker: true,
    end: "top 50%",
    // pin:true, //pin the until animation will not end
    scrub: 5,
  },
});

tl.from("#page3 h1", {
  x: -600,
  opacity: 0,
  duration: 2,
  stagger: true,
  scrollTrigger:{
    trigger: "#page3",
    start: "top 30%",
    end: "top 40%",
    scrub: 5,
  }
});
