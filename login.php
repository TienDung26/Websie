<?php
session_start();  // Khởi tạo session

// Kiểm tra nếu có dữ liệu từ form gửi lên
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Nhận thông tin từ form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Thông tin tài khoản mẫu (có thể thay đổi)
    $stored_username = 'admin';  // Đảm bảo tên người dùng đúng
    $stored_password = '123456';  // Đảm bảo mật khẩu đúng

    // Kiểm tra đăng nhập
    if ($username === $stored_username && $password === $stored_password) {
        $_SESSION['username'] = $username;  // Lưu thông tin đăng nhập vào session
        header("Location: game.php");  // Chuyển hướng đến màn hình game
        exit();
    } else {
        // Nếu thông tin đăng nhập sai, hiển thị thông báo lỗi
        echo "<script>
                document.getElementById('login-error').textContent = 'Invalid username or password!';
              </script>";
    }
}
?>
