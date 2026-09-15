/* =========================================================
   VIRUNDHOMBAL - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const MenuToggle = document.querySelector(".Menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (MenuToggle && navLinks) {

    MenuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });


    // Close menu when a navigation link is clicked

    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}

/* =========================================================
   2. GALLERY FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Add active class to clicked button
            button.classList.add("active");

            // Get selected category
            const filter = button.getAttribute("data-filter");

            // Show/hide gallery items
            galleryItems.forEach(function (item) {

                const category = item.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });

});

/* =========================================================
   3. RESERVATION DATE RESTRICTION
========================================================= */

const ReservationDate = document.getElementById("date");


if (ReservationDate) {

    // Get today's date

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");


    const todayDate = `${year}-${month}-${day}`;


    // Prevent selecting past dates

    ReservationDate.setAttribute("min", todayDate);

}


/* =========================================================
   4. RESERVATION FORM
========================================================= */

const reservationForm =
    document.getElementById("reservationForm");


if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        // Prevent page refresh

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const guests =
            document.getElementById("guests").value;


        const message =
            document.getElementById("ReservationMessage");


        /* ---------------------------------------------
           Basic validation
        --------------------------------------------- */

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            date === "" ||
            time === "" ||
            guests === ""
        ) {

            message.textContent =
                "Please fill in all required fields.";

            message.style.color = "#b02a37";

            return;

        }


        /* ---------------------------------------------
           Email validation
        --------------------------------------------- */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            message.textContent =
                "Please enter a valid email address.";

            message.style.color = "#b02a37";

            return;

        }


        /* ---------------------------------------------
           Phone validation
        --------------------------------------------- */

        const phonePattern =
            /^[0-9]{10}$/;


        const cleanPhone =
            phone.replace(/\s+/g, "");


        if (!phonePattern.test(cleanPhone)) {

            message.textContent =
                "Please enter a valid 10-digit phone number.";

            message.style.color = "#b02a37";

            return;

        }


        /* ---------------------------------------------
           Success
        --------------------------------------------- */

        message.textContent =
            `Thank you, ${name}! Your Reservation request has been received.`;

        message.style.color = "#2e7d32";


        // Reset form

        reservationForm.reset();

    });

}


/* =========================================================
   5. CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent page refresh

        event.preventDefault();


        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const subject =
            document.getElementById("subject").value;

        const messageText =
            document.getElementById("message").value.trim();


        const message =
            document.getElementById("contactMessage");


        /* ---------------------------------------------
           Required field validation
        --------------------------------------------- */

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            messageText === ""
        ) {

            message.textContent =
                "Please fill in all required fields.";

            message.style.color = "#b02a37";

            return;

        }


        /* ---------------------------------------------
           Email validation
        --------------------------------------------- */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            message.textContent =
                "Please enter a valid email address.";

            message.style.color = "#b02a37";

            return;

        }


        /* ---------------------------------------------
           Success
        --------------------------------------------- */

        message.textContent =
            `Thank you, ${name}! Your message has been sent successfully.`;

        message.style.color = "#2e7d32";


        // Reset form

        contactForm.reset();

    });

}


/* =========================================================
   6. SCROLL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".feature, .menu-item, .gallery-item, .info-card, .value"
    );


if (animatedElements.length > 0) {

    const observer =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";


        observer.observe(element);

    });

}


/* =========================================================
   7. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    if (
        navLinks &&
        MenuToggle &&
        navLinks.classList.contains("active") &&
        !navLinks.contains(event.target) &&
        !MenuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("active");

    }

});


/* =========================================================
   8. CURRENT YEAR IN CONSOLE
========================================================= */

const currentYear = new Date().getFullYear();

console.log(
    `Paarambariya Virundhu Restaurant Website - ${currentYear}`
);