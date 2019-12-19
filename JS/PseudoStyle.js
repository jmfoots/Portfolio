HTMLElement.prototype.cssPath = function(){
  if (this.id) {
    return `#${this.id}`
  } else {
    var parents = '';
    var parent = this.parentNode.tagName;
    while (parent.parentNode){
      parents += `${parent} > `;
      parent = parent.parentNode.tagName;
    }
    return `${parents}${this.tagName.toLowerCase()}`
  }
}

String.prototype.splice = function(idx, str) {
  return this.slice(0, idx) + str + this.slice(idx);
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var css = document.getElementById('PseudoCSS');
  var style = css.innerHTML.indexOf(`${this.cssPath()}::${element}{`);
  if (style > 0) {
    css.innerHTML = css.innerHTML.splice(style+1,`\n${prop}:${value}`);
  } else {
    css.innerHTML += ` ${this.cssPath()}::${element}{${prop}:${value}}`;
  }
  console.log(css.innerHTML);
  return this;
};