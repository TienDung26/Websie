 // Tạo một danh sách người dùng giả lập (có thể thay thế bằng cơ sở dữ liệu)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

// Xử lý sự kiện đăng ký tài khoản
document.getElementById("create-account-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        document.getElementById("create-account-error").textContent = "Passwords do not match!";
        return;
    }

    // Kiểm tra xem người dùng đã tồn tại chưa
    const userExists = users.find(u => u.username === username);
    if (userExists) {
        document.getElementById("create-account-error").textContent = "Username already exists!";
    } else {
        // Thêm người dùng mới
        users.push({ username: username, password: password });
        alert("Account created successfully! You can now log in.");
        window.location.href = "index.html";  // Chuyển về trang đăng nhập
    }
});
