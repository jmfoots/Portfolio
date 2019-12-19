/*By Rizki Lazuardi @ https://gist.github.com/rmdwirizki*/
/*From https://gist.github.com/rmdwirizki/7a5304dab01783dbdf75d15dc140d0de*/
var UID = {
	_current: 0,
  getNew: function(){ this._current++; return this._current; },
  _props: {},
  addProp: function(id, prop, value) {
    this._props[id] = {
      prop : prop,
      value: value
    };
  },
  isPropExist: function(prop, value) {
    for (const id in this._props) {
      if (this._props.hasOwnProperty(id)) {
        const element = this._props[id];
        if (element.prop == prop && element.value == value) {
          return id;
        }
      }
    }
    return false;
  }
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = 'pseudoStyles';
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
      _sheet.id = _sheetId;

  var regx = new RegExp('\\b' + 'pseudoStyle' + '.*?\\b', 'g');
  _this.className = _this.className.replace(regx, '');

  var currentID = UID.isPropExist(prop, value);
  if (currentID != false) {
    _this.className +=  ' ' + 'pseudoStyle' + currentID; 
  }
  else { 
    var newID = UID.getNew();
    UID.addProp(newID, prop, value);
    
    _this.className  += '  ' + 'pseudoStyle' + newID; 
    _sheet.innerHTML += ' .' + 'pseudoStyle' + newID + ':' + element + '{' + prop + ':' + value + '}';
    _head.appendChild(_sheet);
  }
  
  return this;
};