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

// Drop menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdown = (btnId, dropdownId) => {
    const btn = document.getElementById(btnId);
    const dropdown = document.getElementById(dropdownId);

    if (btn && dropdown) {
      btn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
      });

      window.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add("hidden");
        }
      });
    }
  };

  toggleDropdown("danhmuc-menu-btn", "danhmuc-dropdown");
  toggleDropdown("history-menu-btn", "history-dropdown");
  toggleDropdown("user-menu-btn", "user-dropdown");
  toggleDropdown("Mobileuser-menu-btn", "Mobileuser-dropdown");

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuBtn = document.getElementById("close-menu-btn");

  if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  }

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        window.location.href = "/dang-xuat";
      } else {
        console.log("Người dùng đã hủy đăng xuất.");
      }
    });
  }
});

// Caurousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slides = carousel.children;
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    const thumbnails = document.querySelectorAll("#thumbnails img");
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentIndex);
    });
    document.getElementById("imageCounter").textContent = currentIndex + 1;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  document.querySelectorAll("#thumbnails img").forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();
});

//Auth
$(document).ready(function () {
  const handleAuth = (btn, type, getData, successMsg, errorMsg) => {
    $(btn).on("click", function (e) {
      e.preventDefault();
      const csrfToken = getCsrfToken();
      const data = getData();

      if (!csrfToken || Object.values(data).some((v) => !v)) {
        return cuteAlert.fire({
          icon: "error",
          text: "Vui lòng điền đầy đủ thông tin! ",
        });
      }

      $.ajax({
        url: "/api/auth",
        type: "POST",
        dataType: "json",
        data: { ...data, type, token: csrfToken },
        success: function (response) {
          if (response.status) {
            cuteAlert
              .fire({
                icon: "success",
                title: successMsg,
              })
              .then(() => (window.location.href = "/home"));
          } else {
            cuteAlert.fire({
              icon: "error",
              text: response.message || errorMsg,
            });
          }
        },
        error: () =>
          cuteAlert.fire({
            icon: "error",
            title: "Lỗi",
            text: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
          }),
      });
    });
  };
  // Xử lý đăng nhập
  handleAuth(
    "#BtnLogin",
    "login",
    () => ({ users: $("#users").val(), password: $("#password").val() }),
    "Đăng nhập thành công",
    "Thông tin đăng nhập không chính xác."
  );
  // Xử lý đăng ký
  handleAuth(
    "#BtnRegister",
    "register",
    () => ({
      username: $("#username").val(),
      pass: $("#pass").val(),
      repass: $("#repass").val(),
      fullname: $("#fullname").val(),
    }),
    "Đăng ký thành công",
    "Lỗi khi đăng ký."
  );

  function getCsrfToken() {
    return document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
  }
});
