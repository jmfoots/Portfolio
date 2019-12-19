HTMLElement.prototype.xPath = function(){
  if (this.id) {
    return `//*[@id=${this.id}]`
  } else if (this.tagName === 'BODY') {
    return '/html/body'
  } else {
    const sameTagSiblings = Array.from(this.parentNode.childNodes)
      .filter(e => e.nodeName === this.nodeName)
    const idx = sameTagSiblings.indexOf(this)

    return getElementXPath(this.parentNode) +
      '/' +
      this.tagName.toLowerCase() +
      (sameTagSiblings.length > 1 ? `[${idx + 1}]` : '')
  }
  return null
}

String.prototype.splice = function(idx, str) {
  return this.slice(0, idx) + str + this.slice(idx);
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
  var id = 'PseudoCSS';
	var css = document.getElementById(id) || document.createElement('style');
      css.id = id;
      sheet = css.innerHTML;
  var style = sheet.indexOf(`${this.xPath}::${element}{`);
  if (style > 0) {
    sheet.splice(style,`\n${prop}:${value}`);
  } else {
    sheet += ` ${this.xPath}::${element}{${prop}:${value}}`
    document.getElementsByTagName('head')[0].appendChild(css);
  }
  console.log(sheet);
  return this;
};