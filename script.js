/* === ملف script.js === */
document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".container", { opacity: 1, duration: 2, ease: "power2.out" });

    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 500);
});
