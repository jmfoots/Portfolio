function init(){
    document.querySelector(`summary[title='Page Details']`).insertAdjacentText('beforeend', document.lastModified);
    document.querySelector('iframe[title=navigation]').dispatchEvent(new Event('click'), new Event('touchend'));
    document.querySelector('nav > label:first-child > input').dispatchEvent(new Event('click'), new Event('touchend'));
}

document.addEventListener('keyup', function(e) {
    var lightbox = document.querySelector('details[title=lightbox][open] > summary');
    if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.dispatchEvent(new Event('click'), new Event('touchend'));
});

