// ================= Smooth Scroll =================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ================= Typing Effect =================

const text = [
    "Front-End Web Developer",
    "HTML & CSS Developer",
    "JavaScript Learner",
    "Creative Designer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.querySelector(".hero-text h2");

function typeEffect() {

    if (!typingElement) return;

    currentText = text[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ================= Scroll Animation =================

const revealElements = document.querySelectorAll(
    ".about, .card, .project-card, .contact"
);

window.addEventListener("scroll", reveal);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            item.classList.add("show");
        }

    });

}