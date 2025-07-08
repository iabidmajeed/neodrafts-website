function smoothScrollAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
smoothScrollAnimation();

function section1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav a, nav button", {
    y: -40,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      scale: 0,
      opacity: 0,
      duration: 0.9,
    },
    "-=0.3"
  );

  tl.from(".client-logos img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
    ease: "power1.inOut",
  });
}
section1Animation(); // Function: Section 1 - Animation

function section2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      scroller: "#main",
      // markers: true,
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl2.from(".services-content", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "aabi"
  );
  tl2.from(
    ".elem.green.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "aabi"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
}
section2Animation(); // Function: Section 2 - Animation

function section1Cursor() {
  var section1 = document.querySelector(".section1");
  var cursor = document.querySelector("#cursor");

  section1.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      duration: 0.2,
      // ease: "power2.out",
    });
  });
  section1.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
  section1.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
}

section1Cursor(); // Function: Section 1 Custom Cursor

function section3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      scroller: "#main",
      // markers: true,
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl3.from("#section3-left", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
  });
  tl3.from("#section3-right img", {
    scale: 0.8,
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
  });
}
// section3Animation(); // Function: Section 3 - Animation

function section4Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
    },
  });
  tl4.from(".section4-content h3", {
    y: 50,
    duration: 0.4,
    opacity: 0,
  });
  tl4.from(".section4-content p", {
    y: 50,
    duration: 0.4,
    opacity: 0,
  });
  tl4.from("#casestudy", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: {
      each: 0.3,
      from: "start",
    },
  });
}
// section4Animation(); // Function: Section 4 - Animation

function footerAnimation() {
  var footer = gsap.timeline({
    scrollTrigger: {
      trigger: "#site-footer",
      scroller: "#main",
      // markers: true,
      start: "top 100%",
      end: "top 50%",
      scrub: 2,
    },
  });

  footer.from("#footer-top-container", {
    y: 60,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 0.15,
  });
  footer.from("#footer-colum1", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
}
// footerAnimation(); // Function: Footer Animation

let menuButton = document.querySelector("#toggle");
let closeButton = document.querySelector("#full i");

const mobileHeader = gsap.timeline();

// 1. Slide in the #full menu
mobileHeader.to("#full", {
  right: 0,
  duration: 0.5,
  ease: "power2.out",
});

// 2. Animate links in from the left
mobileHeader.from(
  "#full a",
  {
    x: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  },
  "-=0.3"
);

// 3. Fade in close button
mobileHeader.from(
  "#full i.ri-close-line",
  {
    opacity: 0,
    duration: 0.3,
  },
  "-=0.5"
);
mobileHeader.pause();
// Event handlers
menuButton.addEventListener("click", function () {
  mobileHeader.play();
});

closeButton.addEventListener("click", function () {
  mobileHeader.reverse();
});

// Swiper JS
function swiperJs() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      // When screen width is 0px and up (mobile)
      0: {
        slidesPerView: 1,
      },
      // When screen width is 768px and up (tablet)
      768: {
        slidesPerView: 2,
      },
      // When screen width is 1024px and up (desktop)
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
swiperJs();
