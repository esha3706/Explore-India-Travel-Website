/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

});

/* Close mobile menu
   after clicking a link
*/
const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});

/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (
        document.body.classList.contains("dark-mode")
    ) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";

    }

});

/* =========================
   DESTINATION SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");

const cards =
    document.querySelectorAll(".destination-card");

const noResults =
    document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchValue =
        searchInput.value.toLowerCase().trim();
    let visibleCards = 0;
    cards.forEach(function (card) {
        const destination =
            card.dataset.name.toLowerCase();
        if (
            destination.includes(searchValue)
        ) {
            card.style.display = "block";
            visibleCards++;
        } else {
            card.style.display = "none";
        }

    });

    if (visibleCards === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});

/* =========================
   EXPLORE BUTTON
========================= */

const exploreButtons =
    document.querySelectorAll(".explore-btn");

exploreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const place =
            button.dataset.place;
        alert(
            "Thank you for choosing " +
            place +
            "! More travel information will be available soon."
        );
    });
});

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all the fields.";
        formMessage.style.color = "#d63031";
        return;

    }

    formMessage.textContent =
        "Thank you, " +
        name +
        "! Your message has been submitted successfully.";

    formMessage.style.color = "#159957";
    contactForm.reset();

});

/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");
window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});