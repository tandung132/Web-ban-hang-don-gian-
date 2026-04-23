<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Cửa Hàng Công Nghệ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>TechStore</h1>
        <div class="cart-icon">Giỏ hàng: <span id="cart-count">0</span></div>
    </header>

    <main class="product-container">
        <div class="product-card">
            <div class="product-image">📱</div>
            <h3>Điện thoại Smartphone</h3>
            <p>Giá: 10.000.000đ</p>
            <button onclick="addToCart()">Thêm vào giỏ</button>
        </div>

        <div class="product-card">
            <div class="product-image">💻</div>
            <h3>Laptop Gaming</h3>
            <p>Giá: 25.000.000đ</p>
            <button onclick="addToCart()">Thêm vào giỏ</button>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>
