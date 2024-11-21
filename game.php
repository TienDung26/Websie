<?php
session_start();  // Khởi tạo session

// Kiểm tra xem người dùng đã đăng nhập chưa
if (!isset($_SESSION['username'])) {
    header("Location: index.html");  // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game 24h</title>
</head>
<body>
    <h2>Welcome, <?php echo $_SESSION['username']; ?>!</h2>
    <p>Your game starts here.</p>
    <button onclick="startGame()">Start Game</button>

    <script>
        function startGame() {
            alert('Game Started!');
            // Thêm mã khởi tạo trò chơi của bạn tại đây
        }
    </script>
</body>
</html>
