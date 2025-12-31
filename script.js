/* Floating hearts */
const MAX_HEARTS = 12;
const heartsLayer = document.getElementById("heartsLayer");

function createHeart() {
    if (heartsLayer.children.length >= MAX_HEARTS) return;

    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 10) + "px";

    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 700);

/* Toggle year sections */
const btn2025 = document.getElementById("btn2025");
const btn2026 = document.getElementById("btn2026");
const y2025 = document.getElementById("y2025");
const y2026 = document.getElementById("y2026");

btn2025.addEventListener("click", () => {
    y2025.style.display = "block";
    y2026.style.display = "none";
});

btn2026.addEventListener("click", () => {
    y2026.style.display = "block";
    y2025.style.display = "none";
});

/* Reveal secret message */
const heartBtn = document.getElementById("heartBtn");
const secretMsg = document.getElementById("secretMsg");

heartBtn.addEventListener("click", () => {
    secretMsg.style.display = "block";
});
