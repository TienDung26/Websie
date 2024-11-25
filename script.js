// Xử lý sự kiện đăng nhập
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Ngừng việc gửi form

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Gửi yêu cầu kiểm tra đăng nhập đến API (Node.js)
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            // Đăng nhập thành công
            document.getElementById("login-screen").style.display = "none";
            document.getElementById("game-screen").style.display = "block";
        } else {
            // Đăng nhập thất bại
            document.getElementById("login-error").textContent = data.message || "Invalid username or password!";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("login-error").textContent = "An error occurred. Please try again later.";
    });
});

// Chức năng bắt đầu game
function startGame() {
    // Chuyển hướng người dùng đến trang game.html khi nhấn Start Game
    window.location.href = 'game.html';
}
