async function init(){
    /*Last Updated*/
    document.querySelector(`summary[id='footer']`).insertAdjacentText('beforeend', document.lastModified);
    /*Load Navigation*/
    document.querySelector('iframe[id=navigation]').mouse();
    /*Default Page*/
    checkElement('nav > label:first-child > input').then(resolve => resolve.mouse());
    /*Listeners*/
    document.addEventListener('keydown', function(e) {
        var summary = document.querySelector('details[id=lightbox][open] > summary');
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
            children[index].click();
        } else if (summary && ([32, 27].indexOf(e.keyCode) >= 0)) summary.click();
    });
    /*Hide*/
    document.querySelector('details[id=lightbox]').addEventListener("toggle", function() {
        var details = document.querySelector('details[id=lightbox]')
        for (let sibling of details.parentNode.children) {
            if (sibling !== details) sibling.style.display = sibling.style.display === 'none' ? '' : 'none';
        }
    });
}
/*Wait until Exist*/
async function checkElement(element){
    return new Promise(resolve => {setTimeout(() => {resolve(document.querySelector(element));}, 250);});
}
/*Navigation*/
function pages(id) {
    var grid = document.querySelector('section[id=grid]');
    var data = document.querySelector('div[id=data]');
    var pagename = document.querySelector(`h2[id=pagename]`);
    var page = document.querySelector(`iframe[id=${id}]`);
    /*Current Page*/
    [].forEach.call(document.querySelectorAll('nav > label'), function(label) {
        if (label != document.querySelector('label[id='+id+']')) {
            label.classList.remove('far'); label.classList.add('fas');
        } else {
            label.classList.add('far'); label.classList.remove('fas');
        }
    });
    /*Clear Content*/
    while (data.firstChild) data.removeChild(data.firstChild);
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    /*Set Content*/
    if (page) page.mouse();
    pagename.innerHTML = `${(`${id.charAt(0).toUpperCase()}${id.slice(1)}`)}`;
    [].forEach.call(document.querySelectorAll(`section[id=grid] > h2`), function(h2) {
        h2.style.cssText = "opacity: 0; transition: 0.7s opacity;";
        h2.addEventListener("DOMContentLoaded", function() {
            h2.style.cssText = "opacity: 1;";
        });
    });
}
/*Content Management*/
function clearContent(){
    var content = document.querySelector('div[id=content]');
    while (content.firstChild) content.removeChild(content.firstChild);
}
/*Mobile-friendly lightbox*/
function Lightbox(){
    document.querySelector('details[id=lightbox]').toggleAttribute('open');
}
/*Prototypes*/
HTMLElement.prototype.mouse = function(){ /*Mobile-friendly click*/
    this.dispatchEvent(new Event('click'), new Event('touchend'));
}
HTMLElement.prototype.parents = function(){ /*Return parent chain*/
    var parent = this.parentNode;
    var parents = []; var string = '';
    while (parent.parentNode){
        parents.push(`${parent.tagName.toLowerCase()}`);
        parent = parent.parentNode;
    }
    parents.reverse().forEach(function(parent){ string += `${parent} > `});
    return string;
}
HTMLElement.prototype.cssPath = function(){ /*Return child's path and index*/
    if (this.id) {
        return `#${this.id}`
    } else {
        var siblings = Array.from(this.parentNode.childNodes).filter(e => e.nodeName === this.nodeName);
        return `${this.parents()}${siblings.length > 1 ? `:nth-child(${siblings.indexOf(this)+1})` : ''}`
    }
}
String.prototype.splice = function(idx, str) { /*Append after index*/
    return this.slice(0, idx) + str + this.slice(idx);
};