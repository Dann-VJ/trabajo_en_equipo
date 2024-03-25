document.addEventListener("DOMContentLoaded", () => {
    // Ruta base de la página
    var baseUrl = window.location.origin + '/trabajo_en_equipo';

    // Ruta de la imagen del banner
    var imagePath = baseUrl + '/static/img/banner.png';
    document.getElementById('bannerImage').src = imagePath;

    // Ruta del index
    document.getElementById('index').href = baseUrl;

    // Ruta de la unidad 1
    var unit1Url = baseUrl + '/views/u1/1.html';
    document.getElementById('unit1').href = unit1Url;


    var navbarButtons = document.querySelectorAll('.custom-nav-footer .btn');
    navbarButtons.forEach(function(button) {
        button.addEventListener('click', handleNavbarClick);
    });
    loadNavbarState();
});

// Atr activo
function handleNavbarClick(event) {
    var buttonId = event.target.id;
    // LocalStorage
    localStorage.setItem('activeButtonId', buttonId);
}

function loadNavbarState() {
    var activeButtonId = localStorage.getItem('activeButtonId');
    if (activeButtonId) {
        var buttons = document.querySelectorAll('.custom-nav-footer .btn');
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        var activeButton = document.getElementById(activeButtonId);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
}


