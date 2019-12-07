function pages(id) {
    [].forEach.call(document.querySelectorAll('nav > label'), function(label) {
        if (label != document.querySelector('label[title='+id+']')) {
            label.classList.remove('far'); label.classList.add('fas');
        } else {
            label.classList.add('far'); label.classList.remove('fas');
        }
    });
    while (document.querySelectorAll('main').firstChild) this.removeChild(this.firstChild);
    document.querySelector('iframe[title='+id+']').click();
}

document.addEventListener('keydown', function(e) {
    var children = document.querySelectorAll('nav > label');
    var index = Array.prototype.indexOf.call(children, document.querySelector('label[class*=far]'));
    if (([39, 9, 38].indexOf(e.keyCode) >= 0)){ //Next
        if (index < (children.length-1)) index+=1;
            else index=0;
    } else if (([37, 8, 40].indexOf(e.keyCode) >= 0)){ //Prev
        if (index > 0) index-=1;
            else index=children.length-1;
    }
    console.log(index);
    document.querySelectorAll('nav > label')[index].click();
});