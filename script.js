document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "%cDeveloper By ThanhhPhatt",
    "color: red; font-weight: bold; font-size: 50px"
  );

  console.log("Script loaded By ThanhhPhatt");

  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const toggleMenu = (open) => {
    mobileMenu.classList.toggle("-translate-x-full", !open);
    mobileMenu.classList.toggle("translate-x-0", open);
  };
  const handleClickOutside = (event) => {
    if (![mobileMenu, mobileMenuBtn].some((el) => el.contains(event.target))) {
      toggleMenu(false);
    }
  };
  mobileMenuBtn.addEventListener("click", () => toggleMenu(true));
  closeMenuBtn.addEventListener("click", () => toggleMenu(false));
  document.addEventListener("click", handleClickOutside);
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, // Lặp lại khi cuộn
});
const cuteAlert = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
$(window).on("load", function () {
  $("#loader").addClass("hidden");
});
Pusher.logToConsole = true;
var pusher = new Pusher("10d5ea7e7b632db09c72", {
  encrypted: true,
});
var channel = pusher.subscribe("tphatdev");
channel.bind("IsCards", function (data) {
  n = Swal.fire(data.title, data.message, data.icon);
  setTimeout(n.close.bind(n), 10000);
  n.onclick = function () {
    window.location.href = this.tag;
  };
});
