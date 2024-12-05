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

tl.from("#page2 .card", {
  scale: 0,
  duration: 1,
  ease: "elastic.out(1, 0.3)",
  stagger: {
    amount: 0.2,
  },
  scrollTrigger: {
    trigger: "#page2",
    scroll: "body",
    start: "top 50%",
    end: "top 60",
  },
});
