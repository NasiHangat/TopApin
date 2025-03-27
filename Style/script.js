document.addEventListener("DOMContentLoaded", function() {
    // Efek hover untuk game item
    const gameItems = document.querySelectorAll(".game-item");
    gameItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "0.3s ease-in-out";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Animasi saat scroll
    const sections = document.querySelectorAll(".game-item");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Toggle mode gelap/terang
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Mode Gelap/Terang";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "#ffcc00";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
let index = 0;
        const slides = document.getElementById("slides");
        const totalSlides = document.querySelectorAll(".slide").length;

        function showSlide(i) {
            index = (i + totalSlides) % totalSlides;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            showSlide(index + 1);
        }

        function prevSlide() {
            showSlide(index - 1);
        }

        setInterval(nextSlide, 10000);

setInterval(() => moveBanner(1), 3000);

function setBanner(index) {
    bannerIndex = index;
    updateBanner();
}
updateBanner();

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".quantity-input");
    const plusButton = document.querySelector(".plus");
    const minusButton = document.querySelector(".minus");

    plusButton.addEventListener("click", function () {
        let value = parseInt(input.value, 10);
        input.value = value + 1;
    });

    minusButton.addEventListener("click", function () {
        let value = parseInt(input.value, 10);
        if (value > 1) {
            input.value = value - 1;
        }
    });
});

document.getElementById("goToB").addEventListener("click", function () {
    // Simulasi: Halaman B tidak ditemukan
    let halamanB = false; // Anggap halaman B tidak ada

    if (!halamanB) {
        document.getElementById("popup").style.display = "flex";
    } else {
        window.location.href = "halamanB.html"; // Jika ada, pindah ke B
    }
});

// Tombol kembali ke A
document.getElementById("backToA").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

        document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chatMessages');
            const messageInput = document.getElementById('messageInput');
            const sendButton = document.getElementById('sendButton');
            
            function addMessage(content, isUser = false) {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                const timeString = `${hours}:${minutes}`;
                
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${isUser ? 'user' : 'cs'}`;
                
                messageDiv.innerHTML = `
                    <div class="message-content">${content}</div>
                    <div class="message-time">${timeString}</div>
                `;
                
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            function handleUserMessage() {
                const message = messageInput.value.trim();
                if (message) {
                    addMessage(message, true);
                    messageInput.value = '';
                    
                    // Simulate CS response after a short delay
                    setTimeout(() => {
                        let response;
                        if (message.toLowerCase().includes('harga') || message.toLowerCase().includes('promo')) {
                            response = "Untuk informasi harga dan promo terbaru, silakan kunjungi halaman game yang Anda inginkan di website kami. Kami selalu menawarkan harga terbaik dan promo menarik!";
                        } else if (message.toLowerCase().includes('pembayaran') || message.toLowerCase().includes('bayar')) {
                            response = "TopApIn menyediakan berbagai metode pembayaran seperti transfer bank, e-wallet, dan QRIS. Semua transaksi dijamin aman dan cepat.";
                        } else if (message.toLowerCase().includes('bantuan') || message.toLowerCase().includes('help')) {
                            response = "Kami siap membantu Anda! Silakan jelaskan masalah yang Anda hadapi dengan lebih detail.";
                        } else {
                            response = "Terima kasih atas pesan Anda. Customer service kami akan segera merespons. Mohon tunggu sebentar ya!";
                        }
                        addMessage(response);
                    }, 1000);
                }
            }
            
            sendButton.addEventListener('click', handleUserMessage);
            
            messageInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleUserMessage();
                }
            });
        });
