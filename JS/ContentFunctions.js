function init(){
    document.querySelector(`summary[title='Page Details']`).insertAdjacentText('beforeend', document.lastModified);
    document.querySelector('iframe[title=navigation]').initTouchEvent();
    document.querySelector('nav > label:first-child > input').initTouchEvent();
}

document.addEventListener('keyup', function(e) {
    var lightbox = document.querySelector('details[title=lightbox][open] > summary');
    if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.initTouchEvent();
});

