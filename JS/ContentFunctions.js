document.onload(function() {
    document.querySelector('summary[title=\'Page Details\']').insertAdjacentText('beforeend', document.lastModified);
    document.querySelector('nav > label:first-child > input').click();
    document.querySelector('iframe[title=navigation]');
});

document.addEventListener('keyup', function(e) {
    var lightbox = document.querySelector('details[title=lightbox][open] > summary');
    if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.click();
});

