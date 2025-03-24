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
let bannerIndex = 0;
const banners = document.querySelectorAll(".banner-slide");
const bannerSlider = document.querySelector(".banner-slider");
const dots = document.querySelectorAll(".banner-dot");

function updateBanner() {
    bannerSlider.style.transform = `translateX(${-bannerIndex * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[bannerIndex].classList.add("active");
}

function moveBanner(step) {
    bannerIndex += step;

    if (bannerIndex < 0) {
        bannerIndex = banners.length - 1;
    } else if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    updateBanner();
}

setInterval(() => moveBanner(1), 3000);

function setBanner(index) {
    bannerIndex = index;
    updateBanner();
}

updateBanner();
