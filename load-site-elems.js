// fetch main menu
document.addEventListener("DOMContentLoaded", function() {
    fetch('nav-main-content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-main').innerHTML = data;
        });
});

// fetch footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// fetch title
document.addEventListener("DOMContentLoaded", function() {
    fetch('title.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('title').innerHTML = data;
        });
});