document.addEventListener('DOMContentLoaded', function() {
    const birthdayForm = document.getElementById('birthdayForm');
    const jumpscareSound = document.getElementById('jumpscare-sound');

    birthdayForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var fullName = document.getElementById('fullName').value;
        var birthDate = document.getElementById('birthDate').value;

        // Validasi tanggal lahir
        var today = new Date();
        var selectedDate = new Date(birthDate);

        if (selectedDate >= today) {
            alert('Tanggal lahir harus lebih kecil dari hari ini.');
            return;
        }

        var age = calculateAge(selectedDate);
        var birthdayMessage = generateBirthdayMessage(fullName, age);

        // Menampilkan pesan ulang tahun di halaman baru
        var birthdayPage = window.open();
        birthdayPage.document.write(birthdayMessage);

        // Memainkan suara jumpscare
        jumpscareSound.play();
    });

    function calculateAge(birthDate) {
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function generateBirthdayMessage(name, age) {
        return `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Ulang Tahun</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            font-family: Arial, sans-serif;
            background: url('Foryou.jpg') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
        }

        .image-box {
            display: inline-block;
            width: 80%;
            max-width: 300px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
        }

        .image-box img {
            width: 100%;
            display: block;
        }

        .next-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ff69b4;
            color: white;
            border: none;
            border-radius: 25px;
            font-size: 18px;
            cursor: pointer;
            text-decoration: none;
        }

        .next-button:hover {
            background-color: #ff1493;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="image-box">
            <img src="Tull.jpg" alt="Ucapan Ulang Tahun">
        </div>
        <h1>Selamat Ulang Tahun, ${name}!</h1>
        <p>Selamat ulang tahun yang ke-${age}! Semoga di hari ulang tahunmu ini kamu mendapatkan banyak kabar bahagia. Doa dariku semoga kamu dapat menjadi pribadi yang lebih baik dan semoga semua doamu terkabul. Sampai ketemu di ulang tahunmu yang selanjutnya!</p>
        <a href="second.html" class="next-button">Next</a>
    </div>
</body>
</html>
        `;
    }
});
