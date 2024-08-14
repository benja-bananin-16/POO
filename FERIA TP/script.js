document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;


    window.addEventListener("scroll", function () {
        if (window.scrollY > 800) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


    themeToggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
    });

    

});
