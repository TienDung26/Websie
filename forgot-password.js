 // Xử lý sự kiện quên mật khẩu
document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById("forgot-username").value;

    // Kiểm tra người dùng
    const userExists = users.find(u => u.username === usernameOrEmail);
    if (userExists) {
        alert("A password reset link has been sent to your email.");
        window.location.href = "index.html";  // Quay lại trang đăng nhập
    } else {
        document.getElementById("forgot-password-error").textContent = "Username or email not found!";
    }
});
