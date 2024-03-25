// Load partial views
var loadables = document.querySelectorAll('div.loadable');
loadables.forEach(function (loadable) {
    var url = loadable.getAttribute('data-url');
    if (!url) return;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {    
        if (this.readyState == 4) {
            if (this.status == 200) {
                loadable.innerHTML = this.responseText;
            }


            if (this.status == 404) {
                loadable.innerHTML = 'Not found';
            }

            loadable.removeAttribute('data-url');
            loadable.removeAttribute('class');
        }
    }

    xhttp.open('GET', url, true);
    xhttp.send();
});