String.prototype.splice = function(idx, str) {
  return this.slice(0, idx) + str + this.slice(idx);
};
HTMLElement.prototype.pseudoStyle = function(element,prop,value){
  var id = 'PseudoCSS';
	var css = document.getElementById(id) || document.createElement('style');
      css.id = id;
      sheet = css.innerHTML;
  var style = sheet.indexOf(`${this}::${element}{`);
  if (style > 0) {
    sheet.splice(style,`\n${prop}:${value};`);
  } else {
    sheet += `${this}::${element}{${prop}:${value};}`
    document.getElementsByTagName('head')[0].appendChild(css);
  }
  console.log(sheet);
  return this;
};