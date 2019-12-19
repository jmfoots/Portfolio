HTMLElement.prototype.xPath = function(){
  if (this.id) {
    return `//*[@id=${this.id}]`
  } else if (this.tagName === 'BODY') {
    return '/html/body'
  } else {
    const sameTagSiblings = Array.from(this.parentNode.childNodes).filter(e => e.nodeName === this.nodeName)
    const idx = sameTagSiblings.indexOf(this)
    return `${this.parentNode.xPath}/${this.tagName.toLowerCase()}${(sameTagSiblings.length > 1 ? `[${idx + 1}]` : '')}`
  }
}

String.prototype.splice = function(idx, str) {
  return this.slice(0, idx) + str + this.slice(idx);
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
  var id = 'PseudoCSS';
	var css = document.getElementById(id) || document.createElement('style');
      css.id = id;
  var style = css.innerHTML.indexOf(`${this.xPath}::${element}{`);
  if (style > 0) {
    css.innerHTML = css.innerHTML.splice(style,`\n${prop}:${value}`);
  } else {
    sheet += ` ${this.xPath}::${element}{${prop}:${value}}`
    document.getElementsByTagName('head')[0].appendChild(css);
  }
  console.log(css.innerHTML);
  return this;
};