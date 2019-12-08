document.onload(function() {
    document.querySelector('iframe[title=navigation]');
    document.querySelector('nav > label:first-child > input').click();
});

document.addEventListener('keyup', function(e) {
    var lightbox = document.querySelector('details[title=lightbox][open] > summary');
    if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.click();
});

