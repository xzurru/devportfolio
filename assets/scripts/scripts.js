document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Korrekte Pfade für die Icons
    const sunIcon = "./assets/images/imgs/sun.jpg";  
    const moonIcon = "./assets/images/imgs/moon.png";

    // Dark Mode prüfen & setzen
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeIcon.src = moonIcon;
        themeIcon.alt = "Switch to Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        themeIcon.src = sunIcon;
        themeIcon.alt = "Switch to Dark Mode";
    }

    // Umschalter-Funktion
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeIcon.src = moonIcon;
            themeIcon.alt = "Switch to Light Mode";
            localStorage.setItem("dark-mode", "enabled");
        } else {
            themeIcon.src = sunIcon;
            themeIcon.alt = "Switch to Dark Mode";
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
