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
