document.addEventListener('keyup', function(e) {
    var lightbox = document.querySelector('details[title=lightbox][open] > summary');
    if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.click();
});