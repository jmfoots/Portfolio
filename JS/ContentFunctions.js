document.addEventListener('keyup', function(e) {
    var lightbox = document.querySelector('details[title=lightbox]');
    if (lightbox.open && ([32, 27].indexOf(e.keyCode) >= 0)){
        document.querySelector('details[title=lightbox]').click();
    }
});