let theme = sessionStorage.getItem('theme') || "light"; // Retrieve theme from sessionStorage or default to "light"

function setTheme() {
    document.body.classList.remove('dark-mode', 'light-mode');
    if (theme === "light") {
        document.body.classList.add("light-mode");
        document.getElementById("light-icon").style.display = "block";
        document.getElementById("light-icon").style.color = "#333";
        document.getElementById("dark-icon").style.display = "none";
    } else {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-icon").style.display = "block";
        document.getElementById("dark-icon").style.color = "#28a745";
        document.getElementById("light-icon").style.display = "none";
    }
}

function toggleTheme() {
    theme = (theme === "light") ? "dark" : "light";
    sessionStorage.setItem('theme', theme); // Save theme to sessionStorage
    setTheme();
}

window.onload = setTheme;


document.getElementById("hamburger").addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
});

// Call setTheme when the page loads to apply the saved theme