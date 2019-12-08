function init(){
    document.querySelector(`summary[title='Page Details']`).insertAdjacentText('beforeend', document.lastModified);
    document.querySelector('iframe[title=navigation]').dispatchEvent(new Event('click'), new Event('touchend'));
    document.querySelector('nav > label:first-child > input').dispatchEvent(new Event('click'), new Event('touchend'));
    /*Listeners*/
    document.addEventListener('keydown', function(e) {
        var lightbox = document.querySelector('details[title=lightbox][open] > summary');
        var children = document.querySelectorAll('nav > label');
        var index = Array.prototype.indexOf.call(children, document.querySelector('label[class*=far]'));
        if ([39, 9, 38, 37, 8, 40].indexOf(e.keyCode) >= 0) {
            if (([39, 9, 38].indexOf(e.keyCode) >= 0)){ //Next
                if (index < (children.length-1)) index+=1;
                    else index=0;
            } else if (([37, 8, 40].indexOf(e.keyCode) >= 0)){ //Prev
                if (index > 0) index-=1;
                    else index=children.length-1;
            }
            console.log(index);
            document.querySelectorAll('nav > label')[index].dispatchEvent(new Event('click'), new Event('touchend'));
        } else if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.dispatchEvent(new Event('click'), new Event('touchend'));
    });
}

/*Navigation*/
function pages(id) {
    [].forEach.call(document.querySelectorAll('nav > label'), function(label) {
        if (label != document.querySelector('label[title='+id+']')) {
            label.classList.remove('far'); label.classList.add('fas');
        } else {
            label.classList.add('far'); label.classList.remove('fas');
        }
    });
    var main = document.querySelector('main');
    var data = document.querySelector('iframe[title='+id+']');
    var lightbox = document.querySelector('div[title=content]');
    while (main.firstChild) main.removeChild(main.firstChild);
    if (lightbox) lightbox.remove();
    if (data) data.dispatchEvent(new Event('click'), new Event('touchend'));
}

