HTMLElement.prototype.cssPath = function(){
  if (this.id) {
    return `#${this.id}`
  } else {
    var parents = '';
    var parent = this.parentNode;
    var siblings = Array.from(parent.childNodes).filter(e => e.nodeName === this.nodeName);
    while (parent.parentNode.tagName.toLowerCase() !== 'body'){
      parents += `${parent.tagName.toLowerCase()} > `;
      parent = parent.parentNode;
    }
    return `${parents}${this.tagName.toLowerCase()}${siblings.length > 1 ? `:nth-child(${siblings.indexOf(this)})` : ''}`
  }
}

String.prototype.splice = function(idx, str) {
  return this.slice(0, idx) + str + this.slice(idx);
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var css = document.getElementById('PseudoCSS');
  var ele = `${this.cssPath()}::${element}`;
  if (css.innerHTML.indexOf(ele) > 0) {
    var idx = css.innerHTML.indexOf(ele)+ele.length+2;
    css.innerHTML = css.innerHTML.splice(idx,`\n${prop}:${value}`);
  } else {
    css.innerHTML += `\n${this.cssPath()}::${element}{ \n${prop}:${value}}`;
  }
  console.log(css.innerHTML);
  return this;
};