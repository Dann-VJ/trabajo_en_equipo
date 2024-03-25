document.addEventListener("DOMContentLoaded", () => {
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


