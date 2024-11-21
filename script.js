// Tạo một danh sách người dùng giả lập (có thể thay thế bằng cơ sở dữ liệu)
const users = [
    { username: "admin", password: "123456" },
    { username: "user2", password: "password2" }
];

// Hàm để kiểm tra đăng nhập
function checkLogin(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    return user ? true : false;
}

// Xử lý sự kiện đăng nhập
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Ngừng việc gửi form

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (checkLogin(username, password)) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password!";
    }
});

// Chức năng bắt đầu game
function startGame() {
    // Chuyển hướng người dùng đến trang game.html khi nhấn Start Game
    window.location.href = 'game.html';
}
