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
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropd-dm");
  const dropdownItems = document.getElementById("dm-items");
  dropdownButton.addEventListener("click", function () {
    dropdownItems.classList.toggle("hidden");
  });
  document.addEventListener("click", function (e) {
    if (
      !dropdownButton.contains(e.target) &&
      !dropdownItems.contains(e.target)
    ) {
      dropdownItems.classList.add("hidden");
    }
  });
});
