async function init(){
    /*Last Updated*/
    document.querySelector(`summary[title='Page Details']`).insertAdjacentText('beforeend', document.lastModified);
    /*Load Navigation*/
    document.querySelector('iframe[title=navigation]').mouse();
    /*Default Page*/
    checkElement('nav > label:first-child > input').then(resolve => resolve.mouse());
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
            document.querySelectorAll('nav > label')[index].click();
        } else if (lightbox && ([32, 27].indexOf(e.keyCode) >= 0)) lightbox.click();
    });
    [].forEach.call(document.querySelectorAll('section[title=grid] > h2'), function(h2) {
        h2.addEventListener("touchend", mouse());
    });
    /*Hide*/
    document.querySelector('details[title=lightbox]').addEventListener("toggle", function() {
        var details = document.querySelector('details[title=lightbox')
        for (let sibling of details.parentNode.children) {
            if (sibling !== details) sibling.style.display = sibling.style.display === 'none' ? '' : 'none';
        }
    });
}
/*Wait until Exist*/
async function checkElement(element){
    return new Promise(resolve => {setTimeout(() => {resolve(document.querySelector(element));}, 500);});
}
/*Navigation*/
function pages(id) {
    var grid = document.querySelector('section[title=grid]');
    var data = document.querySelector('div[title=data]');
    var pagename = document.querySelector(`h2[title=pagename]`);
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
    if (page) page.mouse();
    pagename.innerHTML = `Portfolio: ${(`${id.charAt(0).toUpperCase()}${id.slice(1)}`)}`;
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
/*Mobile-friendly click*/
HTMLElement.prototype.mouse = function(){
    this.dispatchEvent(new Event('click'), new Event('touchend'));
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