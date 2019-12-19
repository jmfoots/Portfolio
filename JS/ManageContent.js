function init(){
    /*Last Updated*/
    document.querySelector(`summary[title='Page Details']`).insertAdjacentText('beforeend', document.lastModified);
    /*Load Navigation*/
    document.querySelector('iframe[title=navigation]').dispatchEvent(new Event('click'), new Event('touchend'));
    /*Default Page*/
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
            document.querySelectorAll('nav > label')[index].click();
        } else if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.click();
    });
    /*Hide*/
    document.querySelector('details[title=lightbox]').addEventListener("toggle", function() {
        var details = document.querySelector('details[title=lightbox')
        for (let sibling of details.parentNode.children) {
            if (sibling !== details) sibling.style.display = sibling.style.display === 'none' ? '' : 'none';
        }
    });
    hexify();
}
/*Navigation*/
function pages(id) {
    var grid = document.querySelector('section[title=grid]');
    var data = document.querySelector('div[title=data]');
    
    var page = document.querySelector(`iframe[title=${id}]`);
    /*Current Page*/
    [].forEach.call(document.querySelectorAll('nav > label'), function(label) {
        if (label != document.querySelector('label[title='+id+']')) {
            label.classList.remove('far'); label.classList.add('fas');
        } else {
            label.classList.add('far'); label.classList.remove('fas');
        }
    });
    /*Clear Content*/
    while (data.firstChild) data.removeChild(data.firstChild);
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    /*Set Content*/
    if (page) page.dispatchEvent(new Event('click'), new Event('touchend'));
}
/*Content Management*/
function clearContent(){
    var content = document.querySelector('div[title=content]');
    while (content.firstChild) content.removeChild(content.firstChild);
}
/*Buttons to Hexagons*/
function hexify(){
    [].forEach.call(document.querySelectorAll('section[title=grid] > h2'), function(h) {
        var horizontal = h.style.width / 2;
        var vertical = h.style.height / 2;
        var color = h.style.backgroundColor;
        
        var before = `
            content:"";
            position: absolute;
            border-bottom: ${vertical}px solid ${color};
            border-left: ${horizontal}px solid transparent;
            border-right: ${horizontal}px solid transparent;
            top: -${vertical}px;`;
        var after = `
            content:"";
            position: absolute;
            border-bottom: ${vertical}px solid ${color};
            border-left: ${horizontal}px solid transparent;
            border-right: ${horizontal}px solid transparent;
            bottom: calc(1px - ${vertical}px);`;
        [].forEach.call(before.split("\n"), function(css) {
            [attr, style]=line.split(":");
            h.pseudoStyle("before", attr, style);
        });
        [].forEach.call(after.split("\n"), function(css) {
            [attr, style]=line.split(":");
            h.pseudoStyle("after", attr, style);
        });
    });
}