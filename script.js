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
$("#Coc").on("click", function (e) {
  e.preventDefault();
  token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
  $.ajax({
    url: "/api/buy",
    type: "POST",
    dataType: "json",
    data: {
      type: "coc",
      id: "<?=$id;?>",
      token,
    },
    success: function (response) {
      if (response.status) {
        Swal.fire({
          icon: "success",
          title: response.message,
          timer: 1500,
          showConfirmButton: false,
        }).then(() => (window.location.href = "/oauth/taikhoan"));
      } else {
        Swal.fire({
          icon: "error",
          title: "Thất bại",
          text: response.message || errorMsg,
        });
      }
    },
    error: () =>
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
      }),
  });
});
$("#Buyacc").on("click", function (e) {
  e.preventDefault();
  token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
  $.ajax({
    url: "/api/buy",
    type: "POST",
    dataType: "json",
    data: {
      type: "buy",
      id: "<?=$id;?>",
      token,
    },
    success: function (response) {
      if (response.status) {
        Swal.fire({
          icon: "success",
          title: response.message,
          timer: 1500,
          showConfirmButton: false,
        }).then(() => (window.location.href = "/oauth/taikhoan"));
      } else {
        Swal.fire({
          icon: "error",
          title: "Thất bại",
          text: response.message || errorMsg,
        });
      }
    },
    error: () =>
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
      }),
  });
});
$("#BuyRandom").on("click", function (e) {
  e.preventDefault();
  token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
  $.ajax({
    url: "/api/buy",
    type: "POST",
    dataType: "json",
    data: {
      type: "RDbuy",
      id: "<?=$id;?>",
      token,
    },
    success: function (response) {
      if (response.status) {
        Swal.fire({
          icon: "success",
          title: response.message,
          timer: 1500,
          showConfirmButton: false,
        }).then(() => (window.location.href = "/oauth/taikhoan"));
      } else {
        Swal.fire({
          icon: "error",
          title: "Thất bại",
          text: response.message || errorMsg,
        });
      }
    },
    error: () =>
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
      }),
  });
});
$("#yeuthich").on("click", function (e) {
  e.preventDefault();
  token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
  $.ajax({
    url: "/api/buy",
    type: "POST",
    dataType: "json",
    data: {
      type: "yeuthich",
      id: "<?=$id;?>",
      token,
    },
    success: function (response) {
      if (response.status) {
        Swal.fire({
          icon: "success",
          title: response.message,
          timer: 1500,
          showConfirmButton: false,
        }).then(() => (window.location.href = ""));
      } else {
        Swal.fire({
          icon: "error",
          title: "Thất bại",
          text: response.message || errorMsg,
        });
      }
    },
    error: () =>
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
      }),
  });
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
