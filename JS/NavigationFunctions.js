function pages(id) { 
    [].forEach.call(document.querySelectorAll('nav > label'), function(label) {
        if (label != document.querySelector('label[title='+id+']')) {
            label.classList.remove('far'); label.classList.add('fas');
        } else {
            label.classList.add('far'); label.classList.remove('fas');
        }
    });
}

document.addEventListener('keydown', function(e) {
    var children = document.querySelectorAll('nav > label');
    var current = document.querySelectorAll('nav > label[class*=far]')
    var index = Array.prototype.indexOf.call(children, current);
    if (([39, 9, 38].indexOf(e.keyCode) >= 0)){ //Next
        console.log(index);
        if (index < children.length) {
            children[index+1].click();
        } else children[0].click();
    } else if (([37, 8, 40].indexOf(e.keyCode) >= 0)){ //Prev
        if (index > 0) {
            children[index-1].click();
        } else children[(children.length-1)].click();
    }
}); 