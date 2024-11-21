<?php
// Kiểm tra xem người dùng đã đăng nhập chưa
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game 24H</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Logo Game 24h -->
    <div class="logo-container">
        <span class="logo-text">Game 24H</span>
    </div>

    <!-- Màn hình chọn game -->
    <div class="game-list">
        <h2>Choose Your Game</h2>
        <ul>
            <li><a href="game1.php">Game 1</a></li>
            <li><a href="game2.php">Game 2</a></li>
            <li><a href="game3.php">Game 3</a></li>
        </ul>
    </div>

    <div class="auth-links">
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>
