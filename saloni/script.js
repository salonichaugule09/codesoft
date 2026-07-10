const words = [
    "Computer Engineering Student",
    "Python Developer",
    "Frontend Web Developer",
    "Linux Learner",
    "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = words[i];

    if (!isDeleting) {

        document.querySelector(".typing").textContent =
            current.substring(0, j++);

        if (j > current.length) {
            isDeleting = true;

            setTimeout(type, 1200);

            return;
        }

    }

    else {

        document.querySelector(".typing").textContent =
            current.substring(0, j--);

        if (j == 0) {

            isDeleting = false;

            i++;

            if (i == words.length)
                i = 0;

        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});