//
// Scripts
//
console.log(performance.now());

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
  navbarToggler.onclick = function () {
    navbarToggler.classList.toggle("navbarActive");
  };
});

console.log(performance.now());

let theameSwitch = document.getElementById("theame-switch");
let body = document.querySelector("body");
theameSwitch.onclick = function () {
  body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    theameSwitch.innerHTML = `<i class="fas fa-sun" style="color:#f8f9fa;"></i>`;
  } else {
    theameSwitch.innerHTML = `<i class="far fa-moon"></i>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("the DOM is ready to be interacted with!");
});

console.log(performance.now());

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});