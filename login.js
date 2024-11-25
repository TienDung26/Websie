document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();  // Ngừng form reload lại trang

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Gửi yêu cầu POST tới API để đăng nhập
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    const data = await response.json();

    if (response.ok) {
        // Đăng nhập thành công, chuyển hướng đến trang chính
        window.location.href = 'home.html'; // Trang chính sau khi đăng nhập
    } else {
        // Hiển thị lỗi nếu có
        document.getElementById('login-error').innerText = data.message || 'Invalid username or password.';
    }
});
