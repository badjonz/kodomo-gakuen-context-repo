// Nav bar js
"use strict";
const pageHeader = document.querySelector(".page-header");
const mainHeader = document.querySelector(".header");
const prenav = document.querySelector(".pre-nav");
const logo = document.querySelector(".logo");

const tabs = document.querySelectorAll(".age-group__tab");
const tabsContainer = document.querySelector(".age-group__tab-container");
const tabsContent = document.querySelectorAll(".age-group__content");

const infoNav = document.querySelector(".nav-menu__link--2");
// const formsNav = document.querySelector(".nav-menu__link--3");
const classNav = document.querySelector(".nav-menu__link--4");
const navList = document.querySelector(".nav-menu__list");
const navSubList = document.querySelectorAll(".nav-sub-phone");
const hamburgerAnim = document.querySelector(".hamburger-menu");
const hamLbl = document.querySelector(".hamburger-menu__btn");

const footer = document.querySelector("#main-footer");

const mediaQuery = window.matchMedia("(max-width: 37.5em)");

const navbar = document.querySelector(".navbar");
const navHeight = navbar.getBoundingClientRect().height;

// General page fnctonality ////////////////////////////////////////
// Navbar animation /////////////////////////////////////////////////

let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset >= 160) {
    navbar.classList.remove("top");
    prenav.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
      hamLbl.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      hamLbl.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    prenav.classList.add("top");
    scrolled = false;
  }
};

infoNav.addEventListener("click", function (e) {
  e.preventDefault();
});
// formsNav.addEventListener("click", function (e) {
//   e.preventDefault();
// });
classNav.addEventListener("click", function (e) {
  e.preventDefault();
});

// Phone Nav bar ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (mediaQuery.matches) {
  const hamburgerToggle = document.querySelector(".hamburger-menu__check");
  const navPhone = document.querySelector("#nav-phone");
  const navMenu = navPhone.querySelector(".nav-menu__list");

  hamburgerToggle.addEventListener("change", function () {
    if (this.checked) {
      navPhone.style.width = "65vw";
      navMenu.style.visibility = "visible";
      navMenu.style.opacity = "1";
      console.log("you pressed");
    } else {
      navPhone.style.width = "0";
      navMenu.style.visibility = "hidden";
      navMenu.style.opacity = "0";
    }
  });

  // Close all Sub-menus when the hamburger menu is closed

  $(document).ready(function () {
    $(".hamburger-menu__check").change(function () {
      if (!$(this).is(":checked")) {
        $(".submenu-phone__list").slideUp();
      }
    });
  });

  // Open and closes the submenus when respective menu is clicked

  $(document).ready(function () {
    $(".nav-menu__item").click(function () {
      var submenu = $(this).find(".submenu-phone__list");
      $(".submenu-phone__list").not(submenu).slideUp();
      submenu.slideToggle();
    });
  });
}

if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  tabsContainer.addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    const clicked = e.target.closest(".age-group__tab");
    console.log(clicked);
    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach((t) => t.classList.remove("age-group__tab--active"));
    tabsContent.forEach((tc) =>
      tc.classList.remove("age-group__content--active")
    );

    // Add active tab
    clicked.classList.add("age-group__tab--active");

    // Activate content area
    document
      .querySelector(`.age-group__content--${clicked.dataset.tab}`)
      .classList.add("age-group__content--active");
  });

  //Show JS

  const section = document.querySelector("#about-info");
  const classinfo = document.getElementById("class-info");
  const testimonials = document.getElementById("testimonials");
  const column = section.querySelectorAll("div.column");
  const aboutCol = document.querySelectorAll(".about-col");

  // Show about section ////////////////////////////////////////////////////////////////////////////

  const aboutShow = function (entries) {
    const [entry] = entries;
    // console.log(entry);
    if (entry.isIntersecting) {
      aboutCol.forEach((col) => col.classList.add("show"));
    }
  };

  const aboutObserver = new IntersectionObserver(aboutShow, {
    root: null,
    threshold: 0.1,
  });

  aboutObserver.observe(section);

  // Slider ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const slider = function () {
  //   const slides = document.querySelectorAll(".slide");
  //   const sliderBtnLeft = document.querySelector(".slider__btn--left");
  //   const sliderBtnRight = document.querySelector(".slider__btn--right");
  //   const dotContainer = document.querySelector(".dots");
  //   const maxSlide = slides.length;
  //   let curSlide = 0;

  //   // Functions
  //   const createDots = function () {
  //     slides.forEach(function (_, i) {
  //       dotContainer.insertAdjacentHTML(
  //         "beforeend",
  //         `<button class="dots__dot" data-slide="${i}"></button>`
  //       );
  //     });
  //   };

  //   const activateDot = function (slide) {
  //     document
  //       .querySelectorAll(".dots__dot")
  //       .forEach((dot) => dot.classList.remove("dots__dot--active"));

  //     document
  //       .querySelector(`.dots__dot[data-slide="${slide}"]`)
  //       .classList.add("dots__dot--active");
  //   };

  //   const goToSlide = function (slide) {
  //     slides.forEach((s, i) => {
  //       s.style.transform = `translateX(${100 * (i - slide)}%)`;
  //     });
  //   };

  //   const nextSlide = function () {
  //     if (curSlide === maxSlide - 1) curSlide = 0;
  //     else curSlide++;

  //     goToSlide(curSlide);
  //     activateDot(curSlide);
  //   };
  //   const prevSlide = function () {
  //     if (curSlide === 0) curSlide = maxSlide - 1;
  //     else curSlide--;

  //     goToSlide(curSlide);
  //     activateDot(curSlide);
  //   };

  //   const init = function () {
  //     goToSlide(0);
  //     createDots();
  //     activateDot(0);
  //   };

  //   init();

  //   // Event Handlers
  //   sliderBtnRight.addEventListener("click", nextSlide);
  //   sliderBtnLeft.addEventListener("click", prevSlide);

  //   // Keyboard events
  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "ArrowRight") nextSlide();
  //     e.key === "ArrowLeft" && prevSlide();
  //   });

  //   dotContainer.addEventListener("click", function (e) {
  //     if (e.target.classList.contains("dots__dot")) {
  //       const { slide } = e.target.dataset;
  //       goToSlide(slide);
  //       activateDot(slide);
  //       curSlide = Number(slide);
  //     }
  //   });
  // };
  // slider();

  // Modal /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const announcementModal = document.querySelector(".announcement-modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".close-modal");
  const announcementMinimize = document.querySelector(".announcement-minimize");

  const closeModal = function () {
    console.log("it is working");
    announcementModal.classList.add("hidden");
    overlay.classList.add("hidden");
    announcementMinimize.classList.remove("hidden");
    footer.classList.add("home-footer");
  };

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  announcementMinimize.addEventListener("click", function () {
    announcementModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    announcementMinimize.classList.add("hidden");
    footer.classList.remove("home-footer");
  });
}

if (window.location.pathname === "/star.html") {
  const sNav1 = document.querySelector(".star-nav--1");
  const sNav2 = document.querySelector(".star-nav--2");
  const sNav3 = document.querySelector(".star-nav--3");
  const sNavTop = document.querySelector(".nav-top-btn--star");
  const sTop = document.querySelector("#header-top");
  // Smooth scrolling for star and activity pages

  const info = document.querySelector("#star-information");
  const teachers = document.querySelector("#star-teachers");
  const curriculum = document.querySelector("#star-curriculum");

  const star = document.querySelector("#star");

  sNav1.addEventListener("click", function (e) {
    e.preventDefault();
    info.scrollIntoView({ behavior: "smooth" });
  });

  sNav2.addEventListener("click", function (e) {
    e.preventDefault();
    teachers.scrollIntoView({ behavior: "smooth" });
  });

  sNav3.addEventListener("click", function (e) {
    e.preventDefault();
    curriculum.scrollIntoView({ behavior: "smooth" });
  });

  sNavTop.addEventListener("click", function (e) {
    e.preventDefault();
    sTop.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 360) {
      sNavTop.classList.add("active");
    } else {
      sNavTop.classList.remove("active");
    }
  });
}

if (window.location.pathname === "/activities.html") {
  const aNav1 = document.querySelector(".act-nav--1");
  const aNav2 = document.querySelector(".act-nav--2");
  const aNav3 = document.querySelector(".act-nav--3");
  const aNav4 = document.querySelector(".act-nav--4");
  const aNavTop = document.querySelector(".nav-top-btn--act");
  const aTop = document.querySelector("#header-top");

  const activities = document.querySelector("#activities");
  const gym = document.querySelector("#gymnastics-information");
  const soccer = document.querySelector("#soccer-information");
  const piano = document.querySelector("#piano-information");
  const nakayoshi = document.querySelector("#naka-information");

  aNav1.addEventListener("click", function (e) {
    e.preventDefault();
    gym.scrollIntoView({ behavior: "smooth" });
  });

  aNav2.addEventListener("click", function (e) {
    e.preventDefault();
    soccer.scrollIntoView({ behavior: "smooth" });
  });

  aNav3.addEventListener("click", function (e) {
    e.preventDefault();
    piano.scrollIntoView({ behavior: "smooth" });
  });
  aNav4.addEventListener("click", function (e) {
    e.preventDefault();
    nakayoshi.scrollIntoView({ behavior: "smooth" });
  });

  aNavTop.addEventListener("click", function (e) {
    e.preventDefault();
    aTop.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 360) {
      aNavTop.classList.add("active");
    } else {
      aNavTop.classList.remove("active");
    }
  });
}

// Sticky nav not home page ///////////////////////////////

// if (
//   window.location.pathname !== "/index.html" ||
//   window.location.pathname !== "/"
// ) {
//   const pageStickyNav = function (entries) {
//     const [entry] = entries;
//     console.log(entry);
//     if (!entry.isIntersecting) {
//       navbar.classList.remove("top");
//       prenav.classList.remove("top");
//       navbar.style.transform = "translateY(-70px)";
//       setTimeout(function () {
//         navbar.style.transform = "translateY(0)";
//       }, 200);
//     } else {
//       navbar.classList.add("top");
//       prenav.classList.add("top");
//     }
//   };
//   const pageHeaderObserver = new IntersectionObserver(pageStickyNav, {
//     root: null,
//     threshold: 0.65,
//     rootMargin: `-${navHeight}px`,
//   });
//   pageHeaderObserver.observe(pageHeader);
// }

// document.onkeypress('keypress', function(e){
//   if(e.key === 'Escape'){
//     closeModal();
//   }
// });

// Open and close announcement bar

// const announcementOpenClose = function (){
//   let x = document.getElementById("announcement-container");
//   let iconMaximize = x.getElementsByClassName("toggle");
//   if (x.classList.contains("minimize")) {
//     x.classList.remove("minimize");
//   } else {
//     x.classList.add("minimize");
//     iconMaximize.classList.replace("fa-times-circle", "fa-arrow-alt-circle-up");
//     // iconMaximize.classList.add("far", "fa-arrow-alt-circle-up", "fa-2x");

//   }
// };

// const isInViewport = (el) => {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// const run = () =>
//   column.forEach((item) => {
//     if (
//       isInViewport(classinfo) ||
//       isInViewport(testimonials) ||
//       isInViewport(item)
//     ) {
//       item.classList.add("show");
//     }
//   });

// // Events
// window.addEventListener("load", run);
// window.addEventListener("resize", run);
// window.addEventListener("scroll", run);

// // 1. select slides
// const slides = document.querySelectorAll(".slide");
// const maxSlide = slides.length;

// // 2. Format layout of slides

// // 3. Create variable for current slide
// let currentSlide = 0;

// const goToSlide = function (slide) {
//   slides.forEach(function (s, i) {
//     s.style.transform = `translateX(${100 * (i - slide)}%)`;
//   });
// };

// // 4 select buttons
// const btnRight = document.querySelector(".slider__btn--right");
// const btnLeft = document.querySelector(".slider__btn--left");
// const dotContainer = document.querySelector(".dots");

// const createDots = function () {
//   slides.forEach((_, i) => {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };

// const nextSlide = function () {
//   if (currentSlide === maxSlide - 1) currentSlide = 0;
//   else currentSlide++;
//   goToSlide(currentSlide);
//   activateDot(currentSlide);
//   console.log(currentSlide);
// };

// const prevSlide = function () {
//   if (currentSlide === 0) currentSlide = maxSlide - 1;
//   else currentSlide--;
//   goToSlide(currentSlide);
//   activateDot(currentSlide);
// };

// const activateDot = function (slide) {
//   document
//     .querySelectorAll(".dots__dot")
//     .forEach((dot) => dot.classList.remove("dots__dot--active"));

//   document
//     .querySelector(`.dots__dot[data-slide="${slide}"]`)
//     .classList.add("dots__dot--active");
// };

// const init = function () {
//   goToSlide(0);
//   createDots();
//   activateDot(0);
// };

// init();

// dotContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dots__dot")) {
//     const { slide } = e.target.dataset;

//     currentSlide = Number(slide);
//     console.log(currentSlide);
//     goToSlide(slide);
//     activateDot(slide);
//   }
// });

// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);
// document.addEventListener("keydown", function (e) {
//   e.key === "ArrowRight" && nextSlide();
//   e.key === "ArrowLeft" && prevSlide();
// });
