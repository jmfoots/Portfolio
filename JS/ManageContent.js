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
/*Initialize new Pseudo CSS*/
function PseudoCSS(){
    var pseudoCSS = document.querySelector('style[id=PseudoCSS]');
    if (pseudoCSS) pseudoCSS.remove();
    var css = document.createElement('style');
    css.id = 'PseudoCSS';
    document.getElementsByTagName('head')[0].appendChild(css);
}
/*Buttons to Hexagons*/
function hexify(){
    PseudoCSS();
    [].forEach.call(document.querySelectorAll('section[title=grid] > h2'), function(h) {
        var horizontal = h.offsetWidth / 2;
        var vertical = h.offsetHeight / 2;
        var border = (h.clientHeight / 2) - vertical;
        var before = `content:"";
        position: absolute;
        left: calc(50% - ${horizontal}px);
        border-bottom: ${vertical}px solid var(--light);
        border-left: ${horizontal}px solid transparent;
        border-right: ${horizontal}px solid transparent;
        top: calc(${border}px - ${vertical}px);`;
        var after = `content:"";
        position: absolute;
        left: calc(50% - ${horizontal}px);
        border-top: ${vertical}px solid var(--light);
        border-left: ${horizontal}px solid transparent;
        border-right: ${horizontal}px solid transparent;
        bottom: calc(${border}px - ${vertical}px);`;
        [].forEach.call(before.split("\n"), function(css) {
            [attr, style] = css.trim('\t').split(':');
            h.pseudoStyle("before", attr, style);
        });
        [].forEach.call(after.split("\n"), function(css) {
            [attr, style] = css.trim('\t').split(':');
            h.pseudoStyle("after", attr, style);
        });
    });
}
/*Return parent chain*/
HTMLElement.prototype.parents = function(){
    var parent = this.parentNode;
    var parents = []; var string = '';
    while (parent.parentNode){
        parents.push(`${parent.tagName.toLowerCase()}`);
        parent = parent.parentNode;
    }
    parents.reverse().forEach(function(parent){ string += `${parent} > `});
    return string;
}
/*Return child's path and index*/
HTMLElement.prototype.cssPath = function(){
    if (this.id) {
        return `#${this.id}`
    } else {
        var siblings = Array.from(this.parentNode.childNodes).filter(e => e.nodeName === this.nodeName);
        return `${this.parents()}${siblings.length > 1 ? `:nth-child(${siblings.indexOf(this)+1})` : ''}`
    }
}
/*Append after index*/
String.prototype.splice = function(idx, str) {
    return this.slice(0, idx) + str + this.slice(idx);
};
/*Create append new CSS style*/
HTMLElement.prototype.pseudoStyle = function(element,prop,value){
    var css = document.getElementById('PseudoCSS');
    var ele = `${this.cssPath()}::${element}`;
    if (css.innerHTML.indexOf(ele) > 0) {
        var idx = css.innerHTML.indexOf(ele)+ele.length+2;
        css.innerHTML = css.innerHTML.splice(idx,`\n${prop}:${value}`);
    } else {
        css.innerHTML += `\n${this.cssPath()}::${element}{ \n${prop}:${value}}`;
    }
    return this;
};