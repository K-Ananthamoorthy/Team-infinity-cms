function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
// script.js

function toggleMode() {
    const body = document.body;
    const main = document.getElementById("main");
    const moonIcon = document.querySelector("#darkModeToggle i.fa-moon");
    const sunIcon = document.querySelector("#darkModeToggle i.fa-sun");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    main.classList.toggle("dark-mode");
    main.classList.toggle("light-mode");

    const isDarkMode = body.classList.contains("dark-mode");

    const backgroundColor = isDarkMode ? "#333" : "#fff";
    const textColor = isDarkMode ? "#fff" : "#333";

    body.style.backgroundColor = backgroundColor;
    main.style.backgroundColor = backgroundColor;
    main.style.color = textColor;

    const moonColor = isDarkMode ? "#fff" : "#333";
    const sunColor = isDarkMode ? "#ffcc00" : "#fff";

    moonIcon.style.color = moonColor;
    sunIcon.style.color = sunColor;

    // Adjust text color inside cards
    const cardText = document.querySelectorAll(".card-text");
    cardText.forEach((text) => {
        text.style.color = textColor;
    });

    const transitionDuration = "0.5s";
    body.style.transition = `background-color ${transitionDuration}`;
    main.style.transition = `background-color ${transitionDuration}, color ${transitionDuration}`;
}





