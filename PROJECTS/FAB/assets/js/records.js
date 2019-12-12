function LoadHeadings() {
	var file = document.getElementById('file_scoreHeadings');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateHeading(line)
		}
};

function CreateHeading(line){
	var h = line.split(", ");
	var tag = h[0];
	var headers = document.getElementsByClassName('scoreHead')
	for (var j = 0; j < headers.length; j++){
		for (var i = 0; i < h.length; i++) {
			headers[j].innerHTML += '<th>' + h[i] + '</th>';
		}
	}
};

function LoadScores() {
	var file = document.getElementById('file_scores');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateScore(line)
		}
};
var v = [0,0]
var j = [0,0]
var m = [0,0]
function CreateScore(line){
	var s = line.split(", ");
	var tag = s[0]; var date = s[1]; var opponent = s[2]; var result = s[3]; var score = s[4];
	var row = document.getElementById('T'+tag.toUpperCase());
	row.innerHTML += '<tr id="score' + tag + date + score +'"></tr>';
	for (var i = 1; i < s.length; i++) {
		var field = document.getElementById('score' + tag + date + score +'');
		field.innerHTML +='<td>' + s[i] + '</td>';
	}
	var tally = document.getElementById('F'+tag.toUpperCase());
	var team;
	switch(tag) {
		case 'v':
			team = v
			break;
		case 'j':
			team = j
			break;
		case 'm':
			team = m
			break;
	};
	if (result == "Win"){
		team[0]+=1
	}
	if (result != "Win"){
		team[1]+=1
	}
	tally.innerHTML = "Record: " + team[0] + "-" + team[1]
};