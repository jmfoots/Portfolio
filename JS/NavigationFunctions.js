function menu() { 
    var classes = document.querySelector('label[for=menu]').classList;
    classes.toggle('fa-times'); classes.toggle('fa-bars');
}

function pages(id) { 
    [].forEach.call(document.querySelectorAll('nav > ul > label'), function(label) {
        if (label != document.querySelector('label[title='+id+']')) {
            label.classList.remove('far'); label.classList.add('fas');
        } else {
            label.classList.add('far'); label.classList.remove('fas');
        }
    });
}